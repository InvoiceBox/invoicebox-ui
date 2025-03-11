import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Markdown from 'markdown-to-jsx';
import { Typography } from './index';

const meta = {
    title: 'common/Typography',
} satisfies Meta<typeof Typography>;

export default meta;

export const Installation: StoryObj = {
    render: () => (
        <Typography variant="bodyL">
            <Markdown>
                {`
### Установка

Для корректной работы нужно локально добавить шрифт Roboto и жирностью 400, 500, 700

`}
            </Markdown>
        </Typography>
    ),
};
