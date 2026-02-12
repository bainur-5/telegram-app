// src/features/market/components/MarketHeader.tsx
import './MarketHeader.scss';

interface MarketHeaderProps {
  title?: string;
  onRefresh?: () => void;
}

export default function MarketHeader({
  title = 'Маркет',
  onRefresh,
}: MarketHeaderProps) {
  return (
    <div className="market-header">
      <h2 className="market-header__title">{title}</h2>
      <button
        type="button"
        className="market-header__refresh"
        aria-label="Обновить"
        onClick={onRefresh}
      >
        ↻
      </button>
    </div>
  );
}
