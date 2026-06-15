# CLAUDE.md

Гайд для AI-агентов и разработчиков по проекту `@invoicebox/ui`.
Полный аудит — в `audit/` (см. [audit/README.md](audit/README.md)). Трекер правок — [CHECKLIST.md](CHECKLIST.md).

## Что это

**Публикуемая в npm библиотека React-компонентов** (UI-kit) Invoicebox — НЕ приложение.
Нет роутинга, стора, SSR, страниц, пользовательских сценариев. Потребители — внешние/
внутренние приложения Invoicebox, импортирующие компоненты. Витрина — Storybook,
публикуется на GitHub Pages (`ui.invoicebox.ru`).

- Пакет: `@invoicebox/ui`, лицензия Apache 2.0.
- Репозиторий: `InvoiceBox/invoicebox-ui` (GitHub). Дефолтная ветка: `develop`, релизная: `main`.

## Стек

| Слой | Технология | Версия |
|------|-----------|--------|
| UI | React (peer) | ^18.2.0 |
| Стили | styled-components (peer) | ^6.1.8 |
| Язык | TypeScript | 4.9.5 |
| Сборка | Babel CLI (транспиляция, без бандлинга) → `dist` (CJS) | 7.x |
| Типы | `tsc --emitDeclarationOnly` | — |
| Витрина | Storybook (react-webpack5) | ^7.6.13 |
| Тесты | Jest | ^29.7.0 |
| Линт | ESLint 8 + @typescript-eslint 5 + Prettier 3 | — |
| node (engines) | `>=16` (фактически нужен 18+ для Storybook 7) | — |

## Структура

```
src/
  index.ts        — публичный API (единый barrel-экспорт)
  components/
    common/       — презентационные (Skeleton, Typography, Drawer, Toast, QRCode,
                    Calendar, Dropdown, Flag, AppCardLink …)
    form/         — поля ввода (TextInput, Select, PhoneInput, DateInput, DateTimeInput,
                    CurrencyInput, Autocomplete, CodeInput, CountrySelect …)
    _helpers/     — вспомогательное для stories
  hooks/          — useOutsideClick, useInputFocus, useUnupdatableHandler,
                    useLoadingSubmit, useMedia, useModal
  palette/        — темизация (PaletteProvider, useComponentPalette)
  validate/       — валидаторы РФ/СНГ (БИК, р/с, кор/с, ОГРН, КПП, ИНН, website)
  breakpoints/    — точки адаптива
  utils/          — transformColorByHsl
dist/             — артефакт сборки (закоммичен; перезаписывается release.sh)
docs/             — собранный Storybook (закоммичен; ⚠️ release.sh делает rm -rf docs)
audit/            — документация аудита (00–10) + этот трекер не трогает
```

~38 компонентов, 270 .ts/.tsx, 78 stories. God-компонентов нет (макс ~341 LOC: PhoneInput).

## Команды

| Команда | Действие |
|---------|----------|
| `npm run storybook` | дев-витрина на :6006 |
| `npm test` (`jest`) | тесты |
| `npm run release` (`./release.sh`) | сборка dist+Storybook, бамп версии, merge develop→main, `npm publish` |

## Состояние / темизация

Глобального стора нет. Состояние локальное (`useState`/`useEffect`). Тема — через React
Context: `PaletteProvider` → `useComponentPalette`. Потребитель ОБЯЗАН обернуть дерево в
`PaletteProvider`.

## Переменные окружения / секреты

Не используются. Секретов в коде нет. `.npmrc` — публичный реестр npm.

## Ловушки (важно перед правками)

1. **`release.sh` делает `rm -rf dist docs`** — не клади ничего ценное в `docs/`
   (это вывод сборки Storybook). Документация аудита — в `audit/`, трекер — `CHECKLIST.md` (корень).
2. **`dist/` закоммичен и в `.gitignore`** одновременно; jest без конфига гоняет тесты
   дважды (из `src` и из `dist`).
3. **Релиз публикует в npm и пушит `main` с локальной машины**, без CI-гейта (нет тестов/
   линта/audit перед публикацией).
4. **CJS-only сборка** без `exports`/`sideEffects` — у потребителя нет tree-shaking.
5. **`motion` ^12 в dependencies не используется** (мёртвая зависимость).
6. **83 уязвимости в deps** (3 critical) — почти все из dev-цепочки CRA/Storybook.

## Правила работы

- **Не менять бизнес-логику и публичный API без согласования** — это предмет отдельного
  продуктового решения. Изменения разметки/ролей (a11y) могут задеть стили потребителей.
- Менять публичный API → синхронно править `src/index.ts` и stories.
- Документацию аудита (`audit/00–10`) задним числом не редактируем (только фактические
  ошибки). Статусы работ ведём в `CHECKLIST.md` в том же изменении, что и код.
- Стиль: Prettier (4 пробела, singleQuote, printWidth 110). Линт без новых `any`/`eslint-disable`.

## Контекст аудита

Аудит выполнен 2026-06-15 (документы `audit/00-PROJECT-MAP.md` … `audit/10-REFACTOR-PLAN.md`).
План рефакторинга — волнами (0: сетка безопасности → 1: высокий риск → 2: сборка/типы →
3: доступность). Топ-риски: нет CI и тестов критич. логики, 83 CVE, почти нулевая
доступность, непровалидированный `href` в `AppCardLink`, CJS без tree-shaking.
