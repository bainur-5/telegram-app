// src/features/market/components/MarketControls.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import type { MarketTab, SortKey } from '../types';
import { SORT_OPTIONS } from '../constants';
import './MarketControls.scss';

interface MarketControlsProps {
  tab: MarketTab;
  sortKey: SortKey;
  onTabChange: (tab: MarketTab) => void;
  onSortChange: (key: SortKey) => void;
}

export default function MarketControls({
  tab,
  sortKey,
  onTabChange,
  onSortChange,
}: MarketControlsProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const selectedLabel = useMemo(
    () => SORT_OPTIONS.find((o) => o.key === sortKey)?.label ?? 'Цена',
    [sortKey]
  );

  return (
    <div className="market-controls">
      <div className="market-controls__tabs" role="tablist" aria-label="Фильтр">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'all'}
          className={`market-controls__tab ${tab === 'all' ? 'is-active' : ''}`}
          onClick={() => onTabChange('all')}
        >
          Все
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'mine'}
          className={`market-controls__tab ${tab === 'mine' ? 'is-active' : ''}`}
          onClick={() => onTabChange('mine')}
        >
          Ваши
        </button>
      </div>

      <div className="market-controls__dropdown" ref={dropdownRef}>
        <button
          type="button"
          className="market-controls__dropdownBtn"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          {selectedLabel}
          <span className={`market-controls__chevron ${open ? 'is-open' : ''}`}>▾</span>
        </button>

        {open && (
          <ul className="market-controls__dropdownMenu" role="listbox">
            {SORT_OPTIONS.map((opt) => (
              <li key={opt.key}>
                <button
                  type="button"
                  role="option"
                  aria-selected={sortKey === opt.key}
                  className={`market-controls__dropdownItem ${sortKey === opt.key ? 'is-active' : ''}`}
                  onClick={() => {
                    onSortChange(opt.key);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
