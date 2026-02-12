import ProfileCard from './components/ProfileCard';
import InfoCard from './components/InfoCard';
import MiningCard from './components/MiningCard';
import LastCard from './components/LastCard';
import RetroBigButton from '../../shared/ui/RetroBigButton/RetroBigButton';
import './MiningPage.scss';

export default function MiningPage() {
  return (
    <main className="mining-page">
      <div className="mining-page__cards">
        <ProfileCard />
        <InfoCard />
        <MiningCard />
      </div>

      <div className="mining-page__actions">
        <RetroBigButton>Стоп</RetroBigButton>
      </div>

      <LastCard />
    </main>
  );
}
