document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('desktop-nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = nav.querySelector('.nav-links');

  function initAria() {
    if (window.innerWidth <= 900) {
      navLinks.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    } else {
      navLinks.removeAttribute('aria-hidden');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Toggle navigation menu');
      nav.classList.remove('open');
    }
  }

  initAria();

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = nav.classList.toggle('open');

    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navLinks.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');

    if (isOpen) {
      const firstLink = navLinks.querySelector('a');
      if (firstLink) setTimeout(() => firstLink.focus(), 50);
    } else {
      hamburger.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
      hamburger.focus();
    }
  });

  navLinks.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A' && window.innerWidth <= 900) {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  function updateNavState() {
    if (window.innerWidth <= 900) {
      navLinks.setAttribute('aria-hidden', nav.classList.contains('open') ? 'false' : 'true');
    } else {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Toggle navigation menu');
      navLinks.removeAttribute('aria-hidden');
    }
  }

  window.addEventListener('resize', updateNavState);
  window.addEventListener('orientationchange', updateNavState);
});