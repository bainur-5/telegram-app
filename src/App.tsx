// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import DotsBlock from './components/DotsBlock/DotsBlock'
import Navigation from './components/Navigation/Navigation'
import TopBar from './components/TopBar/TopBar'
import ReferralsPage from './pages/ReferralsPage'
import MiningPage from './pages/MiningPage'
import './styles/base.scss'
import MarketPage from './features/market/MarketPage';
import FinancesPage from './features/finances/FinancesPage';
import ProfileSettingsPage from './features/profile-settings/ProfileSettingsPage'

function App() {
  return (
    <div className='app'>
      <DotsBlock className="dotsBlock--top" />
      <DotsBlock className="dotsBlock--bottom" />
      <TopBar />
      {/* <MiningPage /> */}
      {/* <ReferralsPage/> */}
      {/* <MarketPage/> */}
      {/* <FinancesPage/> */}
      <ProfileSettingsPage/>
      <Navigation />
    </div>
  )
}

export default App
