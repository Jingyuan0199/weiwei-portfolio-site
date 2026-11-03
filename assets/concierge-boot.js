/* The conversation and its public data are loaded only when requested. */
(() => {
  const trigger = document.querySelector('.concierge-trigger');
  if (!trigger) return;
  const root = trigger.dataset.conciergeRoot || '';
  let modulePromise;
  const loadScript = name => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = root + 'assets/' + name;
    script.onload = resolve;
    script.onerror = () => { script.remove(); reject(new Error('load-failed')); };
    document.head.append(script);
  });
  const load = () => modulePromise ||= Promise.all([
    window.WEIWEI_CONCIERGE_DATA ? Promise.resolve() : loadScript('concierge-data.js'),
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
        notice.append('助手暂时没有加载成功，请再点一次。也可以直接');
        const link = document.createElement('a');
        link.href = root + 'projects.html'; link.textContent = '浏览项目';
        notice.append(link); trigger.after(notice);
      }
    } finally { trigger.removeAttribute('aria-busy'); }
  };
  trigger.addEventListener('click', () => {
    if (trigger.getAttribute('aria-expanded') === 'true') window.WeiweiConcierge?.close();
    else window.dispatchEvent(new CustomEvent('weiwei:concierge-open', { detail: { source: 'navigation' } }));
  });
  window.addEventListener('weiwei:concierge-open', requestOpen);
  // Restore only a conversation which the visitor was already using in this tab.
  try {
    if (JSON.parse(sessionStorage.getItem('weiwei-concierge-preview-v1') || 'null')?.open) {
      window.dispatchEvent(new CustomEvent('weiwei:concierge-open', { detail: { source: 'restore' } }));
    }
  } catch { /* Session storage can be disabled by the browser. */ }
})();
