# Mapping

- Полный перенос структуры React-экранов:
  - `src/features/mining/MiningPage.tsx` + `components/*` → `deliverable/pages/mining.html`
  - `src/features/referrals/ReferralsPage.tsx` + `components/*` → `deliverable/pages/referrals.html`
  - `src/features/market/MarketPage.tsx` + `components/*` → `deliverable/pages/market.html`
  - `src/features/finances/FinancesPage.tsx` + `components/*` → `deliverable/pages/finances.html`
  - `src/features/profile/ProfileSettingsPage.tsx` + `components/*` → `deliverable/pages/profile-settings.html`

- Общие React-компоненты:
  - `src/components/TopBar/TopBar.tsx` → topBar на каждой странице.
  - `src/components/Navigation/Navigation.tsx` → нижняя навигация (рендер через `deliverable/js/ui.js`).
  - `src/components/DotsBlock/DotsBlock.tsx` → фоновые блоки точек.
  - `src/shared/ui/*` → сохранённые className и DOM-структуры в HTML-шаблонах/рендеринге.

- Поведение TSX перенесено в JS:
  - Market logic (`tab/sort/order/modal`) → `deliverable/js/market.js`
  - Finances logic (`deposit/withdraw/copy/validation`) → `deliverable/js/finances.js`
  - Profile settings (`language/switch`) → `deliverable/js/settings.js` + `deliverable/js/ui.js`
