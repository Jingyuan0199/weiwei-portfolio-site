// Small, local demonstrations. No network calls or real product operations.
// Settle once: keyboard focus must reveal a tag without replaying its fall on blur.
document.querySelectorAll('.home-v2 .floating-note').forEach(note => {
  const settle = () => { note.dataset.landed = 'true'; };
  note.addEventListener('animationend', event => {
    if (event.animationName === 'note-arrive') settle();
  }, {once: true});
  note.addEventListener('focus', settle, {once: true});
});

// A sequence keeps its annotated contact sheet visible; only the large reading
// area changes. Without JavaScript every original screen stays in document order.
document.querySelectorAll('[data-screen-story]').forEach(story => {
  const panels = [...story.querySelectorAll('[data-screen-panel]')];
  const controls = story.querySelector('[data-screen-controls]');
  const buttons = [...controls.querySelectorAll('[data-screen-select]')];
  const select = index => {
    panels.forEach((panel, i) => { panel.hidden = i !== index; });
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  };
  controls.hidden = false;
  story.classList.add('is-interactive');
  select(0);
  buttons.forEach((button, i) => {
    button.addEventListener('click', () => select(i));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length-1 : (i + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      select(next); buttons[next].focus({preventScroll:true});
    });
  });
});
document.querySelectorAll('[data-approval-demo]').forEach(demo => {
  const controls = demo.querySelector('[data-approval-controls]');
  if (!controls) return;
  controls.hidden = false;
  const status = demo.querySelector('.approval-status');
  const messages = {
    approve: '已授权 · 演示：仅针对实例 A 发起重启，等待结果。',
    reject: '已暂停 · 保留诊断，不发起执行。',
    handover: '已转人工 · 对话、当前参数与操作记录一起保留。',
    reset: '等待授权 · 尚未执行'
  };
  controls.addEventListener('click', event => {
    const button = event.target.closest('[data-approval]');
    if (!button) return;
    status.textContent = messages[button.dataset.approval];
    controls.querySelectorAll('button').forEach(b => {
      b.disabled = button.dataset.approval !== 'reset' && b.dataset.approval !== 'reset';
    });
  });
});

const gallery = document.querySelector('.snapshot-dialog');
if (gallery && typeof gallery.showModal === 'function') {
  const panels = [...gallery.querySelectorAll('[data-snapshot-panel]')];
  let current = 0;
  let opener;
  function show(index) {
    current = (index + panels.length) % panels.length;
    panels.forEach((panel, i) => { panel.hidden = i !== current; });
    gallery.querySelector('[data-snapshot-count]').textContent = `${String(current + 1).padStart(2, '0')} / ${String(panels.length).padStart(2, '0')}`;
    gallery.scrollTop = 0;
  }
  document.querySelectorAll('[data-snapshot-open]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      show(Number(link.dataset.snapshotOpen));
      gallery.showModal();
      document.documentElement.classList.add('snapshot-open');
    });
  });
  gallery.querySelector('[data-snapshot-close]').addEventListener('click', () => gallery.close());
  gallery.querySelector('[data-snapshot-prev]').addEventListener('click', () => show(current - 1));
  gallery.querySelector('[data-snapshot-next]').addEventListener('click', () => show(current + 1));
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  gallery.addEventListener('click', event => { if (event.target === gallery) { const r = gallery.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) gallery.close(); } });
  gallery.addEventListener('close', () => {
    document.documentElement.classList.remove('snapshot-open');
    opener?.focus({preventScroll: true});
  });
}

// Single-page sections have chapter anchors, separate from the global page menu.
const outline = document.querySelector('.page-outline');
if (outline) {
  const disclosure = outline.querySelector('details');
  const compact = matchMedia(document.body.classList.contains('resume-page') ? '(max-width:980px)' : '(max-width:680px)');
  const entries = [...outline.querySelectorAll('nav a')]
    .map(link => ({link, target: document.getElementById(link.hash.slice(1))}))
    .filter(entry => entry.target);
  const syncLayout = () => { disclosure.open = !compact.matches; };
  syncLayout(); compact.addEventListener('change', syncLayout);
  const updateOutline = () => {
    let current = entries[0];
    for (const entry of entries) {
      if (entry.target.getBoundingClientRect().top <= 170) current = entry;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = entries.at(-1);
    entries.forEach(entry => {
      if (entry === current) entry.link.setAttribute('aria-current', 'location');
      else entry.link.removeAttribute('aria-current');
    });
  };
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(() => { updateOutline(); scheduled = false; }); }
  }, {passive:true});
  window.addEventListener('resize', updateOutline);
  outline.addEventListener('click', event => {
    if (compact.matches && event.target.closest('a')) disclosure.open = false;
  });
  updateOutline();
}

// Creation cards open videos directly; the href remains a no-JS video fallback.
(() => {
  document.querySelectorAll('[data-creative-video-open]').forEach(link => {
    const dialog = document.getElementById(link.dataset.creativeVideoOpen);
    const video = dialog?.querySelector('video');
    if (!dialog || !video || typeof dialog.showModal !== 'function') return;
    let opener = null;
    link.addEventListener('click', event => {
      if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      event.preventDefault();
      document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
      opener = link;
      const error = dialog.querySelector('.creative-video-error');
      if (error) error.hidden = true;
      video.currentTime = 0;
      dialog.showModal();
      const playback = video.play();
      if (playback?.catch) playback.catch(() => {});
    });
    dialog.querySelector('[data-creative-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const bounds=dialog.getBoundingClientRect();
      if(event.target===dialog&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      video.pause();
      video.currentTime = 0;
      opener?.focus({preventScroll:true});
      opener = null;
    });
    video.addEventListener('error', () => {
      const error = dialog.querySelector('.creative-video-error');
      if (error) error.hidden = false;
    });
  });
  document.querySelectorAll('.creative-dialog:not(.creative-dialog--video)').forEach(dialog => {
    dialog.querySelector('[data-creative-close]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const bounds=dialog.getBoundingClientRect();
      if(event.target===dialog&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)) dialog.close();
    });
  });
  document.querySelectorAll('.project-video-demo video').forEach(video => {
    video.addEventListener('error', () => {
      const error = video.closest('.project-video-demo')?.querySelector('.project-video-error');
      if (error) error.hidden = false;
    });
  });
})();
