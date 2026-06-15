# Чеклист правок по аудиту — единый трекер статусов

> ⚠️ **Это живой документ — единственный источник правды о статусах работ по аудиту.**
> Правило для всех (людей и AI-агентов): реализовал пункт отсюда или сделал смежную правку —
> **обнови статус в этом файле в том же PR**. Описания и обоснования пунктов не дублируй:
> они в документах `audit/00`–`audit/10`, здесь только статус и ссылки.
> Документы аудита — снимок на 15.06.2026, задним числом не редактируем
> (исключение — фактические ошибки).

Статусы: ✅ влито в develop · 🔄 в ревью (PR открыт) · ⬜ не начато · ⏸ заблокировано (нужен ответ/доступ) · ❓ требует продуктового решения

Последнее обновление: 15.06.2026.

## Требует согласования (блокирует части плана)

| ID  | Что нужно | Где описано | Статус |
| --- | --------- | ----------- | ------ |
| Q.1 | Storybook 7 → 8/9 (Vite): миграция dev-процесса команды | [10 Волна 1](audit/10-REFACTOR-PLAN.md), [07 PL-2](audit/07-platform.md) | ❓ нужно решение |
| Q.2 | Смена сборщика (`tsup`/`rollup`) + `exports`-map с подпутями: меняет способ импорта у потребителей (barrel сохраняется) | [10 Волна 2](audit/10-REFACTOR-PLAN.md), [04 P-1](audit/04-performance.md) | ❓ нужно решение |
| Q.3 | A11y-правки разметки/ролей (Select/Drawer и др.) — могут влиять на стили/селекторы потребителей; приоритет компонентов | [10 Волна 3](audit/10-REFACTOR-PLAN.md), [05](audit/05-accessibility.md) | ❓ продуктовое решение |
| Q.4 | Удаление `motion` из dependencies — подтвердить, что не планируется к использованию | [04 P-2](audit/04-performance.md) | ❓ нужно подтверждение |
| Q.5 | Релиз: перейти на CI-публикацию (OIDC/provenance) вместо локальной с машины разработчика; `main` под branch protection | [07 PL-5](audit/07-platform.md) | ❓ нужно решение DevOps |

## Этап 0 (Волна 0). Сетка безопасности — риски и измеримость

| ID  | Задача | Где описано | Статус |
| --- | ------ | ----------- | ------ |
| 0.1 | CI (GitHub Actions): на PR — lint + typecheck + test + build + `npm audit` (с порогом) | [08 T-1](audit/08-tests.md), [07 PL-5](audit/07-platform.md) | ⬜ |
| 0.2 | Jest-конфиг: `testPathIgnorePatterns: /dist/`, `coverage`, `coverageThreshold`, jsdom | [08 T-4](audit/08-tests.md) | ⬜ |
| 0.3 | `size-limit`: бюджеты на ключевые экспорты, зафиксировать baseline | [04 P-3](audit/04-performance.md), [01](audit/01-BASELINE-METRICS.md) | ⬜ |
| 0.4 | Lint-гейты (warn): `max-lines`, `eslint-plugin-jsx-a11y`, `@storybook/addon-a11y` | [06 AR-2](audit/06-architecture-lint.md), [05](audit/05-accessibility.md) | ⬜ |
| 0.5 | Удалить мёртвый `motion` (Q.4); заменить shim `object.entries/fromentries` нативными; ревизия `prop-types` | [04 P-2](audit/04-performance.md), [06 AR-4, AR-6](audit/06-architecture-lint.md) | ⬜ |

## Этап 1 (Волна 1). Высокий риск: безопасность, платформа, критич. тесты

| ID  | Задача | Где описано | Статус |
| --- | ------ | ----------- | ------ |
| 1.1 | `AppCardLink`: валидация схемы URL (`isSafeUrl`, только http/https) + `rel="noopener noreferrer"` на `target="_blank"` | [03 S-1](audit/03-security.md) | ⬜ |
| 1.2 | `Validate.website`: правый якорь `$`, ReDoS-чек, JSDoc «формат, не санитизация для href» | [03 S-2](audit/03-security.md) | ⬜ |
| 1.3 | Storybook 7 → 8/9 (Vite), выпил `preset-create-react-app`/`react-scripts` → падение `npm audit` (Q.1) | [07 PL-2](audit/07-platform.md), [03 S-3](audit/03-security.md) | ⏸ Q.1 |
| 1.4 | `engines.node >=18` (лучше 20), `.nvmrc`, CI-матрица | [07 PL-3](audit/07-platform.md) | ⬜ |
| 1.5 | Unit-тесты на весь `validate/` (БИК/р-с/кор-с/ОГРН/КПП/ИНН, контрольные суммы, edge/NaN) + phone/currency/date-логика | [08 T-2](audit/08-tests.md) | ⬜ |
| 1.6 | Guard-парсинг чисел в валидаторах (`Number.isFinite`, ранний `createError`) | [02 R-2](audit/02-resilience.md) | ⬜ |
| 1.7 | `useLoadingSubmit`: `try/finally`, гарантированный сброс `isLoading` при reject | [02 R-4](audit/02-resilience.md) | ⬜ |

## Этап 2 (Волна 2). Сборка, типы, наблюдаемость

