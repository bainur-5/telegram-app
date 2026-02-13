(() => {
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-lang]').forEach((n) => n.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
})();
