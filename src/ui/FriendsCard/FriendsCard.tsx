import ton from "../../assets/toncoin_ton_logo.svg";
import UsersIcon from "../icons/UsersIcon";

interface FriendsCardProps {
  title?: string;
  title_row?: string;
  value_friends?: string | number;
  value_ton?: string | number;
  value_shtk?: string | number;
}

export default function FriendsCard({
  title = 'Друзья',
  title_row = 'Статистика рефералов',
  value_friends = '0',
  value_ton = '0',
  value_shtk = '0',
}: FriendsCardProps) {
  return (
    <div className="fc-card">
      <svg
        className="fc-card__frame"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
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
            <p>{title_row}</p>
          </div>

          <div className="fc-card__cell--bottom">
            <div className="fc-card__row--inner">
              <div className="fc-card__label">
                <UsersIcon className="fc-card__users-icon"/>
                <p>Друзья</p></div>
              <div className="fc-card__value"><p>{value_friends}</p></div>
            </div>

            <div className="fc-card__row--inner">
              <div className="fc-card__label"><img className="fc-card__ton" src={ton} alt="TON logo" /><p>Заработано TON</p></div>
              <div className="fc-card__value"><p>{value_ton}</p></div>
            </div>

            <div className="fc-card__row--inner">
              <div className="fc-card__label"><img className="fc-card__ton" src={ton} alt="TON logo" /><p>Заработано SHTK</p></div>
              <div className="fc-card__value"><p>{value_shtk}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
