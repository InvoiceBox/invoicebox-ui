import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Markdown from 'markdown-to-jsx';
import { ToastContainer } from '.';
import { Typography } from '../Typography';

const meta = {
    title: 'common/Toast',
} satisfies Meta<typeof ToastContainer>;

export default meta;

export const Installation: StoryObj = {
    render: () => (
        <Typography variant="bodyL">
            <Markdown>
                {`
### Установка

Используется библиотека [react-toastify](https://github.com/fkhadra/react-toastify).
Для корректной работы необходимо подключить стили, и добавить компонент ToastContainer в дерево компонентов.

\`\`\`ts
import { ToastContainer, toast } from '@invoicebox/ui';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <ToastContainer />
            <button
                onClick={() => {
                    toast.success('Success');
                }}
            >
                Success
            </button>
            <button
                onClick={() => {
                    toast.error('Success');
                }}
            >
                Error
            </button>
        </div>
    );
}
\`\`\`
`}
            </Markdown>
        </Typography>
    ),
};
