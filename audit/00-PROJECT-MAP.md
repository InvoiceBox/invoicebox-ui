# Карта проекта — @invoicebox/ui

> Аудит от 2026-06-15. Базовая ветка: `develop`. Версия: `0.1.0-alpha.292`.
> Документ описывает фактическое состояние «как есть» перед рефакторингом. Код не менялся.

## 1. Что это

`@invoicebox/ui` — **публикуемая в npm библиотека React-компонентов** (UI-kit) Invoicebox.
Это **не приложение**: здесь нет роутинга, серверного рендеринга, глобального стора,
страниц и пользовательских сценариев в классическом смысле. Поэтому ряд пунктов
исходного ТЗ переинтерпретирован под специфику библиотеки (см. раздел «Применимость»).

- Потребитель: внешние/внутренние приложения Invoicebox, импортирующие компоненты.
- Витрина/документация: Storybook, публикуется на GitHub Pages (`ui.invoicebox.ru`).
- Лицензия: Apache 2.0.

## 2. Стек

| Слой | Технология | Версия |
|------|-----------|--------|
| UI | React (peer) | ^18.2.0 |
| Стили | styled-components (peer) | ^6.1.8 |
| Язык | TypeScript | 4.9.5 |
| Сборка библиотеки | Babel CLI (транспиляция, без бандлинга) | 7.x |
| Типы | `tsc --emitDeclarationOnly` | — |
| Витрина | Storybook (react-webpack5) | ^7.6.13 |
| Тесты | Jest | ^29.7.0 |
| Линт | ESLint 8 + @typescript-eslint 5 + Prettier 3 | — |
| Runtime (engines) | node `>=16.0.0` (локально 16.20.2) | — |

## 3. Структура

```
src/
  index.ts            — публичный API (единая точка экспорта)
  components/
    common/           — презентационные компоненты (Skeleton, Typography, Drawer,
                        Toast, QRCode, Calendar, Dropdown, Flag, AppCardLink …)
    form/             — поля ввода (TextInput, Select, PhoneInput, DateInput,
                        DateTimeInput, CurrencyInput, Autocomplete, CodeInput …)
    _helpers/         — вспомогательные компоненты для stories
    constants.ts, selectOptions.ts
  hooks/              — useOutsideClick, useInputFocus, useUnupdatableHandler,
                        useLoadingSubmit, useMedia, useModal
  palette/            — система тем (PaletteProvider, useComponentPalette)
  validate/           — валидаторы РФ/СНГ (БИК, р/с, ОГРН, КПП, ИНН, website)
  breakpoints/        — точки адаптива
  utils/              — transformColorByHsl
dist/                 — артефакт сборки (закоммичен; перезаписывается release.sh)
docs/                 — собранный Storybook (закоммичен; ВНИМАНИЕ: release.sh делает rm -rf docs)
```

- ~38 компонентов, 270 .ts/.tsx файлов, 78 stories, 1 тест-файл.
- Самые крупные файлы: `form/PhoneInput` (341), `form/Select` (330),
  `form/DateTimeInput` (300), `form/Autocomplete` (269). God-компонентов нет.

## 4. Публичный API (поверхность)

Единый barrel-экспорт из `src/index.ts`: ~40 компонентов + типы, 9 хуков,
`PaletteProvider`/палитра, `breakpoints`, `Validate`. Точечных entry-points нет —
весь пакет тянется одним `main: ./dist/index.js` (см. перформанс: нет tree-shaking
по умолчанию у потребителя через CJS).

## 5. Состояние (state)

Глобального стора нет. Состояние — локальное (`useState`/`useEffect`) внутри
компонентов. Тема прокидывается через React Context (`PaletteProvider` →
`useComponentPalette`). Это нормально для UI-kit.

## 6. Сборка / тесты / релиз

| Команда | Действие |
|---------|----------|
| `npm run storybook` | дев-витрина на :6006 |
| `npm test` (`jest`) | прогон тестов |
| `npm run release` (`./release.sh`) | сборка dist + Storybook, бамп версии, merge в `main`, `npm publish` |

