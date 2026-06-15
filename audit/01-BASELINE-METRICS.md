# Базовая линия (baseline) — 2026-06-15

Зафиксировано до изменений. Служит точкой сравнения после каждой волны рефакторинга.

## Замер: окружение
- node (локально): v16.20.2
- TypeScript: 4.9.5
- Ветка: `projectAnalytics`, базовая `develop`.

## Тесты
| Метрика | Значение |
|---------|----------|
| Тест-файлов | 1 (`src/validate/utils/websiteValidate.test.ts`) |
| Тестов (assertions suites) | 4 теста, проходят |
| Test Suites при `jest` | 2 (дубль из `dist/` — нет `testPathIgnorePatterns`) |
| Coverage | не настроен (нет `--coverage`, нет порогов) |
| CI | отсутствует (`.github/workflows` нет) |

## Зависимости / уязвимости (`npm audit`)
| Severity | Кол-во |
|----------|--------|
| critical | 3 |
| high | 31 |
| moderate | 37 |
| low | 12 |
| **total** | **83** |

Деревья: prod 119, dev 2146, peer 657 (итого 2267 пакетов).
**Критические:** `form-data` (unsafe random boundary), `handlebars` (JS injection),
`shell-quote` (escape newlines). Подавляющее большинство high/critical — в dev-цепочке
Storybook 7 / `react-scripts` / `@svgr` / `workbox` (транзитивно). Подробно — `03-security.md` / `07-platform.md`.

## Размер артефакта
| Метрика | Значение |
|---------|----------|
| `dist/` (транспилированный, без минификации) | **2.4 MB** |
| Формат | CommonJS, без бандлинга/tree-shaking/минификации |
| `package-lock.json` | 2.39 MB |
| Мёртвая prod-зависимость | `motion` ^12.38.0 (0 использований в `src`) |

> Для библиотеки точный «размер бандла у потребителя» зависит от его сборщика. Зафиксированы:
> размер `dist`, факт CJS-only и отсутствие `sideEffects`. После рефакторинга добавить
> измерение per-component через `size-limit`/`esbuild --metafile` (см. `04-performance.md`).

## Код-метрики (статически)
| Метрика | Значение |
|---------|----------|
| Файлов .ts/.tsx (src) | 270 |
| Компонентов | ~38 |
| Stories | 78 |
| Крупнейший файл | 341 LOC (PhoneInput) |
| `any` / небезоп. assertions (`as any`,`as unknown`) | 11 вхождений |
| `@ts-ignore` / `@ts-expect-error` | 0 ✅ |
| `eslint-disable` | 22 |
| `console.*` | 3 |
| `try/catch` блоков | 0 |
| ErrorBoundary | 0 |
| `aria-*` атрибутов | 0 |
| `role=` | 0 |
| `onKeyDown/Up/Press` | 2 |
| `prefers-reduced-motion` | 0 |
| `dangerouslySetInnerHTML` | 0 ✅ |
| Секреты в коде | 0 ✅ |

## Сводный «светофор»
| Направление | Оценка |
|-------------|--------|
| Отказоустойчивость | 🔴 нет обработки ошибок вовсе |
| Безопасность (код) | 🟡 точечные (href, regex); секретов нет |
| Безопасность (deps) | 🔴 83 уязвимости, 3 critical |
| Производительность | 🟡 CJS-only, мёртвый `motion`, нет tree-shaking |
| Доступность | 🔴 практически отсутствует |
| Архитектура/типы | 🟢 в целом, точечные `any`/disable |
| Платформа | 🟡 устаревшие TS/ESLint/node-engine, ручной релиз |
| Тесты | 🔴 1 файл, нет CI, нет coverage |
| Наблюдаемость | 🟡 нет единой стратегии логирования/ошибок |
