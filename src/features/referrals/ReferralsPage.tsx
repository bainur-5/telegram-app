import FriendsCard from './components/FriendsCard';
import CardText from './components/CardText';
import ReferralHistory from './components/ReferralHistory';
import RetroBigButton from '../../shared/ui/RetroBigButton/RetroBigButton';
import './ReferralsPage.scss';

export default function ReferralsPage() {
  return (
    <main className="referrals-page">
      <div className="referrals-page__cards">
        <FriendsCard
          title="Друзья"
          titleRow="Статистика рефералов"
          valueFriends={12}
          valueShtk={5}
          valueTon={3}
        />
        <CardText>
          <p className="text">Текст</p>
        </CardText>
        <CardText>
          <p className="text">ССЫЛКА</p>
        </CardText>
      </div>

      <div className="referrals-page__actions">
        <RetroBigButton>Копировать</RetroBigButton>
        <RetroBigButton
          borderColor="#6DBAFB"
          innerBorderColor="#599FFA"
          topColor="#6DBAFB"
          bottomColor="#427FF9"
          dotColor="rgba(95, 205, 251, 0.95)"
          backgroundColor="#6DBAFB"
          textStrokeColor="#427FF9"
        >
          Поделиться
        </RetroBigButton>
      </div>

      <ReferralHistory />
    </main>
  );
}
