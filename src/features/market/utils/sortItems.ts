// src/features/market/utils/sortItems.ts
import type { MarketItem, SortKey } from '../types';

export function sortItems(items: MarketItem[], sortKey: SortKey): MarketItem[] {
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
