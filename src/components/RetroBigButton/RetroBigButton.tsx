import React from 'react';
import './RetroBigButton.scss';

type CssVars = React.CSSProperties & {
  '--rgb-w'?: string;
  '--rgb-h'?: string;
  '--rgb-radius'?: string;
  '--rgb-border'?: string;
  '--rgb-inner-border'?: string;
  '--rgb-top'?: string;
  '--rgb-bottom'?: string;
  '--rgb-dot'?: string;
  '--rgb-text'?: string;
  '--rgb-text-stroke'?: string;
  '--rgb-font-size'?: string;
  '--rgb-background'?: string;
};

export interface RetroBigButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  fontSize?: number | string;
  borderColor?: string;
  innerBorderColor?: string;
  topColor?: string;
  bottomColor?: string;
  dotColor?: string;
  textColor?: string;
  textStrokeColor?: string;
  backgroundColor?: string; 

}

const toUnit = (v?: number | string) =>
  typeof v === 'number' ? `${v}px` : v;

export default function RetroBigButton({
  children = 'Стоп',
  className = '',
  width = 126,
  height = 32,
  radius = 3,
  fontSize = 32 / 2, // 32px
  borderColor = '#F6E55D',
  innerBorderColor = '#E2B44A',
  topColor = '#F3EE63',
  bottomColor = '#EDB43B',
  dotColor = 'rgba(255, 245, 175, 0.95)',
  textColor = '#FFFFFF',
  textStrokeColor = '#5D392A',
  backgroundColor = '#f1dc57',
  type = 'button',
  ...rest
}: RetroBigButtonProps) {
  const vars: CssVars = {
    '--rgb-w': toUnit(width),
    '--rgb-h': toUnit(height),  
    '--rgb-radius': toUnit(radius),
    '--rgb-font-size': toUnit(fontSize),
    '--rgb-border': borderColor,
    '--rgb-inner-border': innerBorderColor,
    '--rgb-top': topColor,
    '--rgb-bottom': bottomColor,
    '--rgb-dot': dotColor,
    '--rgb-text': textColor,
    '--rgb-text-stroke': textStrokeColor,
    "--rgb-background": backgroundColor
  };

  return (
    <button
      type={type}
      className={`retro-gold-btn ${className}`.trim()}
      style={vars}
      {...rest}
    >
      <span className="retro-gold-btn__border" aria-hidden="true" />
      <span className="retro-gold-btn__surface" aria-hidden="true" />
      <span className="retro-gold-btn__dots" aria-hidden="true" />
      <span className="retro-gold-btn__text">{children}</span>
    </button>
  );
}
