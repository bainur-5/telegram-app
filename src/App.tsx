import { useState } from 'react';
import DotsBlock from './components/DotsBlock/DotsBlock';
import Navigation, { type Screen } from './components/Navigation/Navigation';
import TopBar from './components/TopBar/TopBar';
import MiningPage from './features/mining/MiningPage';
import ReferralsPage from './features/referrals/ReferralsPage';
import MarketPage from './features/market/MarketPage';
import FinancesPage from './features/finances/FinancesPage';
import ProfileSettingsPage from './features/profile/ProfileSettingsPage';
import './styles/base.scss';

function renderScreen(screen: Screen) {
  switch (screen) {
    case 'mining':
      return <MiningPage />;
    case 'referrals':
      return <ReferralsPage />;
    case 'market':
      return <MarketPage />;
    case 'finances':
      return <FinancesPage />;
    case 'profile':
    default:
      return <ProfileSettingsPage />;
  }
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('market');

  return (
    <div className="app">
      <DotsBlock className="dotsBlock--top" />
      <DotsBlock className="dotsBlock--bottom" />
      <TopBar />
      {renderScreen(activeScreen)}
      <Navigation activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </div>
  );
}
