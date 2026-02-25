/**
 * Testimonial filter (all / category)
 */
export function initFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterCards = document.querySelectorAll('[data-filter-card]');

  if (filterButtons.length === 0 || filterCards.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      filterCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
}
