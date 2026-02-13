(() => {
  const sourceItems = [
    { id: 1, title: 'яйцо', amount: 60800, amountLabel: '60.8k', priceTon: 5.62, rateText: '0.00009 TON/Egg' },
    { id: 2, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
    { id: 3, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
    { id: 4, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
    { id: 5, title: 'яйцо', amount: 3675, amountLabel: '3 675', priceTon: 0.26, rateText: '0.00009 TON/Egg' },
    { id: 6, title: 'яйцо', amount: 3025, amountLabel: '3 025', priceTon: 0.22, rateText: '0.00009 TON/Egg' },
  ];

  let tab = 'all';
  let sortField = 'price';
  let sortOrder = 'asc';
  const grid = document.getElementById('marketGrid');
  if (!grid) return;

  const render = () => {
    const base = tab === 'all' ? sourceItems : sourceItems.slice(0, 3);
    const list = [...base].sort((a, b) => {
      const cmp = sortField === 'price' ? a.priceTon - b.priceTon : a.amount - b.amount;
      return sortOrder === 'asc' ? cmp : -cmp;
    });

    grid.innerHTML = list.map((item) => `
      <section class="fcm-card market-item">
        <svg class="fcm-card__frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M9.5 0.5 L99.5 0.5 L99.5 94.2 L91.5 99.5 L0.5 99.5 L0.5 6.8 Z" fill="none" stroke="var(--border)" stroke-width="1"/></svg>
        <div class="fcm-card__body">
          <div class="market-item__line"><span class="market-item__lineLabel">${item.title}</span><span class="market-item__pill market-item__pill--blue"><img src="../../src/assets/toncoin_ton_logo.svg" alt=""/>${item.amountLabel}</span></div>
          <div class="market-item__line"><span class="market-item__lineLabel">Цена</span><span class="market-item__pill market-item__pill--violet"><img src="../../src/assets/toncoin_ton_logo.svg" alt=""/>${item.priceTon}</span></div>
          <div class="market-item__rate">${item.rateText}</div>
          <button class="retro-gold-btn" style="--rgb-w:100%;--rgb-h:24px;--rgb-font-size:12px;--rgb-border:#6DBAFB;--rgb-inner-border:#599FFA;--rgb-top:#6DBAFB;--rgb-bottom:#427FF9;--rgb-dot:rgba(95,205,251,.95);--rgb-background:#6DBAFB;--rgb-text-stroke:#427FF9"><span class="retro-gold-btn__border"></span><span class="retro-gold-btn__surface"></span><span class="retro-gold-btn__dots"></span><span class="retro-gold-btn__text">Купить</span></button>
        </div>
      </section>`).join('');
  };

  document.querySelectorAll('[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      tab = btn.dataset.tab;
      document.querySelectorAll('[data-tab]').forEach((n) => n.classList.toggle('is-active', n === btn));
      render();
    });
  });

  const sortBtn = document.getElementById('sortBtn');
  const sortMenu = document.getElementById('sortMenu');
  sortBtn?.addEventListener('click', () => sortMenu?.classList.toggle('page-hidden'));
  sortMenu?.querySelectorAll('[data-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      sortField = btn.dataset.sort;
      sortBtn.childNodes[0].textContent = `${btn.textContent?.trim()} `;
      sortMenu.querySelectorAll('[data-sort]').forEach((n) => n.classList.toggle('is-active', n === btn));
      sortMenu.classList.add('page-hidden');
      render();
    });
  });

  document.getElementById('orderBtn')?.addEventListener('click', () => {
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    document.querySelector('.market-controls__fromToIcon')?.classList.toggle('is-desc', sortOrder === 'desc');
    render();
  });

  const modal = document.getElementById('createModal');
  const openModal = () => modal?.classList.remove('page-hidden');
  const closeModal = () => modal?.classList.add('page-hidden');
  document.getElementById('openCreate')?.addEventListener('click', openModal);
  document.getElementById('closeCreate')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  const eggsInput = document.getElementById('eggsInput');
  const tonInput = document.getElementById('tonInput');
  const feeValue = document.getElementById('feeValue');
  const receiveValue = document.getElementById('receiveValue');
  const submitCreate = document.getElementById('submitCreate');
  const updateSummary = () => {
    const eggs = Number((eggsInput?.value || '0').replace(',', '.'));
    const ton = Number((tonInput?.value || '0').replace(',', '.'));
    const fee = ton > 0 ? (ton * 5) / 100 : 0;
    const receive = Math.max(ton - fee, 0);
    if (feeValue) feeValue.textContent = fee > 0 ? fee.toFixed(3) : '—';
    if (receiveValue) receiveValue.textContent = receive > 0 ? receive.toFixed(3) : '—';
    if (submitCreate) submitCreate.disabled = !(eggs >= 100 && ton > 0);
  };
  eggsInput?.addEventListener('input', updateSummary);
  tonInput?.addEventListener('input', updateSummary);
  modal?.querySelectorAll('[data-p]')?.forEach((btn) => btn.addEventListener('click', () => {
    if (eggsInput) eggsInput.value = String(Math.floor((0 * Number(btn.dataset.p)) / 100));
    updateSummary();
  }));

  render();
  updateSummary();
})();
