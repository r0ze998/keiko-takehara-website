/**
 * Cookie consent banner
 */
const STORAGE_KEY = 'keikoCookieConsent';

export function initCookie() {
  const cookieBanner = document.querySelector('[data-cookie-banner]');
  const acceptBtn = document.querySelector('[data-cookie-accept]');
  const rejectBtn = document.querySelector('[data-cookie-reject]');

  if (!cookieBanner) return;

  if (!localStorage.getItem(STORAGE_KEY)) {
    cookieBanner.classList.add('show');
  }

  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    cookieBanner.classList.remove('show');
  });

  rejectBtn?.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    cookieBanner.classList.remove('show');
  });
}
