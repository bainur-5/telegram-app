import ReferalHistory from "../components/ReferralHistory/ReferralHistory";
import RetroBigButton from "../components/RetroBigButton/RetroBigButton";
import CardText from "../ui/CardText/CardText";
import FrendsCard from "../ui/FriendsCard/FriendsCard";

export default function ReferralsPage() {
  const frends = {
    title: "Друзья",
    title_row: "Статистика рефералов",
    value_frends: 12,
    value_shtk: 5,
    value_ton: 3
  }
  return (
    <>
      <div className="marketCards">
        <FrendsCard {...frends} />
        <CardText><p className="text">Текст</p></CardText>
        <CardText><p className="text">ССЫЛКА</p></CardText>
      </div>

      <div className="bigButtonBlocks">
        <RetroBigButton >Копировать</RetroBigButton>
        <RetroBigButton
        borderColor="#6DBAFB"
        innerBorderColor="#599FFA"
        topColor="#6DBAFB"
        bottomColor="#427FF9"
        dotColor="rgba(95, 205, 251, 0.95)" 
        backgroundColor="#6DBAFB"
        textStrokeColor="#427FF9"
        >Поделиться</RetroBigButton>
      </div>
      <ReferalHistory/>
    </>
  )
}