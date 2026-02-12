import ton from '../../../assets/toncoin_ton_logo.svg';
import UsersIcon from '../../../ui/icons/UsersIcon';
import './FriendsCard.scss';

interface FriendsCardProps {
  title?: string;
  titleRow?: string;
  valueFriends?: string | number;
  valueTon?: string | number;
  valueShtk?: string | number;
}

export default function FriendsCard({
  title = 'Друзья',
  titleRow = 'Статистика рефералов',
  valueFriends = '0',
  valueTon = '0',
  valueShtk = '0',
}: FriendsCardProps) {
  return (
    <div className="fc-card">
      <svg className="fc-card__frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M4 0 H100 V92 L97 100 H0 V13 Z"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="fc-card__header">
        <h3 className="fc-card__title">{title}</h3>
      </div>

      <div className="fc-card__body">
        <div className="fc-card__row">
          <div className="fc-card__cell--top">
            <p>{titleRow}</p>
          </div>

          <div className="fc-card__cell--bottom">
            <div className="fc-card__row--inner">
              <div className="fc-card__label">
                <UsersIcon className="fc-card__users-icon" />
                <p>Друзья</p>
              </div>
              <div className="fc-card__value">
                <p>{valueFriends}</p>
              </div>
            </div>

            <div className="fc-card__row--inner">
              <div className="fc-card__label">
                <img className="fc-card__ton" src={ton} alt="TON logo" />
                <p>Заработано TON</p>
              </div>
              <div className="fc-card__value">
                <p>{valueTon}</p>
              </div>
            </div>

            <div className="fc-card__row--inner">
              <div className="fc-card__label">
                <img className="fc-card__ton" src={ton} alt="TON logo" />
                <p>Заработано SHTK</p>
              </div>
              <div className="fc-card__value">
                <p>{valueShtk}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
