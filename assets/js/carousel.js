/**
 * Testimonial carousel
 */
export function initCarousel() {
  const track = document.querySelector('[data-carousel-track]');
  const slides = document.querySelectorAll('[data-carousel-slide]');
  const prev = document.querySelector('[data-carousel-prev]');
  const next = document.querySelector('[data-carousel-next]');

  if (!track || slides.length === 0) return;

  let index = 0;
  let timer;

  const move = (newIndex) => {
    index = (newIndex + slides.length) % slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  };

  const startTimer = () => {
    clearInterval(timer);
    timer = setInterval(() => move(index + 1), 6000);
  };

  prev?.addEventListener('click', () => { move(index - 1); startTimer(); });
  next?.addEventListener('click', () => { move(index + 1); startTimer(); });

  // Recalculate position on resize
  window.addEventListener('resize', () => move(index));

  startTimer();
}
