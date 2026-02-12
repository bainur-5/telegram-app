import InfoCard from "../components/InfoCard/InfoCard";
import LastCard from "../components/LastCard/LastCard";
import MiningCard from "../components/MiningCard/MiningCard";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import RetroBigButton from "../components/RetroBigButton/RetroBigButton";


export default function MiningPage(){
  
 
  return (
    <>
      <div className="marketCards">
        <ProfileCard/>
        <InfoCard/>
        <MiningCard/>
      </div>
      <div className="bigButtonBlocks">
        <RetroBigButton>Стоп</RetroBigButton>
      </div>
      <LastCard/>
    </>
  )
}