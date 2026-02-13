# Deliverable (HTML/SCSS/JS)

Проект переведён в статическую структуру `deliverable/` без изменения визуального стиля:
- сохранены исходные className;
- использованы исходные SCSS из React-проекта;
- перенесены UI-структуры и поведение из TSX в HTML/JS.

## Структура
- `index.html`
- `pages/*.html`
- `scss/**`
- `js/**`
- `reports/**`
- `main.css` (собранный CSS из `scss/main.scss`)

## Сборка CSS
```bash
npx sass deliverable/scss/main.scss deliverable/main.css --no-source-map
```

## Запуск
```bash
python3 -m http.server 4173 --directory .
```
Откройте `http://localhost:4173/deliverable/pages/market.html`.
