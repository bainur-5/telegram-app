// src/features/market/components/MarketControls.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import type { MarketTab, SortField, SortOrder } from '../types';
import { SORT_OPTIONS } from '../constants';
import arrowTop from '../../../assets/oi_caret-top.svg'
import './MarketControls.scss';

interface MarketControlsProps {
  tab: MarketTab;
  sortField: SortField;
  sortOrder: SortOrder;
  onTabChange: (tab: MarketTab) => void;
  onSortFieldChange: (field: SortField) => void;
  onSortOrderToggle: () => void;
}

export default function MarketControls({
  tab,
  sortField,
  sortOrder,
  onTabChange,
  onSortFieldChange,
  onSortOrderToggle,
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
    () => SORT_OPTIONS.find((o) => o.key === sortField)?.label ?? 'Сортировка',
    [sortField]
  );

  const fromToAriaLabel =
    sortField === 'price'
      ? sortOrder === 'asc'
        ? 'Показывать сначала дешёвые'
        : 'Показывать сначала дорогие'
      : sortOrder === 'asc'
      ? 'Показывать сначала меньшее количество'
      : 'Показывать сначала большее количество';

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
                  aria-selected={sortField === opt.key}
                  className={`market-controls__dropdownItem ${sortField === opt.key ? 'is-active' : ''}`}
                  onClick={() => {
                    onSortFieldChange(opt.key);
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

      {/* Только кнопка-иконка без текста */}
      <button
        type="button"
        className="market-controls__fromTo"
        onClick={onSortOrderToggle}
        aria-label={fromToAriaLabel}
        title={fromToAriaLabel}
      >
        <span
          className={`market-controls__fromToIcon ${sortOrder === 'desc' ? 'is-desc' : ''}`}
          aria-hidden="true"
        >
          <img src={arrowTop} alt="top" />
        </span>
      </button>
    </div>
  );
}
