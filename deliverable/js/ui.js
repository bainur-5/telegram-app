(() => {
  const nav = document.querySelector('.navigation[data-active]');
  if (nav) {
    const active = nav.getAttribute('data-active');
    const items = [
      ['finances', './finances.html', '../../src/assets/bank.svg', 'Finances'],
      ['mining', './mining.html', '../../src/assets/chart-line.svg', 'Mining'],
      ['market', './market.html', '../../src/assets/bitcoin.svg', 'Market'],
      ['referrals', './referrals.html', '../../src/assets/book-open.svg', 'Referrals'],
      ['profile', './profile-settings.html', '../../src/assets/users.svg', 'Profile'],
    ];

    nav.innerHTML = items
      .map(([id, href, icon, label]) => `
        <a class="cut-corner-btn" href="${href}" aria-label="${label}" ${active === id ? 'style="--ccb-fill-color:#7EBF3E;--ccb-border-color:#B6FD7D"' : ''}>
          <span class="cut-corner-btn__icon"><img src="${icon}" alt=""/></span>
        </a>
      `)
      .join('');
  }

  document.querySelectorAll('.ps-switch').forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.toggle('is-on');
      el.setAttribute('aria-checked', String(el.classList.contains('is-on')));
    });
  });
})();
