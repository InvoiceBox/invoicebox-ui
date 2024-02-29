import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../components/common/Skeleton';
import { PaletteProvider } from './provider';
import Markdown from 'markdown-to-jsx';
import { FC, ReactNode } from 'react';
import { Typography } from '../components/common/Typography';

const Example: FC<{ children: ReactNode }> = ({ children }) => (
    <div style={{ width: 100, height: 40 }}>{children}</div>
);

const meta: Meta = {
    title: 'palette/Palette',
};

export default meta;

export const Docs: StoryObj = {
    render: () => (
        <Typography variant="bodyL">
            <Markdown>
                {`
# Система цветов

### Поведение по умолчанию

Можно использовать компоненты без определения цветов, тогда будут использованы цвета по умолчанию.

\`\`\`ts
<Skeleton />
\`\`\`
`}
            </Markdown>
            <Example>
                <Skeleton />
            </Example>
            <Markdown>
                {`
### Переопределение цветов на уровне вызова компонента

Можно переопределить цвета на уровне вызова компонента, для этого используйте сойство \`palette\`.

\`\`\`ts
<Skeleton palette={{ bg: '#c9c', flicker: '#5a5' }} />
\`\`\`
`}
            </Markdown>
            <Example>
                <Skeleton palette={{ bg: '#c9c', flicker: '#5a5' }} />
            </Example>
            <Markdown>
                {`
### Переопределение цветов конкретного компонента

Можно переопределить поведение по умолчанию конкретного компонента. Для этого используйте \`PaletteProvider\`
и его свойство соответствующее компоненту.

\`\`\`ts
<PaletteProvider skeleton={{ bg: '#39c', flicker: '#5cc' }}>
    <Skeleton />
</PaletteProvider>
\`\`\`
`}
            </Markdown>
            <Example>
                <PaletteProvider skeleton={{ bg: '#39c', flicker: '#5cc' }}>
                    <Skeleton />
                </PaletteProvider>
            </Example>
            <Markdown>
                {`
### Переопределение абстрактных цветов

Все цвета компонентов создаются из абстрактных цветов. Переопределяя абстрактные цвета, можно изменить 
цветовую палитру всех компонентов разом. Это может быть полезно для темирования.
Для переопределения абстрактных цветов используйте \`PaletteProvider\` и его свойство \`abstract\`.

\`\`\`ts
<PaletteProvider abstract={{ neutralUsual: '#c93', neutralLight: '#cc5' }}>
    <Skeleton />
</PaletteProvider>
\`\`\`
`}
            </Markdown>
            <Example>
                <PaletteProvider abstract={{ neutralUsual: '#c93', neutralLight: '#cc5' }}>
                    <Skeleton />
                </PaletteProvider>
            </Example>
            <Markdown>
                {`
### Приоритет цветов

Самый высокий приоритет имеют цвета на уровне вызова компонента. Затем цвета по умолчанию, 
назначенные при помощи \`PaletteProvider\` и соответствующего свойства. Затем абстрактные цвета, 
назначенные при помощи \`PaletteProvider\` и свойства \`abstract\`.

\`\`\`ts
<PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>
    <Skeleton palette={{ bg: 'blue' }}/>
</PaletteProvider>
\`\`\`
`}
            </Markdown>
            <Example>
                <PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>
                    <Skeleton palette={{ bg: 'blue' }} />
                </PaletteProvider>
            </Example>
            <Markdown>
                {`
\`\`\`ts
<PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>
    <Skeleton />
</PaletteProvider>
\`\`\`
`}
            </Markdown>
            <Example>
                <PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>
                    <Skeleton />
                </PaletteProvider>
            </Example>
            <Markdown>
                {`
\`\`\`ts
<PaletteProvider abstract={{ neutralUsual: 'red' }}>
    <Skeleton />
</PaletteProvider>
\`\`\`
`}
            </Markdown>
            <Example>
                <PaletteProvider abstract={{ neutralUsual: 'red' }}>
                    <Skeleton />
                </PaletteProvider>
            </Example>
            <Markdown>
                {`
### Частичное и полное переопределение цветов

На любом уровне можно переопределить любое количество цветов.

\`\`\`ts
<Skeleton palette={{ bg: 'pink' }}/>
\`\`\`
`}
            </Markdown>
            <Example>
                <Skeleton palette={{ bg: 'pink' }} />
            </Example>
            <Markdown>
                {`
\`\`\`ts
<Skeleton palette={{ flicker: 'brown' }}/>
\`\`\`
`}
            </Markdown>
            <Example>
                <Skeleton palette={{ flicker: 'brown' }} />
            </Example>
            <Markdown>
                {`
\`\`\`ts
<Skeleton palette={{ bg: 'pink', flicker: 'brown' }}/>
\`\`\`
`}
            </Markdown>
            <Example>
                <Skeleton palette={{ bg: 'pink', flicker: 'brown' }} />
            </Example>
        </Typography>
    ),
};
