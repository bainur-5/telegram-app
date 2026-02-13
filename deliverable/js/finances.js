(() => {
  const tabs = document.querySelectorAll('[data-fin-tab]');
  const deposit = document.getElementById('depositPanel');
  const withdraw = document.getElementById('withdrawPanel');
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      const isActive = t === tab;
      t.classList.toggle('is-active', isActive);
      t.setAttribute('aria-selected', String(isActive));
    });
    const isDeposit = tab.dataset.finTab === 'deposit';
    deposit?.classList.toggle('page-hidden', !isDeposit);
    withdraw?.classList.toggle('page-hidden', isDeposit);
  }));

  const amount = document.getElementById('withdrawAmount');
  const address = document.getElementById('withdrawAddress');
  const btn = document.getElementById('withdrawBtn');
  const check = () => {
    const valid = Number((amount?.value || '0').replace(',', '.')) >= 0.5 && (address?.value || '').trim().length > 8;
    if (btn) btn.disabled = !valid;
  };
  amount?.addEventListener('input', check);
  address?.addEventListener('input', check);

  const depositAmount = document.getElementById('depositAmount');
  document.querySelectorAll('.deposit-panel__chip').forEach((chip) => chip.addEventListener('click', () => {
    if (depositAmount) depositAmount.value = chip.textContent?.trim() || '';
  }));

  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text); } catch {}
  };
  document.querySelectorAll('[data-copy="wallet"]').forEach((btn) => btn.addEventListener('click', () => copy(document.getElementById('walletAddress')?.textContent || '')));
  document.querySelectorAll('[data-copy="memo"]').forEach((btn) => btn.addEventListener('click', () => copy(document.getElementById('memoInput')?.value || '')));
})();
