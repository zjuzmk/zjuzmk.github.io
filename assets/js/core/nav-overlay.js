// 首页导航栏透明覆盖：滚出首屏后恢复主题实底，保证正文顶部可读。
(function () {
  var nav = document.querySelector('.hextra-nav-container.hextra-nav-overlay');
  if (!nav || !document.querySelector('.hero-fullscreen')) return;

  var ticking = false;
  function update() {
    ticking = false;
    nav.classList.toggle('hextra-nav-scrolled', window.scrollY > 40);
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();
