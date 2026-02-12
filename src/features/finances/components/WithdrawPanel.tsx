import { useMemo, useState } from 'react';
import tonIcon from '../../../assets/toncoin_ton_logo.svg';
import './WithdrawPanel.scss';
import GlassCard from './GlassCard';
import RetroBigButton from '../../../components/RetroBigButton/RetroBigButton';

const MIN_WITHDRAW = 0.5;
const COMMISSION = 5;

export default function WithdrawPanel() {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  const isValid = useMemo(() => {
    const value = Number(amount.replace(',', '.'));
    return value >= MIN_WITHDRAW && address.trim().length > 8;
  }, [amount, address]);

  return (
    <div className="withdraw-panel">
      <GlassCard
        className="withdraw-panel__card withdraw-panel__card--cyan"
      >
        <div className='withdraw-panel__title'>
          <p className="withdraw-panel__availableLabel">Доступный баланс</p>
        </div>

        <p className="withdraw-panel__availableValue">
          <img src={tonIcon} alt="" aria-hidden="true" />
          <span>0 TON</span>
        </p>
      </GlassCard>

      <GlassCard
        className="withdraw-panel__card"
      >
        <h4 className="withdraw-panel__title">Сумма вывода</h4>

        <input
          className="withdraw-panel__input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          inputMode="decimal"
          placeholder="0.00"
        />

        <div className="withdraw-panel__meta">
          <div>
            <span>Минимум:</span>
            <strong>{MIN_WITHDRAW} TON</strong>
          </div>
          <div>
            <span>Комиссия:</span>
            <strong>{COMMISSION.toFixed(2)}%</strong>
          </div>
        </div>
      </GlassCard>

      <GlassCard
        className="withdraw-panel__card"
      >
        <h4 className="withdraw-panel__title">TON адрес</h4>

        <input
          className="withdraw-panel__input withdraw-panel__input--small"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="EQ... или UQ..."
        />

        <p className="withdraw-panel__hint">
          Введите TON адрес, на который хотите получить средства
        </p>
      </GlassCard>

      <div className="withdraw-panel__warning">
        ⚠ Пожалуйста, проверьте адрес. Вывод нельзя отменить.
      </div>

      <RetroBigButton type="button" className="withdraw-panel__action" disabled={!isValid} 
          borderColor="#6DBAFB"
          innerBorderColor="#599FFA"
          topColor="#6DBAFB"
          bottomColor="#427FF9"
          dotColor="rgba(95, 205, 251, 0.95)"
          backgroundColor="#6DBAFB"
          textStrokeColor="#427FF9">
        Вывести
      </RetroBigButton>

      <RetroBigButton type="button" className="withdraw-panel__history">
        Посмотреть историю выводов →
      </RetroBigButton>
    </div>
  );
}
