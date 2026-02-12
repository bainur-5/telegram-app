import type { HTMLAttributes, ReactNode } from 'react';
import './GlassCard.scss';



interface GlassCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  contentClassName?: string;
}

export default function GlassCard({
  children,
  className,
  contentClassName,
  ...rest
}: GlassCardProps) {;

  return (
    <section className={`uic-card ${className || ''}`} {...rest}>
      <svg
        className="uic-card__frame"
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

      <div className={`uic-card__content ${contentClassName || ''}`}>{children}</div>
    </section>
  );
}
