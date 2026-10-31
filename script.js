document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.global-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'メニューを開く');
    });
  });
});
