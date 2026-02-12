// src/features/market/MarketPage.tsx
import { useMemo, useState } from 'react';
import type { MarketTab, SortKey } from './types';
import { MOCK_ITEMS } from './constants';
import { sortItems } from './utils/sortItems';

import MarketHeader from './components/MarketHeader';
import MarketControls from './components/MarketControls';
import MarketItemCard from './components/MarketItemCard';

import RetroBigButton from '../../components/RetroBigButton/RetroBigButton';
import './MarketPage.scss';
import CreateOrderModal from './components/CreateOrderModal';

export default function MarketPage() {
  const [tab, setTab] = useState<MarketTab>('all');
  const [sortKey, setSortKey] = useState<SortKey>('priceAsc');
  const [isCreateOpen, setCreateOpen] = useState<boolean>(true);

  const visibleItems = useMemo(() => {
    const base = tab === 'all' ? MOCK_ITEMS : MOCK_ITEMS.slice(0, 3);
    return sortItems(base, sortKey);
  }, [tab, sortKey]);

  return (
    <main className="market-page">
      <MarketHeader onRefresh={() => console.log('refresh')} />

      <MarketControls
        tab={tab}
        sortKey={sortKey}
        onTabChange={setTab}
        onSortChange={setSortKey}
      />

      <div className="market-page__createWrap">
        <RetroBigButton
          width="100%"
          // borderColor="#c8ff8e"
          // innerBorderColor="#85d95b"
          // topColor="#6dfb21"
          // bottomColor="#4fd11a"
          // dotColor="rgba(225,255,190,.45)"
          onClick={() => setCreateOpen(true)}
        >
          + Создать заказ
        </RetroBigButton>
      </div>

      <div className="market-page__grid">
        {visibleItems.map((item) => (
          <MarketItemCard
            key={item.id}
            item={item}
            onBuy={(it) => console.log('buy item', it.id)}
          />
        ))}
      </div>
      <CreateOrderModal
        isOpen={isCreateOpen}
        onClose={() => setCreateOpen(false)}
        balanceEggs={0}   // подставишь из API/стора
        minEggs={100}
        feePercent={5}
        onSubmit={(payload) => {
          console.log('CREATE ORDER', payload);
          // здесь вызов API
        }}
      />
    </main>
  );
}
