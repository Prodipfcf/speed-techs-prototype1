(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const quoteForm = document.getElementById('quote-form');
  const feedback = document.getElementById('form-feedback');

  if (quoteForm && feedback) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      feedback.classList.remove('is-visible');

      if (!quoteForm.reportValidity()) return;

      feedback.textContent = 'This prototype form is working in preview mode, but it is not connected to an inbox yet. Connect it to the client’s approved email or CRM before the website goes live.';
      feedback.classList.add('is-visible');
    });
  }
})();
