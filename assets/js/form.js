/**
 * Contact form validation
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;

function setError(form, name, message) {
  const errorEl = form.querySelector(`[data-error-for="${name}"]`);
  if (errorEl) errorEl.textContent = message;
}

function clearAllErrors(form) {
  form.querySelectorAll('[data-error-for]').forEach((el) => {
    el.textContent = '';
  });
}

export function initForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!(form instanceof HTMLFormElement)) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearAllErrors(form);

    const honeypot = form.querySelector('input[name="company_name"]');
    if (honeypot instanceof HTMLInputElement && honeypot.value.trim() !== '') {
      return;
    }

    let valid = true;

    const name = form.querySelector('input[name="name"]');
    if (name instanceof HTMLInputElement && name.value.trim() === '') {
      setError(form, 'name', 'お名前を入力してください。');
      valid = false;
    }

    const email = form.querySelector('input[name="email"]');
    if (email instanceof HTMLInputElement && !EMAIL_REGEX.test(email.value.trim())) {
      setError(form, 'email', 'メールアドレスの形式が正しくありません。');
      valid = false;
    }

    const emailConfirm = form.querySelector('input[name="email_confirm"]');
    if (email instanceof HTMLInputElement && emailConfirm instanceof HTMLInputElement) {
      if (email.value.trim() !== emailConfirm.value.trim()) {
        setError(form, 'email_confirm', '確認用メールアドレスが一致しません。');
        valid = false;
      }
    }

    const inquiryType = form.querySelector('select[name="inquiry_type"]');
    if (inquiryType instanceof HTMLSelectElement && inquiryType.value === '') {
      setError(form, 'inquiry_type', 'お問い合わせ種別を選択してください。');
      valid = false;
    }

    const contactMethod = form.querySelector('input[name="contact_method"]:checked');
    if (!contactMethod) {
      setError(form, 'contact_method', 'ご希望の連絡方法を選択してください。');
      valid = false;
    }

    const message = form.querySelector('textarea[name="message"]');
    if (message instanceof HTMLTextAreaElement && message.value.trim().length < MIN_MESSAGE_LENGTH) {
      setError(form, 'message', 'お問い合わせ内容は20文字以上で入力してください。');
      valid = false;
    }

    const consent = form.querySelector('input[name="consent"]');
    if (consent instanceof HTMLInputElement && !consent.checked) {
      setError(form, 'consent', '個人情報の取扱いへの同意が必要です。');
      valid = false;
    }

    if (!valid) return;

    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({ event: 'contact_form_submit' });
    }

    window.location.href = '/contact/thanks/';
  });
}
