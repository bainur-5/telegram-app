import UniversalInfoCard, { type CardRow } from "../../../shared/ui/UniversalInfoCard/UniversalInfoCard";

export default function LastCard() {
  const lastBlocks: CardRow[] = [
    {
      left: { label: <span>Блок <span className="yellow">#77703</span></span>, value: <span className="white">Создал в <span className="yellow">13:07</span></span>, },
      right: { label: <span className="yellow">User321</span>, value: '' }, noDivider: true,
    },
    {
      left: { label: 'Моя награда', value: '0.84', kind: 'pill', tone: 'success' },
      right: { label: '', value: '' },
    },
  ];
  return (
    <UniversalInfoCard title="Последние блоки" rows={lastBlocks} />
  )
}