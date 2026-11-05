// A direct link to a supplemental fact should reveal the cited context.
function revealResumeAnchor() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target) return;
  for (let parent = target.closest('details'); parent; parent = parent.parentElement?.closest('details')) {
    parent.open = true;
  }
  if (target.matches('.resume-team')) {
    const detail = target.querySelector('.resume-details');
    if (detail) detail.open = true;
  }
}
revealResumeAnchor();
window.addEventListener('hashchange', revealResumeAnchor);
