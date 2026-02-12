import CutCornerButton from '../../ui/CutCornerButton';
import bank from '../../assets/bank.svg';
import chart from '../../assets/chart-line.svg';
import bitcoin from '../../assets/bitcoin.svg';
import book from '../../assets/book-open.svg';
import UsersIcon from '../../ui/icons/UsersIcon';

export default function Navigation() {
  return (
    <div className="navigation">
      <CutCornerButton icon={<img src={bank} alt="" />} ariaLabel="Bank" />
      <CutCornerButton icon={<img src={chart} alt="" />} ariaLabel="Chart" />
      <CutCornerButton
        icon={<img src={bitcoin} alt="" />}
        fillColor="#7EBF3E"
        borderColor="#B6FD7D"
        ariaLabel="Bitcoin"
      />
      <CutCornerButton icon={<img src={book} alt="" />} ariaLabel="Book" />
      <CutCornerButton icon={<UsersIcon className="navigation__icon-users"/>} ariaLabel="Users" />
    </div>
  );
}
