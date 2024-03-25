import type { Meta, StoryObj } from '@storybook/react';
import Markdown from 'markdown-to-jsx';
import { Calendar } from '.';
import { Typography } from '../Typography';

const meta = {
    title: 'common/Calendar',
} satisfies Meta<typeof Calendar>;

export default meta;

export const Installation: StoryObj = {
    render: () => (
        <Typography variant="bodyL">
            <Markdown>
                {`
### Установка

Используется библиотека [react-calendar](https://github.com/wojtekmaj/react-calendar).
Для корректной работы необходимо подключить стили.

\`\`\`ts
import 'react-calendar/dist/Calendar.css';
import '@invoicebox/ui/dist/components/common/Calendar/index.css';
\`\`\`
`}
            </Markdown>
        </Typography>
    ),
};
