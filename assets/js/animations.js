/**
 * Animations: fade-in on scroll, count-up
 */

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export function initAnimations() {
  const fadeTargets = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeTargets.length > 0) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    fadeTargets.forEach((el) => fadeObserver.observe(el));
  } else {
    fadeTargets.forEach((el) => el.classList.add('in-view'));
  }

  const countElements = document.querySelectorAll('[data-count-to]');
  if ('IntersectionObserver' in window && countElements.length > 0) {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const to = Number(el.getAttribute('data-count-to')) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1200;
          const start = performance.now();

          const tick = (now) => {
            const raw = Math.min((now - start) / duration, 1);
            const value = Math.floor(to * easeOutCubic(raw));
            el.textContent = value.toLocaleString('ja-JP') + suffix;
            if (raw < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          countObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    countElements.forEach((el) => countObserver.observe(el));
  }
}
