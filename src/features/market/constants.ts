// src/features/market/constants.ts
import type { MarketItem, SortOption } from './types';

export const SORT_OPTIONS: SortOption[] = [
  { key: 'priceAsc', label: 'Цена (дёшево)' },
  { key: 'priceDesc', label: 'Цена (дорого)' },
  { key: 'amountAsc', label: 'Кол-во (меньше)' },
  { key: 'amountDesc', label: 'Кол-во (больше)' },
];

export const MOCK_ITEMS: MarketItem[] = [
  { id: 1, title: 'яйцо', amount: 60800, amountLabel: '60.8k', priceTon: 5.62, rateText: '0.00009 TON/Egg' },
  { id: 2, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
  { id: 3, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
  { id: 4, title: 'яйцо', amount: 1946, amountLabel: '1 946', priceTon: 0.18, rateText: '0.00009 TON/Egg' },
  { id: 5, title: 'яйцо', amount: 3675, amountLabel: '3 675', priceTon: 0.26, rateText: '0.00009 TON/Egg' },
  { id: 6, title: 'яйцо', amount: 3025, amountLabel: '3 025', priceTon: 0.22, rateText: '0.00009 TON/Egg' },
];