| ID  | Задача | Где описано | Статус |
| --- | ------ | ----------- | ------ |
| 2.1 | Переход на `tsup`/`rollup`: ESM+CJS, `exports`-map (подпути), `sideEffects`, минификация; убрать `dist` из git, собирать в CI (Q.2) | [04 P-1](audit/04-performance.md), [07 PL-4](audit/07-platform.md) | ⏸ Q.2 |
| 2.2 | Апгрейд TS 5 / ESLint 9 (flat config) / typescript-eslint 8 | [07 PL-1](audit/07-platform.md) | ⬜ |
| 2.3 | Убрать `any`/unsafe assertions (11 шт), включить `no-explicit-any`/`no-unsafe-*` | [06 AR-1](audit/06-architecture-lint.md) | ⬜ |
| 2.4 | Ревизия 22 `eslint-disable` (оставить только обоснованные) | [06 AR-4](audit/06-architecture-lint.md) | ⬜ |
| 2.5 | Единый dev-only логгер с префиксом `[invoicebox/ui]`, убрать прямые `console.*` | [09 O-1](audit/09-observability.md) | ⬜ |
| 2.6 | Опциональный `onError`-проп/контекст на составных компонентах | [09 O-2](audit/09-observability.md) | ⬜ |
| 2.7 | Компонентные тесты: RTL + `jest-dom` + `user-event`, `jest-axe`, Storybook play-функции (`@storybook/test`) | [08 T-3](audit/08-tests.md) | ⬜ |
| 2.8 | Автогенерация CHANGELOG (changesets), экспорт `version` | [09 O-3, O-4](audit/09-observability.md) | ⬜ |

## Этап 3 (Волна 3). Доступность (покомпонентно), качество, резилентность

| ID  | Задача | Где описано | Статус |
| --- | ------ | ----------- | ------ |
| 3.1 | Клавиатура + ARIA для Select/Dropdown/Autocomplete (`combobox`/`listbox`/`option`, стрелки/Enter/Esc, `aria-activedescendant`); рассмотреть Radix/React Aria (Q.3) | [05 A-1](audit/05-accessibility.md) | ⏸ Q.3 |
| 3.2 | Toggle: `role="switch"`/нативный checkbox + `aria-checked`, Space/Enter | [05 A-1](audit/05-accessibility.md) | ⏸ Q.3 |
| 3.3 | Поля: связь label↔control (`htmlFor`/`id`), `aria-invalid`, ошибка `role="alert"` + `aria-describedby` | [05 A-2](audit/05-accessibility.md) | ⏸ Q.3 |
| 3.4 | Drawer: фокус-трап, возврат фокуса, `role="dialog"`/`aria-modal`/`aria-labelledby`, Esc-закрытие | [05 A-3](audit/05-accessibility.md) | ⏸ Q.3 |
| 3.5 | Контраст палитры (≥4.5:1) и тач-таргеты (≈44×44px) | [05 A-4](audit/05-accessibility.md) | ⬜ |
| 3.6 | Текстовые альтернативы SVG (значимым `aria-label`/`<title>`, декоративным `aria-hidden`); имя ссылок `AppCardLink` | [05 A-5](audit/05-accessibility.md) | ⬜ |
| 3.7 | `prefers-reduced-motion` (отключение анимаций), `rem`/reflow при zoom 200% | [05 A-6](audit/05-accessibility.md), [04 P-6](audit/04-performance.md) | ⬜ |
| 3.8 | Skeleton с резервированием размеров (CLS≈0); anti-flicker единый загрузчик (delay+min-display) | [04 P-5](audit/04-performance.md) | ⬜ |
| 3.9 | Опциональный экспортируемый `<ErrorBoundary>` + обёртка тяжёлых составных компонентов | [02 R-1](audit/02-resilience.md) | ⬜ |
| 3.10 | Fallback дефолтной палитры при отсутствии `PaletteProvider` + dev-`warn` | [02 R-5](audit/02-resilience.md) | ⬜ |
| 3.11 | Аудит очистки эффектов (таймеры/слушатели), включить `react-hooks/exhaustive-deps` | [02 R-3](audit/02-resilience.md) | ⬜ |
| 3.12 | Вынести статические мапы/литералы из рендера (напр. `appCardMap`), точечный `useMemo`/`useCallback` | [06 AR-3](audit/06-architecture-lint.md) | ⬜ |
| 3.13 | Стайлгайд именования пропсов/экспортов (CONTRIBUTING) | [06 AR-5](audit/06-architecture-lint.md) | ⬜ |
| 3.14 | Изоляция тяжёлых компонентов (Calendar/QRCode/масок) через подпути-exports (после 2.1) | [04 P-4](audit/04-performance.md) | ⬜ |

## Прочее (низкий приоритет / фон)

| ID  | Задача | Где описано | Статус |
| --- | ------ | ----------- | ------ |
| 4.1 | CSP/защитные заголовки витрины Storybook (`preview-head.html` или хостинг) + гайд по CSP для потребителей в README | [03 S-4](audit/03-security.md) | ⬜ |
| 4.2 | Валидация/нормализация цвета на входе в `PaletteProvider` | [03 S-5](audit/03-security.md) | ⬜ |
| 4.3 | Визуальная регрессия по stories (Chromatic/Playwright-screenshots) в CI | [08 T-5](audit/08-tests.md) | ⬜ |
| 4.4 | CI-артефакты релиза: size-отчёт, coverage, `npm audit`, лог сборки | [09 O-5](audit/09-observability.md) | ⬜ |
| 4.5 | Кэш статики витрины (immutable для хешированных ассетов, `no-cache` для html — при своём хостинге) | [07 PL-6](audit/07-platform.md) | ⬜ |
