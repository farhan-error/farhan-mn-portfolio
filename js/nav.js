/* ═══════════════════════════
   Navigation — Behaviour
   ═══════════════════════════ */

(function () {
  const nav       = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer    = document.querySelector('.nav-drawer');
  const navLinks  = document.querySelectorAll('.nav-links a, .nav-drawer a');
  let menuOpen    = false;

  /* ── Scroll: add .scrolled class ── */
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    updateActiveLink();
  }

  /* ── Active link on scroll ── */
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
    });
  }

  /* ── Hamburger toggle ── */
  function toggleMenu() {
    menuOpen = !menuOpen;
    hamburger.classList.toggle('open', menuOpen);
    drawer.classList.toggle('open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  /* ── Close on link click ── */
  drawer?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuOpen = false;
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── Smooth scroll for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72);
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  hamburger?.addEventListener('click', toggleMenu);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // init
})();