`release.sh` (ловушки см. ниже): транспиляция Babel → `dist`, типы → `tsc`,
Storybook → `docs`, CNAME, коммит, бамп `prerelease --preid=alpha`, merge develop→main,
`npm publish`.

## 7. Переменные окружения

Не используются. `.npmrc` фиксирует публичный реестр npm. Секретов в коде нет
(скан по api_key/secret/token/password — чисто; единственное совпадение —
`autoComplete="new-password"`, легитимно).

## 8. Известные ловушки (traps)

1. **`release.sh` делает `rm -rf dist docs`** — любая ручная документация в `docs/`
   будет уничтожена при релизе. Поэтому аудит лежит в `audit/`. ⚠️
2. **`dist/` закоммичен** и при этом в `.gitignore` — рассинхрон; jest без
   `testPathIgnorePatterns` гоняет тесты дважды (из `src` и из `dist`).
3. **Релиз пушит в `main` и публикует в npm из локальной машины** — нет CI-гейта,
   нет проверки тестов/линта перед публикацией. Высокий риск выката битого пакета.
4. **`engines.node >=16`**, но Storybook 7 и часть инструментов требуют node 18+.
   Заявленная совместимость недостоверна.
5. **CJS-only сборка** (`modules: commonjs`) без `sideEffects`/ESM — потребитель не
   получает tree-shaking; тянет весь пакет.
6. **Тяжёлая `motion` (framer-motion-преемник) в dependencies не используется** —
   мёртвая зависимость в проде.

## 9. Направления аудита для UI-библиотеки

ТЗ изначально написано под веб-приложение. Поскольку это **публикуемая библиотека
компонентов**, направления адаптированы под её специфику: вместо «страничных» метрик
(маршруты, стор, Lighthouse, OAuth/CSRF, серверные редиректы) — то, что реально влияет
на потребителей пакета и на качество самого UI-kit.

| Направление аудита | Что это значит для библиотеки | Документ |
|--------------------|-------------------------------|----------|
| Безопасность | непровалидированный `href`/`target` (`AppCardLink`), regex-валидаторы (`Validate.website`, ReDoS), CVE в зависимостях, отсутствие секретов | `03` |
| Отказоустойчивость | компонент не должен ронять дерево потребителя: ErrorBoundary, guard-парсинг, безопасный сброс состояний | `02` |
| Размер и поставка | вес `dist`, CJS-only без tree-shaking, `exports`-map, мёртвые зависимости, бюджеты `size-limit` | `04` |
| Визуальная стабильность | CLS и мерцание на стороне компонентов (Skeleton/Drawer), `prefers-reduced-motion` | `04` |
| Доступность (WCAG AA) | клавиатура/ARIA/фокус-трап во ВСЕХ инпутах и модалках — тиражируется во все приложения-потребители | `05` |
| Качество публичного API | типобезопасность экспортов (без `any`), консистентность пропов, отсутствие god-компонентов | `06` |
| Платформа и сборка | актуальность TS/ESLint/Storybook, версия node-engine, воспроизводимость и безопасность релиза/публикации в npm | `07` |
| Тесты и CI | покрытие критичной логики (валидаторы реквизитов/денег), компонентные тесты, гейт в CI | `08` |
| Наблюдаемость | управляемое логирование, `onError`-хуки для потребителя, CHANGELOG/версия в рантайме | `09` |

> Прямые замеры Lighthouse/Web Vitals/SSR к npm-пакету неприменимы (нет страницы) —
> их роль выполняют размер бандла, `size-limit` и a11y-проверки на Storybook.

## 10. Документы аудита

- `01-BASELINE-METRICS.md` — стартовые показатели (база сравнения)
- `02-resilience.md` — отказоустойчивость / обработка ошибок
- `03-security.md` — безопасность
- `04-performance.md` — скорость и отзывчивость
- `05-accessibility.md` — доступность WCAG 2.1 AA
- `06-architecture-lint.md` — архитектура и линтер
- `07-platform.md` — платформа (версии, сборка, CVE, кэш)
- `08-tests.md` — тесты и CI
- `09-observability.md` — наблюдаемость
- `10-REFACTOR-PLAN.md` — план рефакторинга волнами
