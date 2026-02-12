import type { LanguageOption } from '../types';
import './LanguageCard.scss';

interface LanguageCardProps {
  options: LanguageOption[];
  activeCode: string;
  onSelect: (code: string) => void;
}

export default function LanguageCard({
  options,
  activeCode,
  onSelect,
}: LanguageCardProps) {
  return (
    <section className="ps-language">
      <div className="ps-language__row">
        <p className="ps-language__title">Язык</p>

        <div className="ps-language__grid">
          {options.map((option) => (
            <button
              key={option.code || option.label}
              type="button"
              className={`ps-language__btn ${
                activeCode === option.code ? 'is-active' : ''
              }`}
              onClick={() => !option.disabled && onSelect(option.code)}
              disabled={option.disabled}
              title={option.label}
              aria-label={option.label}
            >
              {option.emoji || <span aria-hidden>—</span>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
