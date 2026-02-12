import UniversalInfoCard, { type CardRow } from "../../ui/UniversalInfoCard/UniversalInfoCard";

export default function MiningCard() {
  const miningRows: CardRow[] = [
    {
      left: { label: 'Статус', value: '⋮ Майнинг', kind: 'pill', tone: 'accent' },
      right: { label: 'Shares', value: '' },
    },
    {
      left: { label: 'Хэши', value: '' },
      right: { label: 'Заработано', value: '2 000' },
    },
  ];
  return (
    <UniversalInfoCard title="Майнинг" rows={miningRows} />
  )
}