document.addEventListener('click', (e) => {
  const navBtn = e.target.closest('.navigation .cut-corner-btn');
  if (!navBtn) return;
  document.querySelectorAll('.navigation .cut-corner-btn').forEach((el) => el.setAttribute('aria-pressed', 'false'));
  navBtn.setAttribute('aria-pressed', 'true');
});
