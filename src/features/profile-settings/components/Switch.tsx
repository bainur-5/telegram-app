import './Switch.scss';

interface SwitchProps {
  checked: boolean;
  ariaLabel: string;
  disabled?: boolean;
  onChange: (next: boolean) => void;
}

export default function Switch({
  checked,
  ariaLabel,
  disabled = false,
  onChange,
}: SwitchProps) {
  return (
    <button
      type="button"
      className={`ps-switch ${checked ? 'is-on' : ''}`}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
    />
  );
}
