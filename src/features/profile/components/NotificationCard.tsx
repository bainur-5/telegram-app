import type { NotificationItem } from '../types';
import Switch from './Switch';
import './NotificationCard.scss';

interface NotificationCardProps {
  items: NotificationItem[];
  onToggle: (id: string) => void;
}

export default function NotificationCard({ items, onToggle }: NotificationCardProps) {
  return (
    <section className="ps-notify">
      <h3 className="ps-notify__title">Уведомления</h3>
      <p className="ps-notify__subtitle">
        Выберите, какие уведомления получать
      </p>

      <div className="ps-notify__list">
        {items.map((item) => (
          <div className="ps-notify__row" key={item.id}>
            <div className="ps-notify__left">
              <p className="ps-notify__name">{item.title}</p>
              <p className="ps-notify__desc">{item.description}</p>
            </div>

            <Switch
              checked={item.enabled}
              ariaLabel={item.title}
              onChange={() => onToggle(item.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
