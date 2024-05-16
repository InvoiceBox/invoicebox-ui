import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../components/common/Skeleton';
import { PaletteProvider } from './provider';
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
            <h1>Система цветов</h1>
            <div>
                <h3>Поведение по умолчанию</h3>
                <p>
                    Можно использовать компоненты без определения цветов, тогда будут использованы цвета по
                    умолчанию.
                </p>
                <pre>
                    <code>{'<Skeleton />'}</code>
                </pre>
                <Example>
                    <Skeleton />
                </Example>
            </div>
            <div>
                <h3>Переопределение цветов на уровне вызова компонента</h3>
                <p>
                    Можно переопределить цвета на уровне вызова компонента, для этого используйте свойство{' '}
                    <code>palette</code>.
                </p>
                <pre>
                    <code>{"<Skeleton palette={{ bg: '#c9c', flicker: '#5a5' }} />"}</code>
                </pre>
                <Example>
                    <Skeleton palette={{ bg: '#c9c', flicker: '#5a5' }} />
                </Example>
                <p>
                    <i>
                        Если у компонента нет свойства <code>palette</code>, а вам оно требуется, создайте{' '}
                        <a href="https://github.com/InvoiceBox/invoicebox-ui/issues">issue</a>. Или добавьте
                        самостоятельно и откройте pull request, используя в качестве примера, компонент{' '}
                        <code>Skeleton</code>.
                    </i>
                </p>
            </div>
            <div>
                <h3>Переопределение цветов конкретного компонента</h3>
                <p>
                    Можно переопределить поведение по умолчанию конкретного компонента. Для этого используйте{' '}
                    <code>PaletteProvider</code> и его свойство соответствующее компоненту.
                </p>
                <pre>
                    <code>
                        {`<PaletteProvider skeleton={{ bg: '#39c', flicker: '#5cc' }}>\n`}
                        {`    <Skeleton />\n`}
                        {`</PaletteProvider>`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider skeleton={{ bg: '#39c', flicker: '#5cc' }}>
                        <Skeleton />
                    </PaletteProvider>
                </Example>
                <p>
                    <i>
                        Если у <code>PaletteProvider</code> нет свойства соответствующего компоненту, а вам
                        оно требуется, создайте{' '}
                        <a href="https://github.com/InvoiceBox/invoicebox-ui/issues">issue</a>. Или добавьте
                        самостоятельно и откройте pull request, используя в качестве примера, компонент{' '}
                        <code>Skeleton</code>.
                    </i>
                </p>
            </div>
            <div>
                <h3>Переопределение абстрактных цветов</h3>
                <p>
                    Все цвета компонентов создаются из абстрактных цветов. Переопределяя абстрактные цвета,
                    можно изменить цветовую палитру всех компонентов разом. Это может быть полезно для
                    темирования. Для переопределения абстрактных цветов используйте{' '}
                    <code>PaletteProvider</code> и его свойство <code>abstract</code>.
                </p>
                <pre>
                    <code>
                        {`<PaletteProvider abstract={{ neutralUsual: '#c93', neutralLight: '#cc5' }}>\n`}
                        {`    <Skeleton />\n`}
                        {`</PaletteProvider>`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider abstract={{ neutralUsual: '#c93', neutralLight: '#cc5' }}>
                        <Skeleton />
                    </PaletteProvider>
                </Example>
            </div>
            <div>
                <h3>Приоритет цветов</h3>
                <p>
                    Самый высокий приоритет имеют цвета на уровне вызова компонента. Затем цвета по умолчанию,
                    назначенные при помощи <code>PaletteProvider</code> и соответствующего свойства. Затем
                    абстрактные цвета, назначенные при помощи <code>PaletteProvider</code> и свойства{' '}
                    <code>abstract</code>.
                </p>
                <pre>
                    <code>
                        {`<PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>\n`}
                        {`    <Skeleton palette={{ bg: 'blue' }}/>\n`}
                        {`</PaletteProvider>`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>
                        <Skeleton palette={{ bg: 'blue' }} />
                    </PaletteProvider>
                </Example>
                <pre>
                    <code>
                        {`<PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>\n`}
                        {`    <Skeleton />\n`}
                        {`</PaletteProvider>`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider abstract={{ neutralUsual: 'red' }} skeleton={{ bg: 'green' }}>
                        <Skeleton />
                    </PaletteProvider>
                </Example>
                <pre>
                    <code>
                        {`<PaletteProvider abstract={{ neutralUsual: 'red' }}>\n`}
                        {`    <Skeleton />\n`}
                        {`</PaletteProvider>`}
                    </code>
                </pre>
                <Example>
                    <PaletteProvider abstract={{ neutralUsual: 'red' }}>
                        <Skeleton />
                    </PaletteProvider>
                </Example>
            </div>
            <div>
                <h3>Частичное и полное переопределение цветов</h3>
                <p>На любом уровне можно переопределить любое количество цветов.</p>
                <pre>
                    <code>{`<Skeleton palette={{ bg: 'pink' }}/>`}</code>
                </pre>
                <Example>
                    <Skeleton palette={{ bg: 'pink' }} />
                </Example>
                <pre>
                    <code>{`<Skeleton palette={{ flicker: 'brown' }}/>`}</code>
                </pre>
                <Example>
                    <Skeleton palette={{ flicker: 'brown' }} />
                </Example>
                <pre>
                    <code>{`<Skeleton palette={{ bg: 'pink', flicker: 'brown' }}/>`}</code>
                </pre>
                <Example>
                    <Skeleton palette={{ bg: 'pink', flicker: 'brown' }} />
                </Example>
            </div>
        </Typography>
    ),
};
