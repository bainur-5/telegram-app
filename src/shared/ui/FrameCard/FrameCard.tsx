import type { ReactNode } from 'react';
import './FrameCard.scss';

interface FrameCardProps {
  className?: string;
  title?: ReactNode;
  headerRight?: ReactNode;
  bodyClassName?: string;
  children: ReactNode;
}

const cn = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(' ');

export default function FrameCard({
  className,
  title,
  headerRight,
  bodyClassName,
  children,
}: FrameCardProps) {
  return (
    <section className={cn('fc-card', className)}>
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

      {title !== undefined && (
        <header className="fc-card__header">
          <h3 className="fc-card__title">{title}</h3>
          {headerRight ? <div className="fc-card__header-right">{headerRight}</div> : null}
        </header>
      )}

      <div className={cn('fc-card__body', bodyClassName)}>{children}</div>
    </section>
  );
}
