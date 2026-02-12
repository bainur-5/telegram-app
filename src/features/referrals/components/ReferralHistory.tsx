import ton from '../../../assets/toncoin_ton_logo.svg';
import './ReferralHistory.scss';

type ReferralItem = {
  id: string | number;
  name: string;
  score: number;
  delta?: number;
};

interface ReferralHistoryProps {
  title?: string;
  items?: ReferralItem[];
}

const mockItems: ReferralItem[] = [
  { id: 1, name: 'Nickname', score: 1234, delta: 2 },
  { id: 2, name: 'Nickname', score: 980 },
  { id: 3, name: 'Nickname', score: 640 },
];

export default function ReferralHistory({
  title = 'История рефералов',
  items = mockItems,
}: ReferralHistoryProps) {
  return (
    <div className="referalHistory">
      <p className="referalHistory__title">{title}</p>

      <div className="referalHistory__card">
        <div className="referalHistory__list">
          {items.map((item) => (
            <div className="referalHistory__item" key={item.id}>
              <div className="referalHistory__avatar" />

              <div
                className={`referalHistory__info ${item.delta ? 'referalHistory__info--active' : ''}`}
              >
                <div className="referalHistory__info_left">
                  <p className="referalHistory__name">{item.name}</p>

                  <div className="referalHistory__score">
                    <img src={ton} alt="TON logo" />
                    <span>{item.score}</span>
                  </div>
                </div>

                {item.delta ? <p className="referalHistory__delta">+{item.delta}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
