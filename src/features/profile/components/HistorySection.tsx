import type { HistoryLink, HistoryLinkId } from '../types';
import './HistorySection.scss';

interface HistorySectionProps {
  links: HistoryLink[];
  onLinkClick?: (id: HistoryLinkId) => void;
}

export default function HistorySection({ links, onLinkClick }: HistorySectionProps) {
  return (
    <div className="ps-history">
      {links.map((item) => (
        <button
          key={item.id}
          type="button"
          className="ps-history__link"
          onClick={() => onLinkClick?.(item.id)}
        >
          <span className="ps-history__text">{item.label}</span>
          <span className="ps-history__arrow">→</span>
        </button>
      ))}
    </div>
  );
}
