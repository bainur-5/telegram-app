import type { FinanceTab } from '../types';
import './FinanceTabs.scss';

interface FinanceTabsProps {
  value: FinanceTab;
  onChange: (tab: FinanceTab) => void;
}

export default function FinanceTabs({ value, onChange }: FinanceTabsProps) {
  return (
    <div className="finance-tabs" role="tablist" aria-label="Финансовые вкладки">
      <button
        type="button"
        role="tab"
        aria-selected={value === 'deposit'}
        className={`finance-tabs__item ${value === 'deposit' ? 'is-active' : ''}`}
        onClick={() => onChange('deposit')}
      >
        Пополнить
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={value === 'withdraw'}
        className={`finance-tabs__item ${value === 'withdraw' ? 'is-active' : ''}`}
        onClick={() => onChange('withdraw')}
      >
        Вывести
      </button>
    </div>
  );
}
