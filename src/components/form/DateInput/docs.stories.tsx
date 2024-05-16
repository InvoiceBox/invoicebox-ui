import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Markdown from 'markdown-to-jsx';
import { DateInput } from '.';
import { Typography } from '../../common/Typography';

const meta = {
    title: 'form/DateInput',
} satisfies Meta<typeof DateInput>;

export default meta;

export const Installation: StoryObj = {
    render: () => (
        <Typography variant="bodyL">
            <Markdown>
                {`
### Установка

DateInput использует компонент Calendar.
Calendar должен быть установлен. 
[Подробнее.](/?path=/story/common-calendar--installation)
`}
            </Markdown>
        </Typography>
    ),
};
