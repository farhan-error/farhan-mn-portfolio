/* ═══════════════════════════════
   Scroll Reveal + Hero Init + UI
   ═══════════════════════════════ */

/* ── Intersection Observer for .reveal elements ── */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ── Hero load animation trigger ── */
(function () {
  // Add class after tiny delay to ensure paint
  setTimeout(() => {
    document.querySelector('.hero-inner')?.classList.add('hero-anim-done');
  }, 100);
})();

/* ── Animated counter for hero stats ── */
function animateCount(el, target, duration = 1200) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-count]').forEach(el => {
          animateCount(el, +el.dataset.count);
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: .5 });

  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) io.observe(statsEl);
})();

/* ── Typing effect for hero eyebrow ── */
(function() {
  const el = document.getElementById('hero-typed');
  if (!el) return;
  const texts = ['Civil Engineer', 'Urban Planner', 'Researcher', 'Designer'];
  let ti = 0, ci = 0, deleting = false;

  function type() {
    const full = texts[ti];
    if (!deleting) {
      el.textContent = full.slice(0, ++ci);
      if (ci === full.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = full.slice(0, --ci);
      if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
    }
    setTimeout(type, deleting ? 55 : 90);
  }
  setTimeout(type, 1400);
})();

/* ── Parallax on hero elements ── */
(function() {
  const heroRight = document.querySelector('.hero-right');
  if (!heroRight) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroRight.style.transform = `translateY(${y * .06}px)`;
    }
  }, { passive: true });
})();

/* ── Contact form — Formspree ── */
(function() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        btn.innerHTML = 'Message Sent ✓';
        btn.style.background = '#2D6A4F';
        form.reset();
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.disabled = false;
          btn.style.background = '';
        }, 4000);
      } else {
        throw new Error('Send failed');
      }
    } catch {
      btn.innerHTML = 'Failed — try emailing directly';
      btn.style.background = '#b91c1c';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    }
  });
})();
