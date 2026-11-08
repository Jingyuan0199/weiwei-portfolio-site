/* 项目页 GIF 演示：可见即自动播放（尊重减少动态偏好），同屏只播一个，离开视口停止；点击暂停/恢复。 */
(function () {
  'use strict';
  var figures = Array.prototype.slice.call(document.querySelectorAll('.project-gif'));
  if (!figures.length) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function stop(fig) {
    var img = fig.querySelector('.project-gif__frame');
    if (img && img.dataset.playing) {
      img.src = img.dataset.poster;
      delete img.dataset.playing;
    }
  }
  function play(fig) {
    if (reduced) return;
    var img = fig.querySelector('.project-gif__frame');
    if (!img || img.dataset.playing) return;
    figures.forEach(function (other) { if (other !== fig) stop(other); });
    img.src = img.dataset.gif;
    img.dataset.playing = '1';
  }

  figures.forEach(function (fig) {
    var img = fig.querySelector('.project-gif__frame');
    if (!img) return;
    img.addEventListener('click', function () {
      if (img.dataset.playing) { stop(fig); } else { play(fig); }
    });
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { play(entry.target); } else { stop(entry.target); }
      });
    }, { threshold: 0.15 });
    figures.forEach(function (fig) { observer.observe(fig); });
  } else if (!reduced) {
    figures.forEach(play);
  }
})();
