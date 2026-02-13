// src/features/market/utils/sortItems.ts
import type { MarketItem, SortField, SortOrder } from '../types';

export function sortItems(
  items: MarketItem[],
  field: SortField,
  order: SortOrder
): MarketItem[] {
  const sorted = [...items].sort((a, b) => {
    const diff = field === 'price'
      ? a.priceTon - b.priceTon
      : a.amount - b.amount;

    return order === 'asc' ? diff : -diff;
  });

  return sorted;
}