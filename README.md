# invoicebox-ui

Библиотека компонентов Invoicebox.

[Cторибук](https://ui.invoicebox.ru/) с документацией и примерами.

# Установка

```bash
npm i @invoicebox/ui
```

или

```bash
yarn add @invoicebox/ui
```

# Пример использования

```ts
import React, { FC } from 'react';
import { Arrow } from '@invoicebox/ui';

export const SomeComponent: FC = () => {
    return <Arrow isOpen={false} />;
};
```

# Цвета и тема

Палитра повторяет переменные Figma (IUI Web): `colorPrimitives` → `colorAlias` → mapped-токены назначения
(`text`, `icons`, `surface`, `border` и токены для страниц документации: `badge`, `codePanel`, `syntax`, `method`).
В компонентах использовать mapped-токены. `lightPalette` и `darkPalette` — одна структура (`TColorPalette`),
текст в обеих проходит WCAG AA, это проверяет `src/theme/palette.test.ts`.

```tsx
import { ThemeProvider } from 'styled-components';
import { ThemeModeProvider, ThemeSwitcher, useThemeMode, lightPalette, darkPalette } from '@invoicebox/ui';

const Themed = ({ children }) => {
    const { dark } = useThemeMode();
    return <ThemeProvider theme={{ palette: dark ? darkPalette : lightPalette }}>{children}</ThemeProvider>;
};

export const App = () => (
    <ThemeModeProvider>
        <Themed>
            <ThemeSwitcher />
        </Themed>
    </ThemeModeProvider>
);
```

`ThemeModeProvider` хранит выбор (системная / светлая / тёмная) в `localStorage` и ставит `data-theme` на `<html>`.
Чтобы тёмная тема не мигала белым при загрузке, выполните до отрисовки скрипт из `getThemeModeInitScript()`:
встроенным `<script>` в `<head>` или отдельным файлом, если CSP не пускает инлайн-скрипты. Приложение, которому
тёмная тема не нужна, берёт `lightPalette` и провайдер не подключает.

# Реалтайм

Сигналы инвалидации по веб-сокету (Centrifugo) поверх существующих опросов — отдельная точка входа, основной импорт пакета её не тянет. Нужен `centrifuge` 5.x в зависимостях приложения: он загружается отдельным чанком при первом запуске.

```ts
import { bindPollerToRealtime, startRealtime, stopRealtime, toRealtimeUrl } from '@invoicebox/ui/realtime';

// после входа; контур — значение поля `c` в сигналах этого приложения
startRealtime({ contour: 'app', url: toRealtimeUrl('/api') });

// опрос перечитывает данные по сигналу, а при живом сокете опрашивает реже
const unbind = bindPollerToRealtime(poller, { signals: ['entity.changed'] });

// при выходе
stopRealtime();
```

Подделки клиента и источника сигналов для тестов приложения — `@invoicebox/ui/realtime/testing`.
