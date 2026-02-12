import { useState } from 'react';
import HistorySection from './components/HistorySection';
import NotificationCard from './components/NotificationCard';
import LanguageCard from './components/LanguageCard';
import type {
  HistoryLink,
  HistoryLinkId,
  LanguageOption,
  NotificationItem,
} from './types';
import './ProfileSettingsPage.scss';
import falgRu from '../../assets/flag_ru-4x3.svg';
import flagGb from '../../assets/flag_gb-4x3.svg';
import flagCn from '../../assets/flag_cn-4x3.svg';

interface ProfileSettingsPageProps {
  onOpenDepositHistory?: () => void;
  onOpenWithdrawHistory?: () => void;
  onLanguageChange?: (code: string) => void;
}

const HISTORY_LINKS: HistoryLink[] = [
  { id: 'deposit', label: 'История депозитов' },
  { id: 'withdraw', label: 'История выводов' },
];

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'sold',
    title: 'Заказ продан',
    description: 'Когда ваши заказы исполнены',
    enabled: true,
  },
  {
    id: 'deposits',
    title: 'Депозиты',
    description: 'Когда депозиты зачислены',
    enabled: true,
  },
  {
    id: 'referrals',
    title: 'Рефералы',
    description: 'Награды и новые друзья',
    enabled: true,
  },
  {
    id: 'squids',
    title: 'Кальмары',
    description: 'Покупка и крафт кальмаров',
    enabled: true,
  },
];

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', emoji: <img src={flagGb} alt="EN" /> },
  { code: 'ru', label: 'Русский', emoji: <img src={falgRu} alt="RU" /> },
  { code: 'empty', label: 'Скоро', emoji: '', disabled: true },
  { code: 'zh', label: '中文', emoji: <img src={flagCn} alt="ZH" /> },
];

export default function ProfileSettingsPage({
  onOpenDepositHistory,
  onOpenWithdrawHistory,
  onLanguageChange,
}: ProfileSettingsPageProps) {
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [activeLanguage, setActiveLanguage] = useState<string>('ru');

  const handleHistoryClick = (id: HistoryLinkId) => {
    if (id === 'deposit') onOpenDepositHistory?.();
    if (id === 'withdraw') onOpenWithdrawHistory?.();
  };

  const handleToggle = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const handleLanguageChange = (code: string) => {
    setActiveLanguage(code);
    onLanguageChange?.(code);
  };

  return (
    <main className="profile-settings">
      <section className="profile-settings__block">
        <h2 className="profile-settings__title">История</h2>
        <HistorySection links={HISTORY_LINKS} onLinkClick={handleHistoryClick} />
      </section>

      <section className="profile-settings__block">
        <h2 className="profile-settings__title">Настройки</h2>

        <NotificationCard items={notifications} onToggle={handleToggle} />

        <LanguageCard
          options={LANGUAGE_OPTIONS}
          activeCode={activeLanguage}
          onSelect={handleLanguageChange}
        />
      </section>
    </main>
  );
}
