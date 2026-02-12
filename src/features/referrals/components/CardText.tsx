import type { ReactNode } from 'react';
import './CardText.scss';

interface CardTextProps {
  className?: string;
  children: ReactNode;
}

export default function CardText({ className, children }: CardTextProps) {
  return <div className={`cardText ${className ?? ''}`.trim()}>{children}</div>;
}
