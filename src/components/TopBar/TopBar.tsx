import CutCornerButton from "../../ui/CutCornerButton";
import user from "../../assets/user.svg";
import ton from "../../assets/token-branded_ton.svg";

export default function TopBar() {
  return (
    <div className={`topBar`}>
      <div className="topBar__left">
        <div className="topBar__score_block">
          <div className="topBar__score_icon">
            <img src={ton} alt="TON logo" />
          </div>
          <div className="topBar__score">
            <span>2014</span>
          </div>
        </div>
        <div className="topBar__score_block">
          <div className="topBar__score_icon">
            <img src={ton} alt="TON logo" />
          </div>
          <div className="topBar__score">
            <span>2014</span>
          </div>
        </div>
        <button className="topBar_add">
          <span>+</span>
        </button>
      </div>
      <div className="topBar__right">
        <CutCornerButton icon={<img src={user} alt="" />} ariaLabel="User" />
      </div>
    </div>
  )
}