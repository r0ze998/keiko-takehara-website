/**
 * Keiko - Main entry point
 * Initializes all modules with defensive checks
 */
import { initNav } from './nav.js';
import { initAnimations } from './animations.js';
import { initCarousel } from './carousel.js';
import { initAccordion } from './accordion.js';
import { initFilter } from './filter.js';
import { initCookie } from './cookie.js';
import { initForm } from './form.js';

function init() {
  initNav();
  initAnimations();
  initCarousel();
  initAccordion();
  initFilter();
  initCookie();
  initForm();

  // Footer copyright year
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
