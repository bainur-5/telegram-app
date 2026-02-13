# Static Telegram App (HTML + SCSS + Vanilla JS)

Миграция выполнена с React/TypeScript на статический фронтенд:
- HTML: `index.html`
- JS-модули: `js/**`
- SCSS: `scss/main.scss` + исходные SCSS в `src/**`

## Запуск
```bash
npm install
npm run dev
```

## Сборка
```bash
npm run build
```

Отдельная сборка SCSS в статический CSS:
```bash
npm run build:scss
```
(получится `public/styles.css`)

## Роутинг
Используется SPA-роутинг на `hash` (без React Router):
- `#market`
- `#finances`
- `#mining`
- `#referrals`
- `#profile`

Роутер: `js/router.js`.

## Логика компонентов
- Базовые UI-шаблоны: `js/ui/components.js`
- Состояние приложения (store + subscribe): `js/store.js`
- Страницы:
  - `js/pages/market.js`
  - `js/pages/finances.js`
  - `js/pages/mining.js`
  - `js/pages/referrals.js`
  - `js/pages/profile.js`
- Точка входа: `js/main.js`

## Данные
Моки маркета оставлены в `js/pages/market.js`.
`js/config.js` добавлен под endpoints/API-конфиг.
