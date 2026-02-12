import { useState } from 'react';
import type { FinanceTab } from './types';
import './FinancesPage.scss';

import FinanceTabs from './components/FinanceTabs';
import DepositPanel from './components/DepositPanel';
import WithdrawPanel from './components/WithdrawPanel';

export default function FinancesPage() {
  const [tab, setTab] = useState<FinanceTab>('deposit');

  return (
    <main className="finances-page">
      <h2 className="finances-page__title">Финансы</h2>

      <FinanceTabs value={tab} onChange={setTab} />

      {tab === 'deposit' ? <DepositPanel /> : <WithdrawPanel />}
    </main>
  );
}
