# Style Inventory (Audit)

## Mining
- JSX/TSX: `src/features/mining/MiningPage.tsx` + `components/ProfileCard.tsx`, `InfoCard.tsx`, `MiningCard.tsx`, `LastCard.tsx`.
- SCSS chain: `src/styles/base.scss` -> `src/features/mining/MiningPage.scss` + `src/shared/ui/UniversalInfoCard/UniversalInfoCard.scss` + `src/shared/ui/RetroBigButton/RetroBigButton.scss`.

## Referrals
- JSX/TSX: `src/features/referrals/ReferralsPage.tsx` + `components/FriendsCard.tsx`, `CardText.tsx`, `ReferralHistory.tsx`.
- SCSS chain: `src/styles/base.scss` -> `src/features/referrals/ReferralsPage.scss` + `src/features/referrals/components/FriendsCard.scss` + `CardText.scss` + `ReferralHistory.scss` + `src/shared/ui/RetroBigButton/RetroBigButton.scss`.

## Market
- JSX/TSX: `src/features/market/MarketPage.tsx` + `components/MarketHeader.tsx`, `MarketControls.tsx`, `MarketItemCard.tsx`, `CreateOrderModal.tsx`.
- SCSS chain: `src/styles/base.scss` -> `src/features/market/MarketPage.scss` -> `MarketHeader.scss`, `MarketControls.scss`, `MarketItemCard.scss`, `CreateOrderModal.scss`, `src/shared/ui/FrameCardMarket/FrameCardMarket.scss`, `src/shared/ui/RetroBigButton/RetroBigButton.scss`.

## Profile + Settings
- JSX/TSX: `src/features/profile/ProfileSettingsPage.tsx` + `components/HistorySection.tsx`, `NotificationCard.tsx`, `LanguageCard.tsx`, `Switch.tsx`.
- SCSS chain: `src/styles/base.scss` -> `src/features/profile/ProfileSettingsPage.scss` + `HistorySection.scss` + `NotificationCard.scss` + `LanguageCard.scss` + `Switch.scss`.

## Finances
- JSX/TSX: `src/features/finances/FinancesPage.tsx` + `components/FinanceTabs.tsx`, `DepositPanel.tsx`, `WithdrawPanel.tsx`, `GlassCard.tsx`.
- SCSS chain: `src/styles/base.scss` -> `src/features/finances/FinancesPage.scss` + `FinanceTabs.scss` + `DepositPanel.scss` + `WithdrawPanel.scss` + `GlassCard.scss` + `src/shared/ui/RetroBigButton/RetroBigButton.scss`.

## Global/shared
- Global shared SCSS: `src/styles/base.scss`, `src/styles/fonts.scss`, `src/styles/utilities.scss`.
- App shell SCSS: `src/components/TopBar/top-bar.scss`, `src/components/Navigation/Navigation.scss`, `src/components/DotsBlock/DotsBlock.scss`, `src/shared/ui/CutCornerButton/CutCornerButton.scss`.
