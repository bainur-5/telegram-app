import type React from "react";

export type HistoryLinkId = 'deposit' | 'withdraw';

export interface HistoryLink {
  id: HistoryLinkId;
  label: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export interface LanguageOption {
  code: string;
  label: string;
  emoji: React.ReactNode;
  disabled?: boolean;
}
