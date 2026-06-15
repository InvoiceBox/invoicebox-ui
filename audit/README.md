# Аудит @invoicebox/ui

Полный аудит библиотеки React-компонентов, выполнен 2026-06-15 (ветка `projectAnalytics`),
**до каких-либо изменений кода**. Документация ведётся в `audit/` (не в `docs/` — её
затирает `release.sh: rm -rf docs`).

## Документы
| # | Файл | Содержание |
|---|------|-----------|
| 00 | [00-PROJECT-MAP.md](00-PROJECT-MAP.md) | Карта: стек, структура, API, сборка, ловушки |
| 01 | [01-BASELINE-METRICS.md](01-BASELINE-METRICS.md) | Базовая линия метрик |
| 02 | [02-resilience.md](02-resilience.md) | Отказоустойчивость |
| 03 | [03-security.md](03-security.md) | Безопасность (XSS, redirect, CVE) |
| 04 | [04-performance.md](04-performance.md) | Скорость, бандл, CLS |
| 05 | [05-accessibility.md](05-accessibility.md) | Доступность WCAG 2.1 AA |
| 06 | [06-architecture-lint.md](06-architecture-lint.md) | Архитектура и линтер |
| 07 | [07-platform.md](07-platform.md) | Платформа, версии, релиз |
| 08 | [08-tests.md](08-tests.md) | Тесты и CI |
| 09 | [09-observability.md](09-observability.md) | Наблюдаемость |
| 10 | [10-REFACTOR-PLAN.md](10-REFACTOR-PLAN.md) | План рефакторинга волнами |

## Ключевой вывод
Это **npm-библиотека компонентов** (не приложение). Направления аудита адаптированы под
специфику UI-kit (см. 00, раздел «Направления аудита для UI-библиотеки»): вместо
«страничных» метрик — вес бандла, поставка, типобезопасность API и доступность.

Топ-риски: отсутствие CI и тестов критич. логики, 83 CVE в зависимостях (3 critical,
почти все — dev-цепочка CRA/Storybook), близкое к нулю состояние доступности,
непровалидированный `href` в `AppCardLink`, CJS-only сборка без tree-shaking, мёртвая
зависимость `motion`. God-компонентов нет, секретов нет, `dangerouslySetInnerHTML` нет.

**Код не менялся. Старт работ — после согласования плана (см. документ 10).**
