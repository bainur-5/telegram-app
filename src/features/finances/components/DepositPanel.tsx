import { useState } from 'react';
import tonIcon from '../../../assets/toncoin_ton_logo.svg';
import './DepositPanel.scss';
import GlassCard from './GlassCard';
import RetroBigButton from '../../../shared/ui/RetroBigButton/RetroBigButton';

const QUICK = [0.5, 1, 2, 5, 10];

export default function DepositPanel() {
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('Memo');

  const walletAddress = 'UQBx_fvUPdBop74LLu3zeuzv_cL8UzIk-VsykVHeB0kBNhYD';

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // можно добавить toast
    }
  };

  return (
    <div className="deposit-panel">
      <GlassCard
        className="deposit-panel__card"
      >
        <div className="deposit-panel__title">
          <img src={tonIcon} alt="" aria-hidden="true" />
          <span>Введите сумму</span>
        </div>

        <input
          className="deposit-panel__input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          inputMode="decimal"
          placeholder="0.00"
        />

        <div className="deposit-panel__quick">
          {QUICK.map((q) => (
            <button
              key={q}
              type="button"
              className="deposit-panel__chip"
              onClick={() => setAmount(String(q))}
            >
              {q}
            </button>
          ))}
        </div>
      </GlassCard>

      <GlassCard
        className="deposit-panel__card"
      >
        <h4 className="deposit-panel__sectionTitle">Способ оплаты</h4>

        <RetroBigButton className="deposit-panel__methodBtn deposit-panel__methodBtn--orange">
          Открыть Tonkeeper
        </RetroBigButton>

        <RetroBigButton className="deposit-panel__methodBtn deposit-panel__methodBtn--blue"
          borderColor="#6DBAFB"
          innerBorderColor="#599FFA"
          topColor="#6DBAFB"
          bottomColor="#427FF9"
          dotColor="rgba(95, 205, 251, 0.95)"
          backgroundColor="#6DBAFB"
          textStrokeColor="#427FF9">
          Подключить кошелёк
        </RetroBigButton>
      </GlassCard>

      <GlassCard
        className="deposit-panel__card"
      >
        <h4 className="deposit-panel__sectionTitle">Детали пополнения</h4>

        <div className="deposit-panel__rowHead">
          <span>Адрес для депозита</span>
          <button type="button" onClick={() => copy(walletAddress)}>
            Копировать
          </button>
        </div>

        <div className="deposit-panel__code">{walletAddress}</div>

        <div className="deposit-panel__rowHead">
          <span>Memo (обязательно)</span>
          <button type="button" onClick={() => copy(memo)}>
            Копировать
          </button>
        </div>

        <input
          className="deposit-panel__input deposit-panel__input--small"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="Memo"
        />
      </GlassCard>
    </div>
  );
}
