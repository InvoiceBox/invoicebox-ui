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
