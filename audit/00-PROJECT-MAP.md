# Карта проекта

## Что это

`@invoicebox/ui` — опубликованная npm-библиотека React-компонентов (UI-кит), не приложение. Потребители устанавливают её, импортируют компоненты и рендерят их внутри своего приложения/роутера/стора. Проверено: ни одного `fetch`/`axios`/сетевого вызова во всём `src/`.

## Стек

| Слой | Выбор | Версия |
|---|---|---|
| UI-фреймворк | React (peer dep) | ^18.2.0 |
| Стилизация | styled-components (peer dep) | ^6.1.8 |
| Язык | TypeScript, `strict: true` | ^4.9.5 |
| Документация/dev-окружение | Storybook | ^7.6.13 |
| Test runner | Jest | ^29.7.0 |
| Сборка | Babel (двойная CJS + ESM) + `tsc` для `.d.ts` | Babel ^7.23.9 |
| Бандлер (только для Storybook) | webpack5 через `@storybook/react-webpack5` | — |

Runtime-зависимости (то, что реально попадает к потребителю): `@mona-health/react-input-mask`, `qrcode.react`, `react-calendar`, `react-currency-input-field`, `react-toastify`. Небольшая поверхность — 5 пакетов.

## Структура каталогов (`src/`, 284 TS/TSX файлов всего)

```
src/
  index.ts            — 77 export-выражений, это вся публичная поверхность API
  breakpoints/         — 1 файл, константы адаптивных брейкпоинтов
  palette/              — 9 файлов: цветовые токены, ThemeContext/Provider, хуки
  hooks/                — 6 общих хуков: useInputFocus, useLoadingSubmit, useMedia,
                          useModal, useOutsideClick, useUnupdatableHandler
  utils/                — 2 файла: hexToRgba, transformColorByHsl
  validate/             — логика валидации (ИНН/VAT-номера, сайты) + 1 тестовый файл
  components/
    form/               — 19 компонентов: Autocomplete, Checkbox, CodeInput, CountrySelect,
                          CurrencyInput, DateInput, DateTimeInput, InputLabel,
                          ModernPlaceholder, PhoneInput, PositiveIntegerInput, PureInput,
                          ResetButton, SearchInput, Select, TagsInput, TextInput, Toggle
    common/             — 22 компонента: AppCardLink, Arrow, BgCard, Calendar, Chip,
                          Divider, Drawer, Dropdown, EntityAutocompleteOptionsDrawer,
                          Flag, InvoiceboxLogo, InvoiceboxSpinner, PointsLoader, QRCode,
                          ReadOnlyLabelValueField, Scrollbar, SecondaryButton, Skeleton,
                          Toast, Tooltip, Typography, WarningIcon
```

79 из 284 файлов — это `*.stories.tsx` (Storybook). Только **1** файл — реальный тест (`src/validate/utils/websiteValidate.test.ts`).

## «Роуты» / состояние / пользовательские сценарии — N/A по замыслу

Нет роутера, нет глобального стора (Redux/Zustand/др.), нет пользовательских сценариев на уровне страниц — это библиотека компонентов. Аналог «пользовательских сценариев» здесь: *приложение-потребитель рендерит `<Select>`, `<DateTimeInput>`, `<Drawer>` и т.д., подключает своё состояние через props/колбэки.* Категории аудита, предполагающие наличие приложения (офлайн-баннеры, поллинг статусов, code splitting по роутам), напрямую не применимы — см. пометки N/A в каждом документе.

## Переменные окружения

Не найдены в `src/` (нет использования `process.env.*` в коде библиотеки). Единственная переменная окружения во всём репозитории — `VERSION` в `release.sh`, используется для установки версии при релизе — это вход для релизного скрипта, а не runtime-конфигурация.

## Команды сборки / тестов / линта

| Команда | Что делает |
|---|---|
| `npm test` | Запускает `jest` **вообще без конфига** — см. ловушку ниже |
| `npm run storybook` | `storybook dev -p 6006`, локальный dev-сервер витрины компонентов |
| `npm run release` | Запускает `release.sh` — собирает, публикует в npm, пушит в git (см. ниже) |
| — | **Нет скрипта `lint`.** `.eslintrc.json` существует и довольно строгий, но ничего в `package.json` его не вызывает. |
| — | **Нет скрипта `build`.** Двойная сборка CJS/ESM/`.d.ts` происходит только внутри `release.sh`; отдельно «просто собрать» без релиза нельзя. |
| — | **Нет скрипта `typecheck`.** `tsc --noEmit` в текущем виде не запускается (см. документ по платформе — `tsconfig.json` включает `emitDeclarationOnly`, что конфликтует с `--noEmit`). |

## Известные ловушки / неочевидные контракты

- **`release.sh` выполняет `rm -rf dist docs`** перед пересборкой. `docs/` — это **сборка Storybook**, а не документация — всё, что должно сохраняться (как этот аудит), НЕ должно лежать в `docs/`, отсюда `audit/`.
- **Нет CI.** `release.sh` — локальный bash-скрипт: собирает, коммитит `docs/` в git, поднимает версию, пушит теги, мёржит `develop` → `main` и выполняет `npm publish` — всё это с машины того, кто запустил скрипт, без единой автоматической проверки (нет запуска lint/test/typecheck перед публикацией).
- **У Jest вообще нет конфига** (в `package.json` нет ключа `"jest"`, нет файла `jest.config.*`). Стандартный поиск тестов Jest подхватывает любой `*.test.*` вне `node_modules`. Поскольку `dist/` оказывается в корне репозитория после локальной сборки, jest, запущенный при заполненном `dist/`, подхватывает тот же тест **ещё дважды** (`dist/…test.js` и `dist/esm/…test.js`) — подтверждено вживую: `npm test` показывает **3 test suites** для того, что на деле является 1 уникальным тестовым файлом. `dist/` в `.gitignore`, поэтому это касается только локальной разработки после сборки, но это реальная ловушка для того, кто отлаживает «почему мой тест выполнился 3 раза».
- **`dist/` корректно в `.gitignore` и НЕ закоммичен** (`git ls-files dist` → 0). **`docs/` (сборка Storybook) закоммичен** — 159 отслеживаемых файлов, публикуется на GitHub Pages через CNAME `ui.invoicebox.ru`, который `release.sh` туда записывает. Не путайте: `dist/` = npm-пакет (не отслеживается, в gitignore), `docs/` = публичный сайт Storybook (отслеживается).
- **`sideEffects: false`** в `package.json` + двойная сборка CJS/ESM (`babel.config.json` против `babel.config.esm.json`, разница только в `modules: "commonjs"` vs `modules: false`) — именно это обеспечивает tree-shaking для потребителей. Не ломайте этот контракт добавлением побочного эффекта верхнего уровня (например, глобальной инъекции CSS или синглтона) в любой файл — иначе у каждого потребителя tree-shaking молча перестаёт работать.
- **Ранее «мёртвая» зависимость `motion` была отмечена как проблема** — перепроверено: нигде в `src/` нет импорта `framer-motion`/`motion`. Сейчас её и в `package.json` нет, так что похоже, что эта ловушка уже устранена (либо в этом чекауте её никогда не было — дрейфа по этому пункту не обнаружено).
- **`engines.node` указан только как `>=16.0.0`** — нет `.nvmrc`, нет Dockerfile, версия Node на этапе сборки нигде не зафиксирована. Собирает и публикует пакет та версия Node, что случайно установлена на машине релизящего.
