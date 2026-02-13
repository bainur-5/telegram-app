(() => {
  document.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const href = btn.getAttribute('data-nav');
      if (!href) return;
      const base = window.location.pathname.includes('/page/') ? '../' : '';
      window.location.href = `${base}${href}`;
    });
  });

  const financeTabs = document.querySelectorAll('[data-fin-tab]');
  if (financeTabs.length) {
    financeTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const key = tab.getAttribute('data-fin-tab');
        financeTabs.forEach((i) => i.classList.toggle('is-active', i === tab));
        document.querySelectorAll('[data-fin-panel]').forEach((panel) => {
          panel.hidden = panel.getAttribute('data-fin-panel') !== key;
        });
      });
    });

    document.querySelectorAll('.deposit-panel__chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const val = chip.getAttribute('data-quick') || '';
        const input = document.getElementById('deposit-amount');
        if (input) input.value = val;
      });
    });

    document.querySelectorAll('[data-copy]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const key = btn.getAttribute('data-copy');
        const text = key === 'wallet'
          ? document.getElementById('wallet-text')?.textContent
          : document.getElementById('memo-input')?.value;
        if (!text) return;
        try { await navigator.clipboard.writeText(text); } catch (_) {}
      });
    });

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAddress = document.getElementById('withdraw-address');
    const withdrawSubmit = document.getElementById('withdraw-submit');
    const updateWithdraw = () => {
      if (!withdrawAmount || !withdrawAddress || !withdrawSubmit) return;
      const amount = Number(withdrawAmount.value.replace(',', '.'));
      const valid = amount >= 0.5 && withdrawAddress.value.trim().length > 8;
      withdrawSubmit.disabled = !valid;
    };
    withdrawAmount?.addEventListener('input', updateWithdraw);
    withdrawAddress?.addEventListener('input', updateWithdraw);
  }

  document.querySelectorAll('.ps-switch').forEach((sw) => {
    sw.addEventListener('click', () => {
      const next = !sw.classList.contains('is-on');
      sw.classList.toggle('is-on', next);
      sw.setAttribute('aria-checked', String(next));
    });
  });

  document.querySelectorAll('.ps-language__btn:not([disabled])').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ps-language__btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  const marketGrid = document.getElementById('market-grid');
  if (marketGrid) {
    let tab = 'all';
    let field = 'price';
    let order = 'asc';

    const refreshMarket = () => {
      const cards = Array.from(marketGrid.querySelectorAll('[data-item]'));
      cards.forEach((card) => {
        card.style.display = tab === 'all' || card.getAttribute('data-owner') === 'mine' ? '' : 'none';
      });
      cards.sort((a, b) => {
        const av = Number(a.getAttribute(`data-${field}`) || 0);
        const bv = Number(b.getAttribute(`data-${field}`) || 0);
        return order === 'asc' ? av - bv : bv - av;
      }).forEach((card) => marketGrid.appendChild(card));
    };

    document.querySelectorAll('[data-market-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        tab = btn.getAttribute('data-market-tab') || 'all';
        document.querySelectorAll('[data-market-tab]').forEach((i) => i.classList.toggle('is-active', i === btn));
        refreshMarket();
      });
    });

    const dropBtn = document.querySelector('.market-controls__dropdownBtn');
    const menu = document.querySelector('.market-controls__dropdownMenu');
    const label = document.querySelector('.market-controls__dropdownLabel');
    dropBtn?.addEventListener('click', () => {
      const open = menu?.hasAttribute('hidden');
      if (open) menu?.removeAttribute('hidden'); else menu?.setAttribute('hidden', '');
      dropBtn.setAttribute('aria-expanded', String(open));
      document.querySelector('.market-controls__chevron')?.classList.toggle('is-open', !!open);
    });

    document.querySelectorAll('[data-sort-field]').forEach((btn) => {
      btn.addEventListener('click', () => {
        field = btn.getAttribute('data-sort-field') || 'price';
        label.textContent = btn.textContent;
        document.querySelectorAll('[data-sort-field]').forEach((i) => i.classList.toggle('is-active', i === btn));
        menu?.setAttribute('hidden', '');
        dropBtn?.setAttribute('aria-expanded', 'false');
        document.querySelector('.market-controls__chevron')?.classList.remove('is-open');
        refreshMarket();
      });
    });

    document.querySelector('.market-controls__fromTo')?.addEventListener('click', () => {
      order = order === 'asc' ? 'desc' : 'asc';
      document.querySelector('.market-controls__fromToIcon')?.classList.toggle('is-desc', order === 'desc');
      refreshMarket();
    });

    const overlay = document.getElementById('create-order-modal');
    const openBtn = document.querySelector('[data-open-create]');
    const closeBtn = document.querySelector('.create-order-modal__close');
    const eggsInput = document.getElementById('eggs-input');
    const tonInput = document.getElementById('ton-input');
    const submitBtn = document.getElementById('create-submit');
    const feeValue = document.getElementById('fee-value');
    const receiveValue = document.getElementById('receive-value');

    const updateModal = () => {
      const eggs = Number((eggsInput?.value || '').replace(',', '.')) || 0;
      const total = Number((tonInput?.value || '').replace(',', '.')) || 0;
      const fee = (total * 5) / 100;
      const receive = Math.max(total - fee, 0);
      if (feeValue) feeValue.textContent = fee > 0 ? fee.toFixed(3) : '—';
      if (receiveValue) receiveValue.textContent = receive > 0 ? receive.toFixed(3) : '—';
      if (submitBtn) submitBtn.disabled = !(eggs >= 100 && total > 0);
    };

    openBtn?.addEventListener('click', () => {
      overlay?.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
      overlay?.setAttribute('hidden', '');
      document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    eggsInput?.addEventListener('input', updateModal);
    tonInput?.addEventListener('input', updateModal);
    document.querySelectorAll('[data-percent]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (eggsInput) eggsInput.value = '0';
        updateModal();
      });
    });
    submitBtn?.addEventListener('click', closeModal);

    refreshMarket();
  }
})();
