/**
 * Navigation: mobile menu toggle, dropdown, scroll lock
 */
export function initNav() {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');

  const closeMobileMenu = () => {
    if (!menuToggle || !mobilePanel) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    mobilePanel.classList.remove('show');
    document.documentElement.classList.remove('menu-open');
  };

  if (menuToggle && mobilePanel) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mobilePanel.classList.toggle('show', !expanded);
      document.documentElement.classList.toggle('menu-open', !expanded);
    });
  }

  document.querySelectorAll('[data-dropdown-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.nav-group');
      if (!wrapper) return;
      const isOpen = wrapper.classList.contains('open');
      document.querySelectorAll('.nav-group.open').forEach((node) => node.classList.remove('open'));
      if (!isOpen) wrapper.classList.add('open');
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (!target.closest('.nav-group')) {
      document.querySelectorAll('.nav-group.open').forEach((node) => node.classList.remove('open'));
    }

    if (!target.closest('.site-header')) {
      closeMobileMenu();
    }
  });
}
