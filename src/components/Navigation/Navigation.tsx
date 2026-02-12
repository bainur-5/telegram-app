import type { ReactNode } from 'react';
import CutCornerButton from '../../shared/ui/CutCornerButton';
import bank from '../../assets/bank.svg';
import chart from '../../assets/chart-line.svg';
import bitcoin from '../../assets/bitcoin.svg';
import book from '../../assets/book-open.svg';
import UsersIcon from '../../ui/icons/UsersIcon';

export type Screen = 'mining' | 'referrals' | 'market' | 'finances' | 'profile';

interface NavigationProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const NAV_ITEMS: Array<{
  screen: Screen;
  ariaLabel: string;
  icon: ReactNode;
}> = [
  { screen: 'finances', ariaLabel: 'Finances', icon: <img src={bank} alt="" /> },
  { screen: 'mining', ariaLabel: 'Mining', icon: <img src={chart} alt="" /> },
  { screen: 'market', ariaLabel: 'Market', icon: <img src={bitcoin} alt="" /> },
  { screen: 'referrals', ariaLabel: 'Referrals', icon: <img src={book} alt="" /> },
  {
    screen: 'profile',
    ariaLabel: 'Profile',
    icon: <UsersIcon className="navigation__icon-users" />,
  },
];

export default function Navigation({ activeScreen, onNavigate }: NavigationProps) {
  return (
    <nav className="navigation" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = activeScreen === item.screen;

        return (
          <CutCornerButton
            key={item.screen}
            icon={item.icon}
            ariaLabel={item.ariaLabel}
            onClick={() => onNavigate(item.screen)}
            fillColor={isActive ? '#7EBF3E' : '#4f86ff'}
            borderColor={isActive ? '#B6FD7D' : '#6cc0ff'}
            aria-pressed={isActive}
          />
        );
      })}
    </nav>
  );
}
