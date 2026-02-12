import UniversalInfoCard, { type CardRow } from "../../../shared/ui/UniversalInfoCard/UniversalInfoCard";

export default function ProfileCard() {
  const profileRows: CardRow[] = [
    {
      left: { label: 'Баланс Тон', value: '20,14' },
      right: { label: 'Баланс SHTK', value: '20,14' },
    },
    {
      left: {
        label: 'Энергия',
        kind: 'progress',
        progress: {
          value: 55,
          max: 100,
          width: '45%',
          height: 12,
          borderColor: '#5e63c9',
          trackColor: 'transparent',
          fillColor: '#e8f55a',
        },
      },
      right: { value: '' },
    },
  ];
  return (
    <UniversalInfoCard title="Мой профиль" rows={profileRows} />
  )
}