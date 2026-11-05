/* Public-site concierge. Model credentials and retrieval stay on the server. */
(() => {
  const trigger = document.querySelector('.concierge-trigger');
  if (!trigger) return;
  const root = trigger.dataset.conciergeRoot || '';
  const base = new URL(root || './', location.href);
  const url = path => new URL(path, base).href;
  const portrait = url('assets/characters/weiwei-pearl-blue-v1.png');
  const key = 'weiwei-concierge-preview-v1';
  const small = matchMedia('(max-width:760px)');
  const data = () => window.WEIWEI_CONCIERGE_DATA;
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const icon = name => {
    const strokes = {
      'rotate-ccw': ['M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8','M3 3v5h5'],
      'maximize-2': ['M15 3h6v6','M21 3l-7 7','M9 21H3v-6','M3 21l7-7'],
      'minimize-2': ['M4 14h6v6','M10 14l-7 7','M20 10h-6V4','M14 10l7-7'],
      x: ['M18 6 6 18','M6 6l12 12']
    };
    if (strokes[name]) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('fill','none'); svg.setAttribute('stroke','currentColor');
      svg.setAttribute('stroke-width','2'); svg.setAttribute('stroke-linecap','round'); svg.setAttribute('stroke-linejoin','round'); svg.setAttribute('aria-hidden','true');
      for (const d of strokes[name]) {
        const path = document.createElementNS('http://www.w3.org/2000/svg','path'); path.setAttribute('d',d); svg.append(path);
      }
      return svg;
    }
    const img = el('img'); img.src = url(`assets/concierge/icons/${name}.svg`);
    img.alt = ''; img.width = img.height = 20; return img;
  };
  const avatar = () => {
    const span = el('span', 'concierge-avatar'), img = el('img');
    img.src = portrait; img.alt = ''; img.width = img.height = 44; span.append(img); return span;
  };
  const button = (label, action, className = 'concierge-icon', image) => {
    const node = el('button', className); node.type = 'button';
    if (image) { node.setAttribute('aria-label', label); node.title = label; node.append(icon(image)); }
    else node.textContent = label;
    node.addEventListener('click', action); return node;
  };
  let state = { open: false, expanded: false, turns: [], draft: '', askedQuestions: [] };
  try {
    const saved = JSON.parse(sessionStorage.getItem(key) || 'null');
    if (saved && Array.isArray(saved.turns)) state = {
      open: false, expanded: Boolean(saved.expanded),
      turns: saved.turns.filter(t => typeof t.question === 'string' && typeof t.answer === 'string' && Array.isArray(t.sources)).slice(-20).map(t => ({
        ...t, question: t.question.slice(0,500), answer: t.answer.slice(0,16000),
        mode: t.mode === 'live' ? 'live' : 'guide',
        status: ['pending','streaming'].includes(t.status) ? 'interrupted' : t.status || 'complete',
        notice: ['pending','streaming'].includes(t.status) ? '上次回答因离开或刷新页面而中断。已收到的内容保留在这里。' : t.notice || ''
      })),
      draft: typeof saved.draft === 'string' ? saved.draft.slice(0,500) : '',
      askedQuestions: [...new Set([
        ...(Array.isArray(saved.askedQuestions) ? saved.askedQuestions : []),
        ...saved.turns.flatMap(turn => [turn.question,turn.suggestionLabel])
      ].map(normalizeQuestion).filter(Boolean))]
    };
  } catch { /* The interface also works when session storage is unavailable. */ }
  const save = () => {
    try { sessionStorage.setItem(key, JSON.stringify({ ...state, turns: state.turns.slice(-20) })); } catch {}
  };
  let panel, messages, input, send, evidence, expandButton, backdrop, followups;
  let lastTopic = '', inerted = [], status, resetButton, connectionNote;
  let active = null, connection = { mode:'checking' }, connectionPromise, fitKeyboard = () => {};
  const turnViews = new Map();
  const busy = () => Boolean(active) || connection.mode === 'checking';
  function safeSource(source) {
    if (!source || typeof source.href !== 'string' || typeof source.title !== 'string') return null;
    try {
      const destination = new URL(source.href, base);
      const known = data().routes.some(route => new URL(url(route.href)).pathname === destination.pathname);
      if (destination.origin !== base.origin || !known || destination.search) return null;
      return { id: /^S\d{1,3}$/.test(source.id || '') ? source.id : '', title:source.title.slice(0,120), href:destination.pathname.slice(base.pathname.length) + destination.hash, description:typeof source.description === 'string' ? source.description.slice(0,300) : '' };
    } catch { return null; }
  }
  function sourceList(sources) {
    const seen = new Set();
    return (Array.isArray(sources) ? sources : []).map(safeSource).filter(source => {
      if (!source || seen.has(source.id || source.href)) return false;
      seen.add(source.id || source.href); return true;
    }).slice(0,8);
  }
  function citedSources(text, sources) {
    const cited = new Set([...text.matchAll(/\[(S\d{1,3})\]/g)].map(match => match[1]));
    return sourceList(sources).filter(source => source.id && cited.has(source.id));
  }
  function setModal() {
    const modal = state.open;
    panel.setAttribute('aria-modal', String(modal));
    document.body.classList.toggle('concierge-modal', modal); backdrop.hidden = !state.open;
    for (const [node, previous] of inerted) node.inert = previous;
    inerted = [];
    if (modal) for (const node of document.body.children) {
      if (node !== panel && node !== backdrop && !['SCRIPT','STYLE'].includes(node.tagName)) {
        inerted.push([node,node.inert]); node.inert = true;
      }
    }
  }
  function layout() {
    document.body.classList.toggle('concierge-open', state.open);
    document.body.classList.toggle('concierge-expanded', state.expanded && state.open);
    evidence.hidden = !state.expanded || small.matches; expandButton.hidden = small.matches;
    expandButton.replaceChildren(icon(state.expanded ? 'minimize-2' : 'maximize-2'));
    const label = state.expanded ? '收起展开视图' : '展开对话与资料';
    expandButton.setAttribute('aria-label',label); expandButton.title = label;
    expandButton.setAttribute('aria-pressed',String(state.expanded)); setModal(); fitKeyboard();
  }
  function stop(reason = 'stop') {
    if (!active) return;
    const request = active; active = null; request.controller.abort(); clearTimeout(request.timer);
    request.turn.status = 'interrupted';
    request.turn.notice = reason === 'close' ? '面板已关闭，生成随之停止。已收到的内容保留在这里。' : reason === 'leave' ? '回答因离开页面而中断。已收到的内容保留在这里。' : '已停止回答。已收到的内容保留在这里。';
    refreshTurn(request.turn); updateControls(); save();
    status.textContent = '回答已停止。可以重试这个问题，或继续查看站内资料。';
  }
  function close({ focusEntry = true } = {}) {
    if (!panel || !state.open) return;
    stop('close'); state.open = false; panel.hidden = true; trigger.setAttribute('aria-expanded','false');
    layout(); save(); if (focusEntry) trigger.focus({ preventScroll:true });
  }
  function updateMode() {
    if (!panel) return;
    const live = connection.mode === 'live', checking = connection.mode === 'checking';
    connectionNote.hidden = live;
    connectionNote.replaceChildren();
    if (!live) connectionNote.append(el('span','',checking ? '正在连接 AI…' : 'AI 暂未连接，已切换站内导览。'));
    if (!live && !checking) connectionNote.append(button('重试连接',() => { void checkConnection(true); },'concierge-connection-retry'));
    updateControls();
  }
  function updateControls() {
    if (!panel) return;
    send.disabled = busy() || !input.value.trim();
    panel.querySelectorAll('.concierge-suggestion,.concierge-starter,.concierge-retry,.concierge-local-fallback').forEach(node => { node.disabled = busy(); });
    resetButton.disabled = !state.turns.length && !state.draft;
    messages.setAttribute('aria-busy',String(Boolean(active)));
  }
  async function checkConnection(force = false) {
    if (active) return connection;
    if (connectionPromise) return connectionPromise;
    if (!force && connection.mode !== 'checking') return connection;
    connection = { mode:'checking' }; updateMode();
    const controller = new AbortController(), timer = setTimeout(() => controller.abort(),5000);
    connectionPromise = (async () => {
      try {
        const response = await fetch(url('api/concierge/status'),{ signal:controller.signal, cache:'no-store', headers:{Accept:'application/json'} });
        if (!response.ok) throw new Error('unavailable');
        const result = await response.json();
        connection = result.mode === 'live' ? { mode:'live',knowledgeVersion:result.knowledgeVersion } : { mode:'guide' };
      } catch { connection = { mode:'guide' }; }
      finally { clearTimeout(timer); connectionPromise = null; updateMode(); }
      return connection;
    })();
    return connectionPromise;
  }
  function init() {
    backdrop = el('div','concierge-backdrop'); backdrop.hidden = true; backdrop.addEventListener('click',close);
    panel = el('section','concierge-panel'); panel.id = 'weiwei-concierge'; panel.hidden = true;
    panel.setAttribute('role','dialog'); panel.setAttribute('aria-labelledby','concierge-title'); panel.tabIndex = -1; trigger.setAttribute('aria-controls',panel.id);
    const head = el('header','concierge-head'), copy = el('div','concierge-head__copy'), heading = el('h2','','问问微微'); heading.id = 'concierge-title';
    heading.append(el('span','concierge-ai','AI 助手')); copy.append(heading,el('p','','了解经历，找到相关作品。'));
    const controls = el('div','concierge-controls');
    expandButton = button('展开对话与资料',() => { state.expanded = !state.expanded; layout(); save(); },'concierge-icon','maximize-2');
    resetButton = button('重新开始',resetConversation,'concierge-icon concierge-reset','rotate-ccw');
    controls.append(resetButton,expandButton,button('关闭助手',close,'concierge-icon','x')); head.append(avatar(),copy,controls);
    connectionNote = el('p','concierge-connection-status'); connectionNote.setAttribute('role','status');
    const workspace = el('div','concierge-workspace'), conversation = el('div','concierge-conversation');
    messages = el('div','concierge-messages'); messages.setAttribute('role','log'); messages.setAttribute('aria-label','与微微助手的对话'); messages.setAttribute('aria-live','off'); messages.tabIndex = 0;
    const form = el('form','concierge-form'), label = el('label','visually-hidden','向微微助手提问'); label.htmlFor = 'concierge-input';
    input = el('textarea'); input.id = 'concierge-input'; input.rows = 1; input.maxLength = 500; input.placeholder = '继续问问微微…'; input.value = state.draft;
    send = el('button','concierge-send'); send.type = 'submit'; send.setAttribute('aria-label','发送问题'); send.title = '发送问题'; send.append(icon('arrow-right'));
    input.addEventListener('input',() => { state.draft = input.value; input.style.height = 'auto'; input.style.height = `${Math.min(input.scrollHeight,112)}px`; updateControls(); save(); });
    input.addEventListener('keydown',event => { if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) { event.preventDefault(); if (!busy()) form.requestSubmit(); } });
    form.addEventListener('submit',event => { event.preventDefault(); if (!busy() && input.value.trim()) void ask(input.value); }); form.append(label,input,send);
    followups = el('nav','concierge-followups'); followups.setAttribute('aria-label','继续提问'); followups.hidden = true;
    conversation.append(messages,followups,form);
    evidence = el('aside','concierge-evidence'); evidence.setAttribute('aria-label','相关公开资料'); workspace.append(conversation,evidence);
    status = el('p','visually-hidden concierge-status'); status.setAttribute('role','status'); status.setAttribute('aria-live','polite');
    panel.append(head,connectionNote,workspace,status); document.body.append(backdrop,panel);
    panel.addEventListener('click',event => { if (event.target.closest('a[href]')) { state.expanded = false; close({ focusEntry:false }); } });
    small.addEventListener('change',() => { if (state.open) layout(); });
    document.querySelector('.contact-trigger')?.addEventListener('click',() => close({ focusEntry:false }));
    document.addEventListener('keydown',event => {
      if (!state.open) return;
      if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); close(); return; }
      if (event.key !== 'Tab') return;
      const focusable = [...panel.querySelectorAll('button:not(:disabled),summary,a[href],textarea,[tabindex="0"]')].filter(node => node.getClientRects().length), first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panel)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    },true);
    if (window.visualViewport) {
      fitKeyboard = () => {
        if (small.matches && state.open) { panel.style.setProperty('--concierge-visible-height',`${window.visualViewport.height}px`); panel.style.setProperty('--concierge-visible-top',`${window.visualViewport.offsetTop}px`); }
        else { panel.style.removeProperty('--concierge-visible-height'); panel.style.removeProperty('--concierge-visible-top'); }
      };
      window.visualViewport.addEventListener('resize',fitKeyboard); window.visualViewport.addEventListener('scroll',fitKeyboard);
    }
    window.addEventListener('pagehide',() => { stop('leave'); save(); });
  }
  function resetConversation() {
    if (active) { const old = active; active = null; old.controller.abort(); clearTimeout(old.timer); }
    state.turns = []; state.draft = ''; state.askedQuestions = []; input.value = ''; input.style.height = 'auto'; lastTopic = '';
    render(); save(); status.textContent = '对话已清空，可以重新选择一个话题。';
    if (!small.matches) input.focus({ preventScroll:true });
  }
  function chips(items) {
    const group = el('div','concierge-suggestions');
    for (const item of Array.isArray(items) ? items.slice(0,3) : []) if (typeof item.label === 'string' && typeof item.query === 'string') group.append(button(item.label.slice(0,35),() => { void ask(item.query,item.label); },'concierge-suggestion'));
    return group;
  }
  function normalizeQuestion(text) {
    return typeof text === 'string' ? text.normalize('NFKC').toLowerCase().replace(/[\p{P}\p{S}\s]+/gu,'') : '';
  }
  function rememberQuestion(question,label = '') {
    state.askedQuestions = [...new Set([...(state.askedQuestions || []),question,label].map(normalizeQuestion).filter(Boolean))];
  }
  function followupSuggestions() {
    const latest = state.turns.at(-1);
    if (!latest) return [];
    const seen = new Set([...(state.askedQuestions || []),...state.turns.flatMap(turn => [turn.question,turn.suggestionLabel])].map(normalizeQuestion).filter(Boolean)), choices = [];
    const recommendations = state.turns.slice().reverse().flatMap(turn => Array.isArray(turn.suggestions) ? turn.suggestions.slice(0,6) : []);
    const starters = Array.isArray(data().welcome?.suggestions) ? data().welcome.suggestions : [];
    const curated = (Array.isArray(data().entries) ? data().entries : []).flatMap(entry => Array.isArray(entry.suggestions) ? entry.suggestions : []);
    const candidates = [...recommendations,...starters,...curated].filter(item => typeof item?.label === 'string' && typeof item.query === 'string').map(item => ({label:item.label.trim().slice(0,35),query:item.query.trim().slice(0,500)})).filter(item => normalizeQuestion(item.label) && normalizeQuestion(item.query));
    // Labels and queries are aliases of the same suggestion. Propagate known
    // aliases so a new label cannot bring an already asked question back.
    const expandAliases = () => {
      let changed;
      do {
        changed = false;
        for (const item of candidates) {
          const keys = [normalizeQuestion(item.label),normalizeQuestion(item.query)];
          if (keys.some(key => seen.has(key))) for (const key of keys) if (!seen.has(key)) { seen.add(key); changed = true; }
        }
      } while (changed);
    };
    expandAliases();
    for (const item of candidates) {
      const keys = [normalizeQuestion(item.label),normalizeQuestion(item.query)];
      if (keys.some(key => seen.has(key))) continue;
      keys.forEach(key => seen.add(key)); choices.push(item); expandAliases();
      if (choices.length === 3) break;
    }
    return choices;
  }
  function renderFollowups() {
    const choices = followupSuggestions(), signature = JSON.stringify(choices);
    followups.hidden = !choices.length;
    if (followups.dataset.signature !== signature) {
      followups.dataset.signature = signature;
      followups.replaceChildren(el('span','concierge-followups-label','继续问'),chips(choices));
    }
  }
  function renderWelcome() {
    const welcome = el('div','concierge-welcome');
    welcome.append(el('p','concierge-kicker','NICE TO MEET YOU'),el('h3','','从你感兴趣的地方聊起。'),el('p','','这里整理了微微的经历、项目与思考。选一个话题，或直接输入想找的内容。'));
    const starters = el('div','concierge-starters');
    (data().welcome.suggestions || []).forEach((item,index) => {
      const b = button('',() => { void ask(item.query,item.label); },'concierge-starter'); b.append(el('small','concierge-starter-number',`0${index+1}`),el('span','',item.label),icon('arrow-up-right')); starters.append(b);
    });
    welcome.append(starters); messages.append(welcome);
  }
  const score = (query, keywords) => (keywords || []).reduce((sum, word) => sum + (query.includes(word.toLowerCase()) ? Math.max(1, word.length) : 0), 0);
  function resolve(question) {
    let query = question.toLowerCase().replace(/\s+/g, ' ');
    const sensitive = /薪[资酬]|工资|手机号以外|身份证|家庭住址|宗教|信仰|家庭情况|年龄|婚育|到岗|salary|religion|password|密钥|系统提示|system prompt/;
    if (sensitive.test(query)) return { id: 'unavailable', answer: '网站公开资料没有提供这方面的信息，我不能替微微猜测或作出承诺。涉及岗位安排或合作细节，可以直接联系她确认。', sources: [{ title: '联系微微', href: 'career.html#contact', description: '查看顶部联系卡' }], suggestions: [{ label: '先看看职业经历', query: '介绍她的职业经历' }] };
    const explicitProject = /\bask\b|\bsmart\b|\bspace\b|datasuite|data suite|data infra|infrad|design system|设计系统|数据平台|工程平台|复杂平台|allsome|将进酒|国家公园|national parks/.test(query);
    if (!explicitProject && /这个项目|这个产品|本页|这里|具体职责|具体负责|设计过程|怎么交付|如何交付|怎么做的/.test(query)) {
      const topicNames = { ai: 'Ask', 'ask-delivery': 'Ask', 'data-suite': 'DataSuite', 'design-system': 'Infra Design System' };
      const previousTopic = topicNames[lastTopic] || data().entries.find(e => e.id === lastTopic)?.title;
      query = (query + ' ' + (previousTopic || '')).toLowerCase();
    }
    if (query.includes('ask') && /职责|负责|交付|设计过程|怎么做的|生产代码/.test(query)) return data().entries.find(e => e.id === 'ask-delivery');
    if (/文章|观点|怎么理解|思考/.test(query)) {
      const articleRoutes = data().routes.filter(r => /complex-product-decisions|ai-design-infrastructure|systems-and-infrastructure|team-operating-model|hiring-designers/.test(r.href));
      const results = articleRoutes.map(route => ({route, value: score(query, [...route.keywords,route.title])})).filter(r => r.value > 0).sort((a,b) => b.value - a.value).slice(0,3).map(r => r.route);
      if (results.length) return { id: 'search', answer: '这些文章与这个话题相关，可以直接进入原文查看微微的思考。', sources: results, suggestions: [{label:'看看相关项目',query:'推荐一个复杂平台设计案例'}] };
    }
    const ranked = data().entries.map(entry => ({ entry, value: score(query, entry.keywords) })).sort((a,b) => b.value-a.value);
    if (ranked[0]?.value > 0) return ranked[0].entry;
    const routes = data().routes.map(route => ({ route, value: score(query, [...route.keywords, route.title]) })).filter(r => r.value > 0).sort((a,b) => b.value-a.value).slice(0,3).map(r=>r.route);
    return {
      id: 'search', answer: routes.length ? '在站内找到了这些相关内容。当前是站内导览模式，你可以先打开原文，查看具体职责与设计过程。' : '站内导览还没有整理这个问题的回答，也没有找到明确匹配的页面。可以换一个项目名或关键词，或者从下面几个方向继续了解。',
      sources: routes.length ? routes : [{ title: '全部项目', href: 'projects.html', description: '按项目类型浏览' }, { title: '思考与方法', href: 'insights.html', description: '关于复杂产品、AI 与团队的思考' }],
      suggestions: [{ label: '看看 AI 项目', query: '想了解她的 AI 产品经验' }, { label: '了解职业经历', query: '介绍她的职业经历' }]
    };
  }
  function appendAnswerText(container,text,sources) {
    const lookup = new Map(sourceList(sources).filter(source => source.id).map(source => [source.id,source]));
    for (const paragraph of text.split(/\n\s*\n/)) {
      const p = el('p'); let cursor = 0;
      for (const match of paragraph.matchAll(/\[(S\d{1,3})\]/g)) {
        p.append(document.createTextNode(paragraph.slice(cursor,match.index)));
        const source = lookup.get(match[1]);
        if (source) {
          const a = el('a','concierge-inline-citation',match[0]); a.href = url(source.href); a.title = source.title; a.setAttribute('aria-label',`查看来源：${source.title}`); p.append(a);
        } else p.append(document.createTextNode(match[0]));
        cursor = match.index + match[0].length;
      }
      p.append(document.createTextNode(paragraph.slice(cursor))); container.append(p);
    }
  }
  function appendSources(container,sources,turn,projects = container) {
    if (sources.length) {
      const citations = el('details','concierge-citations'), summary = el('summary'), list = el('div','concierge-citations-list');
      citations.open = turn.citationsOpen === true;
      summary.append(icon('link'),el('span','',`回答依据 · ${sources.length}`));
      sources.forEach(source => { const a = el('a','',source.title); a.href = url(source.href); list.append(a); });
      citations.append(summary,list);
      citations.addEventListener('toggle',() => { turn.citationsOpen = citations.open; save(); });
      container.append(citations);
    }
    const askLink = sources.find(source => source.href.startsWith('projects/ask.html'));
    if (askLink) {
      const card = el('a','concierge-project-card'); card.href = url('projects/ask.html');
      const img = el('img'); img.src = url('assets/concierge/ask-preview.png'); img.alt = 'Ask 的问题排查与人机协作界面'; img.width = 600; img.height = 340;
      const detail = el('div'), action = el('span','concierge-card-action','查看项目'); action.append(icon('arrow-up-right'));
      detail.append(el('h3','','Ask'),el('p','','AI 产品与人机协作'),action); card.append(img,detail); projects.append(card);
    }
  }
  function refreshTurn(turn) {
    const view = turnViews.get(turn); if (!view) return;
    const follow = messages.scrollHeight - messages.scrollTop - messages.clientHeight < 90;
    const pending = ['pending','streaming'].includes(turn.status), sources = sourceList(turn.sources);
    view.answer.replaceChildren(el('p','concierge-answer-label',turn.mode === 'live' ? 'AI 回答' : '站内导览 · 已整理回答'));
    if (turn.answer) appendAnswerText(view.answer,turn.answer,turn.mode === 'live' ? sources : []);
    else view.answer.append(el('p','concierge-pending-copy',pending ? (turn.availableSources?.length ? '已找到相关资料，正在整理回答…' : '正在查找相关公开资料…') : turn.errorCode === 'NO_KNOWLEDGE' ? '公开资料暂未覆盖这个问题。' : '这次没有收到完整回答。'));
    const signature = `${turn.status}|${turn.notice || ''}`;
    if (view.controlSignature !== signature) {
      view.controlSignature = signature; view.controls.replaceChildren();
      if (pending) view.controls.append(el('span','',turn.status === 'streaming' ? '正在生成回答' : '正在读取公开资料'),button('停止回答',() => stop(),'concierge-stop'));
      else if (turn.status === 'complete' && turn.finishReason === 'length') {
        view.controls.append(el('p','concierge-turn-notice','这次回答达到长度上限，内容尚未展开完。可以继续回答，或打开下方来源阅读。'));
        view.controls.append(button('继续回答',() => { void ask(`请继续上一个回答未完成的部分，避免重复已有内容。原问题：${turn.question}`); },'concierge-suggestion'));
      } else if (['error','interrupted','fallback'].includes(turn.status)) {
        view.controls.append(el('p','concierge-turn-notice',turn.notice || '回答未完成，可以重试或查看站内资料。'));
        const actions = el('div','concierge-recovery-actions');
        if (turn.errorCode === 'NO_KNOWLEDGE') actions.append(button('调整问题',() => { input.value = turn.question; state.draft = turn.question; updateControls(); save(); input.focus({ preventScroll:true }); },'concierge-retry'));
        else actions.append(button('重试 AI 回答',() => { void retry(turn); },'concierge-retry'));
        if (turn.status !== 'fallback') actions.append(button('查看站内导览',() => localFallback(turn),'concierge-local-fallback'));
        view.controls.append(actions);
      }
      view.controls.hidden = !view.controls.childElementCount;
    }
    const sourceSignature = JSON.stringify(sources);
    if (view.sourceSignature !== sourceSignature) { view.sourceSignature = sourceSignature; view.sources.replaceChildren(); view.projects.replaceChildren(); appendSources(view.sources,sources,turn,view.projects); }
    if (turn === state.turns.at(-1)) renderFollowups();
    if (follow && pending) messages.scrollTop = messages.scrollHeight;
    updateControls();
  }
  function appendTurn(turn) {
    const article = el('article','concierge-turn'); article.append(el('p','concierge-user',turn.question));
    const row = el('div','concierge-answer-row'), column = el('div','concierge-answer-content'), answer = el('div','concierge-answer');
    const controls = el('div','concierge-progress'), sources = el('div','concierge-turn-sources'), projects = el('div','concierge-turn-projects');
    column.append(answer,sources,controls,projects); row.append(avatar(),column); article.append(row); messages.append(article);
    turnViews.set(turn,{ article,answer,controls,sources,projects }); refreshTurn(turn);
  }
  function renderEvidence() {
    evidence.replaceChildren(el('p','concierge-kicker','FOLLOW THE SOURCES'),el('h3','','把回答放回作品里看。'),el('p','','查看回答引用的项目与文章。'));
    const latest = state.turns.at(-1);
    const sources = sourceList(latest ? latest.sources : data().routes.filter(route => /ask\.html|space\.html|career\.html|infrad\.html/.test(route.href)));
    if (!sources.length) evidence.append(el('p','','回答尚未引用具体页面。你仍可通过顶部导航浏览项目与经历。'));
    for (const source of sources) {
      const a = el('a','concierge-evidence-link'); a.href = url(source.href); a.append(el('strong','',source.title),el('span','',source.description || '查看完整上下文'),icon('arrow-up-right')); evidence.append(a);
    }
  }
  function render() {
    messages.replaceChildren(); turnViews.clear();
    if (!state.turns.length) renderWelcome(); else state.turns.forEach(appendTurn);
    renderFollowups(); renderEvidence(); updateMode();
  }
  function moveToLatest() {
    const latest = messages.lastElementChild;
    // offsetTop belongs to each element's offset parent and is not a reliable
    // scroll-container coordinate. Use the actual visible rectangles instead.
    const top = latest ? messages.scrollTop + latest.getBoundingClientRect().top - messages.getBoundingClientRect().top - messages.clientTop - 8 : 0;
    messages.scrollTo({ top:Math.max(0,top), behavior:'instant' });
  }
  function localFallback(turn) {
    if (busy()) return;
    const entry = resolve(turn.question); lastTopic = entry.id;
    Object.assign(turn,{ id:entry.id,mode:'guide',status:'fallback',answer:entry.answer,sources:sourceList(entry.sources),availableSources:[],suggestions:entry.suggestions,notice:'AI 回答未完成。以下切换为已整理的站内导览，不是本次模型生成的回答。' });
    refreshTurn(turn); renderEvidence(); save(); status.textContent = '已切换为站内导览。';
  }
  async function retry(turn) {
    if (busy()) return;
    await checkConnection(true);
    if (!state.turns.includes(turn) || active) return;
    if (connection.mode !== 'live') {
      turn.notice = 'AI 仍未连接。可以稍后重试，或先查看站内导览。'; refreshTurn(turn); save(); return;
    }
    await startLive(turn);
  }
  async function ask(question,suggestionLabel = '') {
    const text = question.trim().slice(0,500); if (!text || busy()) return;
    const label = typeof suggestionLabel === 'string' ? suggestionLabel.trim().slice(0,35) : '';
    const turn = { question:text,suggestionLabel:label,id:'live',mode:connection.mode === 'live' ? 'live' : 'guide',status:'pending',answer:'',sources:[],suggestions:[] };
    if (turn.mode === 'guide') {
      const entry = resolve(text); lastTopic = entry.id;
      Object.assign(turn,{ id:entry.id,status:'complete',answer:entry.answer,sources:sourceList(entry.sources),suggestions:entry.suggestions });
    }
    rememberQuestion(text,label);
    state.turns.push(turn); state.turns = state.turns.slice(-20); state.draft = ''; input.value = ''; input.style.height = 'auto';
    render(); moveToLatest(); save();
    if (!small.matches) input.focus({ preventScroll:true }); else panel.focus({ preventScroll:true });
    if (turn.mode === 'live') await startLive(turn);
    else status.textContent = `已显示站内导览：${turn.answer}`;
  }
  function requestHistory(turn) {
    const previous = state.turns.slice(0,state.turns.indexOf(turn)).filter(item => item.mode === 'live' && item.status === 'complete');
    return previous.slice(-3).flatMap(item => [{role:'user',content:item.question.slice(0,500)},{role:'assistant',content:item.finishReason === 'length' ? item.answer.slice(-1000) : item.answer.slice(0,1000)}]);
  }
  async function consumeSSE(response,onEvent,signal) {
    if (!response.body || !/text\/event-stream/i.test(response.headers.get('content-type') || '')) throw new Error('invalid-stream');
    const reader = response.body.getReader(), decoder = new TextDecoder();
    let buffer = '', eventName = '', eventLines = [], stopReading = false;
    const line = value => {
      if (value === '') {
        if (eventLines.length) {
          const payload = eventLines.join('\n');
          let object; try { object = JSON.parse(payload); } catch { throw new Error('invalid-event'); }
          stopReading = onEvent(eventName || 'message',object) === false;
        }
        eventName = ''; eventLines = []; return;
      }
      if (value.startsWith(':')) return;
      const split = value.indexOf(':'), field = split < 0 ? value : value.slice(0,split);
      let valueText = split < 0 ? '' : value.slice(split+1); if (valueText.startsWith(' ')) valueText = valueText.slice(1);
      if (field === 'event') eventName = valueText; else if (field === 'data') eventLines.push(valueText);
    };
    const drain = final => {
      let cursor = 0;
      while (cursor < buffer.length && !stopReading) {
        const found = buffer.slice(cursor).search(/[\r\n]/); if (found < 0) break;
        const end = cursor + found;
        if (buffer[end] === '\r' && end + 1 === buffer.length && !final) break;
        line(buffer.slice(cursor,end)); cursor = end + (buffer[end] === '\r' && buffer[end+1] === '\n' ? 2 : 1);
      }
      buffer = buffer.slice(cursor);
      if (buffer.length > 100000) throw new Error('event-too-large');
      if (final && !stopReading) { if (buffer) line(buffer); buffer = ''; line(''); }
    };
    try {
      while (!stopReading && !signal.aborted) {
        const chunk = await reader.read();
        buffer += decoder.decode(chunk.value || new Uint8Array(),{ stream:!chunk.done }); drain(chunk.done);
        if (chunk.done) break;
      }
    } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
  }
  async function startLive(turn) {
    if (active || connection.mode !== 'live' || !state.turns.includes(turn)) return;
    const history = requestHistory(turn);
    Object.assign(turn,{ id:'live',mode:'live',status:'pending',answer:'',sources:[],availableSources:[],suggestions:[],notice:'',errorCode:'',finishReason:'' });
    const controller = new AbortController(), request = { controller,turn,timer:null,timedOut:false,lastSave:0,completed:false };
    active = request;
    request.timer = setTimeout(() => { request.timedOut = true; controller.abort(); },90000);
    const current = () => active === request && state.turns.includes(turn);
    refreshTurn(turn); renderEvidence(); save(); status.textContent = '正在查找相关公开资料。';
    try {
      const response = await fetch(url('api/concierge'),{
        method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json',Accept:'text/event-stream'},
        body:JSON.stringify({ message:turn.question,history })
      });
      if (!current()) return;
      if (!response.ok) {
        let failure; try { failure = await response.json(); } catch {}
        const error = new Error('service-error'); error.code = failure?.error?.code; throw error;
      }
      await consumeSSE(response,(type,payload) => {
        if (!current()) return false;
        if (type === 'meta') {
          if (payload.mode !== 'live') throw new Error('invalid-mode');
          turn.availableSources = sourceList(payload.sources).filter(source => source.id);
          turn.knowledgeVersion = payload.knowledgeVersion;
        } else if (type === 'delta') {
          if (typeof payload.text !== 'string') throw new Error('invalid-delta');
          if (turn.answer.length + payload.text.length > 16000) throw new Error('answer-too-long');
          turn.answer += payload.text; turn.status = 'streaming'; turn.sources = citedSources(turn.answer,turn.availableSources);
        } else if (type === 'done') {
          if (!turn.answer.trim()) throw new Error('empty-answer');
          const actual = citedSources(turn.answer,turn.availableSources);
          const listed = new Set((Array.isArray(payload.sources) ? payload.sources : actual).map(source => source.id));
          turn.sources = actual.filter(source => listed.has(source.id)); turn.status = 'complete'; turn.finishReason = payload.finishReason;
          turn.suggestions = Array.isArray(payload.suggestions) ? payload.suggestions : [];
          request.completed = true; active = null; clearTimeout(request.timer); save(); refreshTurn(turn); renderEvidence();
          status.textContent = payload.finishReason === 'length' ? '这次回答达到长度上限，可以继续回答或查看原文。' : '回答已完成，引用资料可以打开查看。'; return false;
        } else if (type === 'error') {
          const error = new Error('service-error'); error.code = payload.code; throw error;
        }
        refreshTurn(turn); renderEvidence();
        if (Date.now() - request.lastSave > 350) { save(); request.lastSave = Date.now(); }
      },controller.signal);
      if (current() && !request.completed) throw new Error('incomplete-stream');
    } catch (error) {
      if (!current()) return;
      active = null; turn.status = 'error'; turn.errorCode = error.code || '';
      turn.notice = error.code === 'NO_KNOWLEDGE' ? '暂未找到与这个问题直接相关的公开资料。可以换个项目名或关键词，或查看站内导览。' : request.timedOut ? '这次等待时间较长，已停止请求。可以重试，或先查看站内导览。' : /rate|limit|quota/i.test(error.code || '') ? '当前 AI 请求较多或已达到使用限额。请稍后重试，也可以先查看站内导览。' : 'AI 连接暂时中断，回答未完成。可以重试，或先查看站内导览。';
      refreshTurn(turn); renderEvidence(); save(); status.textContent = turn.notice;
    } finally {
      clearTimeout(request.timer);
      if (active === request) active = null;
      updateControls();
    }
  }
  function open(source) {
    if (!panel) init();
    state.open = true; panel.hidden = false; trigger.setAttribute('aria-expanded','true');
    lastTopic = state.turns.at(-1)?.id || ''; render(); layout(); save(); moveToLatest();
    if (small.matches || source === 'restore') panel.focus({ preventScroll:true }); else input.focus({ preventScroll:true });
    void checkConnection(true);
  }
  window.WeiweiConcierge = { open,close };
})();
