/**
 * FAQ accordion
 */
export function initAccordion() {
  document.querySelectorAll('[data-accordion-trigger]').forEach((button) => {
    button.addEventListener('click', () => {
      const panelId = button.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;

      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;

      const parent = button.closest('.faq-item');
      if (parent) {
        if (expanded) parent.removeAttribute('open');
        else parent.setAttribute('open', 'open');
      }
    });
  });
}
