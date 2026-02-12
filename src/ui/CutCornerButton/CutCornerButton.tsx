import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import './CutCornerButton.scss';

type NativeButtonType = 'button' | 'submit' | 'reset';

interface CutCornerButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
  icon?: ReactNode;
  width?: number;
  height?: number;
  borderColor?: string;
  fillColor?: string;
  innerInset?: string; // top right bottom left
  clipPath?: string;
  ariaLabel?: string;
  type?: NativeButtonType;
}

type CutCornerStyleVars = CSSProperties & {
  '--ccb-w'?: string;
  '--ccb-h'?: string;
  '--ccb-border-color'?: string;
  '--ccb-fill-color'?: string;
  '--ccb-inner-inset'?: string;
  '--ccb-clip'?: string;
};

export default function CutCornerButton({
  icon,
  width = 28,
  height = 29,
  borderColor = '#6cc0ff',
  fillColor = '#4f86ff',
  innerInset = '0 0.5px 2px 0.5px',
  clipPath = 'polygon(0 0, 88% 0, 100% 16%, 100% 100%, 12% 100%, 0 84%)',
  className = '',
  onClick,
  ariaLabel = 'button',
  type = 'button',
  ...rest
}: CutCornerButtonProps) {
  const styleVars: CutCornerStyleVars = {
    '--ccb-w': `${width}px`,
    '--ccb-h': `${height}px`,
    '--ccb-border-color': borderColor,
    '--ccb-fill-color': fillColor,
    '--ccb-inner-inset': innerInset,
    '--ccb-clip': clipPath,
  };

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={`cut-corner-btn ${className}`.trim()}
      onClick={onClick}
      style={styleVars}
      {...rest}
    >
      <span className="cut-corner-btn__icon">{icon}</span>
    </button>
  );
}
