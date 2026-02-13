// src/features/market/types.ts
export type SortField = 'price' | 'amount';
export type SortOrder = 'asc' | 'desc';
export type MarketTab = 'all' | 'mine';

export type MarketItem = {
  id: number;
  title: string;
  amount: number;      // числовое кол-во
  amountLabel: string; // как показать (например "60.8k")
  priceTon: number;    // цена TON
  rateText: string;    // "0.00009 TON/Egg"
};

export type SortOption = {
  key: SortField;
  label: string;
};
