/**
 * Utility: dynamic year in footer
 */
export function initUtils() {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}
