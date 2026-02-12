import './UniversalInfoCard.scss';

type Align = 'start' | 'center' | 'end';
type Tone = 'default' | 'accent' | 'success' | 'warning' | 'danger';
type ValueKind = 'text' | 'pill' | 'progress';

type CardStyleVars = React.CSSProperties & {
  '--uic-border'?: string;
  '--uic-header-bg'?: string;
  '--uic-label-color'?: string;
  '--uic-value-color'?: string;
  '--uic-pill-bg'?: string;
  '--uic-pill-color'?: string;
  '--uic-accent'?: string;
};

type ProgressStyleVars = React.CSSProperties & {
  '--uic-progress-w'?: string;
  '--uic-progress-h'?: string;
  '--uic-progress-border'?: string;
  '--uic-progress-track'?: string;
  '--uic-progress-fill'?: string;
};

export interface ProgressOptions {
  value: number;
  max?: number;
  width?: number | string; // 120 | "45%"
  height?: number; // px
  borderColor?: string;
  trackColor?: string;
  fillColor?: string;
  className?: string;
}

export interface CardCell {
  label?: React.ReactNode;
  value?: React.ReactNode;
  kind?: ValueKind; // text | pill | progress
  progress?: ProgressOptions; // используется при kind='progress'
  align?: Align;
  tone?: Tone;
  className?: string;
  valueClassName?: string;
}

export interface CardRow {
  id?: string | number;
  left?: CardCell;
  right?: CardCell;
  full?: React.ReactNode; // для кастомного содержимого во всю ширину
  className?: string;
  noDivider?: boolean;
}

export interface UniversalInfoCardProps {
  title: React.ReactNode;
  rows: CardRow[];
  className?: string;
  headerRight?: React.ReactNode;
  footer?: React.ReactNode;
  theme?: {
    border?: string;
    headerBg?: string;
    labelColor?: string;
    valueColor?: string;
    pillBg?: string;
    pillColor?: string;
    accent?: string;
  };
}

const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(' ');

function UICProgress({ options }: { options: ProgressOptions }) {
  const {
    value,
    max = 100,
    width = '100%',
    height = 12,
    borderColor = 'var(--uic-border)',
    trackColor = 'transparent',
    fillColor = 'var(--uic-accent)',
    className,
  } = options;

  const safeValue = Math.max(0, Math.min(value, max));

  const vars: ProgressStyleVars = {
    '--uic-progress-w': typeof width === 'number' ? `${width}px` : width,
    '--uic-progress-h': `${height}px`,
    '--uic-progress-border': borderColor,
    '--uic-progress-track': trackColor,
    '--uic-progress-fill': fillColor,
  };

  return (
    <progress
      className={cn('uic-progress', className)}
      max={max}
      value={safeValue}
      style={vars}
      aria-label="Progress"
    />
  );
}

function renderValue(cell?: CardCell) {
  if (!cell) return null;

  const kind = cell.kind ?? 'text';

  if (kind === 'progress' && cell.progress) {
    return <UICProgress options={cell.progress} />;
  }

  if (kind === 'pill') {
    return (
      <span
        className={cn(
          'uic-pill',
          cell.tone && `uic-pill--${cell.tone}`,
          cell.valueClassName
        )}
      >
        {cell.value}
      </span>
    );
  }

  return (
    <div
      className={cn(
        'uic-card__value',
        cell.tone && `uic-card__value--${cell.tone}`,
        cell.valueClassName
      )}
    >
      {cell.value}
    </div>
  );
}

function Cell({ cell, side }: { cell?: CardCell; side: 'left' | 'right' }) {
  if (!cell) {
    return <div className={cn('uic-card__cell', `uic-card__cell--${side}`)} />;
  }

  return (
    <div
      className={cn(
        'uic-card__cell',
        `uic-card__cell--${side}`,
        cell.align && `uic-card__cell--${cell.align}`,
        cell.className
      )}
    >
      {cell.label !== undefined && <div className="uic-card__label">{cell.label}</div>}
      {(cell.value !== undefined || cell.kind === 'progress') && renderValue(cell)}
    </div>
  );
}

export default function UniversalInfoCard({
  title,
  rows,
  className,
  headerRight,
  footer,
  theme,
}: UniversalInfoCardProps) {
  const styleVars: CardStyleVars = {
    '--uic-border': theme?.border,
    '--uic-header-bg': theme?.headerBg,
    '--uic-label-color': theme?.labelColor,
    '--uic-value-color': theme?.valueColor,
    '--uic-pill-bg': theme?.pillBg,
    '--uic-pill-color': theme?.pillColor,
    '--uic-accent': theme?.accent,
  };

  return (
    <section className={cn('uic-card', className)} style={styleVars}>
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

      <header className="uic-card__header">
        <h3 className="uic-card__title">{title}</h3>
        {headerRight && <div className="uic-card__header-right">{headerRight}</div>}
      </header>

      <div className="uic-card__body">
        {rows.map((row, idx) => (
          <div
            key={row.id ?? idx}
            className={cn(
              'uic-card__row',
              row.noDivider && 'uic-card__row-no-divider',
              row.className
            )}
          >
            {row.full ? (
              <div className="uic-card__row-full">{row.full}</div>
            ) : (
              <>
                <Cell cell={row.left} side="left" />
                <Cell cell={row.right} side="right" />
              </>
            )}
          </div>
        ))}
      </div>

      {footer && <footer className="uic-card__footer">{footer}</footer>}
    </section>
  );
}
