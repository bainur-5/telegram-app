// src/features/market/components/MarketItemCard.tsx
import type { MarketItem } from '../types';
import FrameCard from '../../../shared/ui/FrameCard/FrameCard';
import RetroBigButton from '../../../shared/ui/RetroBigButton/RetroBigButton';
import tonIcon from '../../../assets/toncoin_ton_logo.svg';
import './MarketItemCard.scss';

interface MarketItemCardProps {
  item: MarketItem;
  onBuy?: (item: MarketItem) => void;
}

export default function MarketItemCard({ item, onBuy }: MarketItemCardProps) {
  return (
    <FrameCard className="market-item">

      <div className="market-item__line">
        <span className="market-item__lineLabel">{item.title}</span>
        <span className="market-item__pill market-item__pill--blue">
          <img src={tonIcon} alt="" aria-hidden="true" />
          {item.amountLabel}
        </span>
      </div>

      <div className="market-item__line">
        <span className="market-item__lineLabel">Цена</span>
        <span className="market-item__pill market-item__pill--violet">
          <img src={tonIcon} alt="" aria-hidden="true" />
          {item.priceTon}
        </span>
      </div>

      <div className="market-item__rate">{item.rateText}</div>

      <RetroBigButton
        width="100%"
        height={24}
        fontSize={12}
        // borderColor="#a2d27a"
        // innerBorderColor="#74b64e"
        // topColor="#7fd147"
        // bottomColor="#5ea93a"
        // dotColor="rgba(203,240,171,.35)"

        borderColor="#6DBAFB"
        innerBorderColor="#599FFA"
        topColor="#6DBAFB"
        bottomColor="#427FF9"
        dotColor="rgba(95, 205, 251, 0.95)"
        backgroundColor="#6DBAFB"
        textStrokeColor="#427FF9"
        onClick={() => onBuy?.(item)}
      >
        Купить
      </RetroBigButton>
    </FrameCard>
  );
}
