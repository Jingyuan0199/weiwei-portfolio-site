/* The conversation and its public data are loaded only when requested. */
(() => {
  const trigger = document.querySelector('.concierge-trigger');
  if (!trigger) return;
  const root = trigger.dataset.conciergeRoot || '';
  const lang = trigger.dataset.conciergeLang === 'en' ? 'en' : 'zh';
  window.WEIWEI_CONCIERGE_LANG = lang;
  const dataFile = lang === 'en' ? 'concierge-data-en.js' : 'concierge-data.js';
  let modulePromise;
  const loadScript = name => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = root + 'assets/' + name;
    script.onload = resolve;
    script.onerror = () => { script.remove(); reject(new Error('load-failed')); };
    document.head.append(script);
  });
  const load = () => modulePromise ||= Promise.all([
    window.WEIWEI_CONCIERGE_DATA ? Promise.resolve() : loadScript(dataFile),
    window.WeiweiConcierge ? Promise.resolve() : loadScript('concierge.js')
  ]).catch(error => { modulePromise = null; throw error; });
  const requestOpen = async event => {
    trigger.setAttribute('aria-busy', 'true');
    try {
      await load();
      document.querySelector('.concierge-load-error')?.remove();
      window.WeiweiConcierge.open(event?.detail?.source || 'navigation');
    } catch {
      if (!document.querySelector('.concierge-load-error')) {
        const notice = document.createElement('div');
        notice.className = 'concierge-load-error';
        notice.setAttribute('role', 'status');
        notice.append(lang === 'en' ? 'The assistant failed to load. Tap again, or browse the ' : '助手暂时没有加载成功，请再点一次。也可以直接');
        const link = document.createElement('a');
        link.href = root + 'projects.html';
        link.textContent = lang === 'en' ? 'projects' : '浏览项目';
        notice.append(link);
        if (lang === 'en') notice.append('.');
        trigger.after(notice);
      }
    } finally { trigger.removeAttribute('aria-busy'); }
  };
  trigger.addEventListener('click', () => {
    if (trigger.getAttribute('aria-expanded') === 'true') window.WeiweiConcierge?.close();
    else window.dispatchEvent(new CustomEvent('weiwei:concierge-open', { detail: { source: 'navigation' } }));
  });
  window.addEventListener('weiwei:concierge-open', requestOpen);
  try {
    if (JSON.parse(sessionStorage.getItem('weiwei-concierge-preview-v1') || 'null')?.open) {
      window.dispatchEvent(new CustomEvent('weiwei:concierge-open', { detail: { source: 'restore' } }));
    }
  } catch { /* Session storage can be disabled by the browser. */ }
})();
