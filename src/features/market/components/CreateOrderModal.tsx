import { useEffect, useMemo, useState } from 'react';
import './CreateOrderModal.scss';
import RetroBigButton from '../../../shared/ui/RetroBigButton/RetroBigButton';

export type CreateOrderPayload = {
  eggs: number;
  totalTon: number;
};

interface CreateOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (payload: CreateOrderPayload) => void;

  balanceEggs?: number;   // сколько доступно яиц
  minEggs?: number;       // минимум (по макету 100)
  feePercent?: number;    // комиссия (по макету 5)
}

const toNumber = (value: string) => {
  const normalized = value.replace(',', '.').trim();
  const n = Number(normalized);
  return Number.isFinite(n) ? n : 0;
};

export default function CreateOrderModal({
  isOpen,
  onClose,
  onSubmit,
  balanceEggs = 0,
  minEggs = 100,
  feePercent = 5,
}: CreateOrderModalProps) {
  const [eggsInput, setEggsInput] = useState('');
  const [totalTonInput, setTotalTonInput] = useState('');

  // ESC для закрытия
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // блокируем прокрутку body, пока модалка открыта
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const eggs = toNumber(eggsInput);
  const totalTon = toNumber(totalTonInput);

  const fee = useMemo(() => (totalTon * feePercent) / 100, [totalTon, feePercent]);
  const receive = useMemo(() => Math.max(totalTon - fee, 0), [totalTon, fee]);

  const isValid = eggs >= minEggs && totalTon > 0;

  const setPercent = (p: 25 | 50 | 75 | 100) => {
    const val = Math.floor((balanceEggs * p) / 100);
    setEggsInput(String(val));
  };

  const handleSubmit = () => {
    if (!isValid) return;
    onSubmit?.({ eggs, totalTon });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="create-order-modal__overlay"
      onClick={onClose}
      aria-hidden
    >
      <div
        className="create-order-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Создать заказ"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="create-order-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <h3 className="create-order-modal__title">Создать заказ</h3>

        <div className="create-order-modal__section">
          <div className="create-order-modal__rowHead">
            <span>Количество яиц</span>
            <span className="create-order-modal__muted">мин. {minEggs}</span>
          </div>

          <input
            className="create-order-modal__input"
            type="text"
            inputMode="decimal"
            placeholder={`Введите количество яиц (мин. ${minEggs})`}
            value={eggsInput}
            onChange={(e) => setEggsInput(e.target.value)}
          />

          <div className="create-order-modal__quick">
            <button type="button" onClick={() => setPercent(25)}>25%</button>
            <button type="button" onClick={() => setPercent(50)}>50%</button>
            <button type="button" onClick={() => setPercent(75)}>75%</button>
            <button type="button" onClick={() => setPercent(100)}>МАКС</button>
          </div>

          <p className="create-order-modal__hint">Доступно: {balanceEggs} яиц</p>
        </div>

        <div className="create-order-modal__section">
          <div className="create-order-modal__rowHead">
            <span>Общая цена (TON)</span>
          </div>

          <input
            className="create-order-modal__input"
            type="text"
            inputMode="decimal"
            placeholder="Введите общую цену в TON"
            value={totalTonInput}
            onChange={(e) => setTotalTonInput(e.target.value)}
          />

          <div className="create-order-modal__summary">
            <div>
              <span>Комиссия продавца ({feePercent}%)</span>
              <span>{fee > 0 ? fee.toFixed(3) : '—'}</span>
            </div>
            <div>
              <span>Вы получите</span>
              <span className="is-accent">{receive > 0 ? receive.toFixed(3) : '—'}</span>
            </div>
          </div>
        </div>

        <RetroBigButton
          className="create-order-modal__submit"
          width="100%"
          height={32}
          borderColor="#6DBAFB"
          innerBorderColor="#599FFA"
          topColor="#6DBAFB"
          bottomColor="#427FF9"
          dotColor="rgba(95, 205, 251, 0.95)"
          backgroundColor="#6DBAFB"
          textStrokeColor="#427FF9"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Создать заказ
        </RetroBigButton>
      </div>
    </div>
  );
}
