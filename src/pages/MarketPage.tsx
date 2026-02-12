import React, { useEffect, useMemo, useRef, useState } from 'react';
import tonIcon from '../assets/toncoin_ton_logo.svg'; // поправь путь при необходимости
import RetroBigButton from '../components/RetroBigButton/RetroBigButton';

type MarketItem = {
  id: number;
  title: string;
  amount: number;      // кол-во яиц
  amountLabel: string; // как отображать (например "60.8k")
  priceTon: number;    // цена в TON
  rateText: string;    // "0.00009 TON/Egg"
};

type SortKey = 'priceAsc' | 'priceDesc' | 'amountAsc' | 'amountDesc';

const SORT_OPTIONS: Array<{ key: SortKey; label: string }> = [
  { key: 'priceAsc', label: 'Цена (дёшево)' },
  { key: 'priceDesc', label: 'Цена (дорого)' },
  { key: 'amountAsc', label: 'Кол-во (меньше)' },
  { key: 'amountDesc', label: 'Кол-во (больше)' },
];

const MOCK_ITEMS: MarketItem[] = [
  { id: 1, title: 'яйцо', amount: 60800, amountLabel: '60.8k', priceTon: 5.62, rateText: '0.00009 TON/Egg' },
  { id: 2, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
  { id: 3, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
  { id: 4, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
  { id: 5, title: 'яйцо', amount: 3675, amountLabel: '3 675', priceTon: 0.26, rateText: '0.00009 TON/Egg' },
  { id: 6, title: 'яйцо', amount: 3025, amountLabel: '3 025', priceTon: 0.22, rateText: '0.00009 TON/Egg' },
];

function sortItems(items: MarketItem[], sortKey: SortKey) {
  const copy = [...items];
  switch (sortKey) {
    case 'priceAsc':
      return copy.sort((a, b) => a.priceTon - b.priceTon);
    case 'priceDesc':
      return copy.sort((a, b) => b.priceTon - a.priceTon);
    case 'amountAsc':
      return copy.sort((a, b) => a.amount - b.amount);
    case 'amountDesc':
      return copy.sort((a, b) => b.amount - a.amount);
    default:
      return copy;
  }
}

type FrameCardProps = {
  className?: string;
  title?: React.ReactNode;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
};

function FrameCard({ className = '', title, headerRight, children }: FrameCardProps) {
  return (
    <section className={`fc-card ${className}`.trim()}>
      <svg
        className="fc-card__frame"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M4 0 H100 V92 L97 100 H0 V13 Z"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {title !== undefined && (
        <header className="fc-card__header">
          <h3 className="fc-card__title">{title}</h3>
          {headerRight ? <div className="fc-card__header-right">{headerRight}</div> : null}
        </header>
      )}

      <div className="fc-card__body">{children}</div>
    </section>
  );
}

export default function MarketPage() {
  const [tab, setTab] = useState<'all' | 'mine'>('all');
  const [sortKey, setSortKey] = useState<SortKey>('priceAsc');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const visibleItems = useMemo(() => {
    const base = tab === 'all' ? MOCK_ITEMS : MOCK_ITEMS.slice(0, 3);
    return sortItems(base, sortKey);
  }, [tab, sortKey]);

  const selectedSortLabel =
    SORT_OPTIONS.find((o) => o.key === sortKey)?.label ?? 'Цена';

  return (
    <main className="market">
      <div className="market__titleRow">
        <h2 className="market__title">Маркет</h2>
        <button className="market__refresh" type="button" aria-label="Обновить">
          ⟳
        </button>
      </div>

      <div className="market__controls">
        <div className="market__tabs" role="tablist" aria-label="Фильтр">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'all'}
            className={`market__tab ${tab === 'all' ? 'is-active' : ''}`}
            onClick={() => setTab('all')}
          >
            Все
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'mine'}
            className={`market__tab ${tab === 'mine' ? 'is-active' : ''}`}
            onClick={() => setTab('mine')}
          >
            Ваши
          </button>
        </div>

        <div className="market__dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="market__dropdownBtn"
            onClick={() => setDropdownOpen((v) => !v)}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
          >
            {selectedSortLabel}
            <span className={`market__chevron ${dropdownOpen ? 'is-open' : ''}`}>▾</span>
          </button>

          {dropdownOpen && (
            <ul className="market__dropdownMenu" role="listbox">
              {SORT_OPTIONS.map((opt) => (
                <li key={opt.key}>
                  <button
                    type="button"
                    className={`market__dropdownItem ${sortKey === opt.key ? 'is-active' : ''}`}
                    onClick={() => {
                      setSortKey(opt.key);
                      setDropdownOpen(false);
                    }}
                    role="option"
                    aria-selected={sortKey === opt.key}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="market__createWrap">
        <RetroBigButton
          width="100%"
          height={50}
          radius={12}
          fontSize={30 / 2}
          borderColor="#c8ff8e"
          innerBorderColor="#85d95b"
          topColor="#6dfb21"
          bottomColor="#4fd11a"
          dotColor="rgba(225,255,190,.45)"
        >
          + Создать заказ
        </RetroBigButton>
      </div>

      <div className="market__grid">
        {visibleItems.map((item) => (
          <FrameCard key={item.id} className="market-item">
            <div className="market-item__head">{item.title}</div>

            <div className="market-item__line">
              <span className="market-item__lineLabel">Количество</span>
              <span className="market-item__pill market-item__pill--pink">
                <img src={tonIcon} alt="" aria-hidden="true" />
                {item.amountLabel}
              </span>
            </div>

            <div className="market-item__line">
              <span className="market-item__lineLabel">Цена</span>
              <span className="market-item__pill market-item__pill--purple">
                <img src={tonIcon} alt="" aria-hidden="true" />
                {item.priceTon}
              </span>
            </div>

            <div className="market-item__rate">{item.rateText}</div>

            <RetroBigButton
              width="100%"
              height={40}
              radius={10}
              fontSize={24 / 2}
              borderColor="#a2d27a"
              innerBorderColor="#74b64e"
              topColor="#7fd147"
              bottomColor="#5ea93a"
              dotColor="rgba(203,240,171,.35)"
            >
              Купить
            </RetroBigButton>
          </FrameCard>
        ))}
      </div>
    </main>
  );
}
