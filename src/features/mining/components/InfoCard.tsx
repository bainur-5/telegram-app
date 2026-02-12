import UniversalInfoCard, { type CardRow } from "../../../shared/ui/UniversalInfoCard/UniversalInfoCard";

export default function InfoCard() {
  const infoRows: CardRow[] = [
    {
      left: { label: 'Блок', value: '20,14' },
      right: { label: 'Сложность', value: '190,5' }
    },
    {
      left: { label: 'Награда', value: '' },
      right: { label: 'В сети', value: '130' }
    }
  ]
  return (
    <UniversalInfoCard title="Информация" rows={infoRows} />
  )
}