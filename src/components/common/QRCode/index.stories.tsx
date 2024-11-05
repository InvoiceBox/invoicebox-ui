import type { Meta, StoryObj } from '@storybook/react';
import { QRCode, TProps } from '.';

const meta: Meta<typeof QRCode> = {
    title: 'common/QRCode',
    component: QRCode,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        value: 'https://www.invoicebox.ru/ru/',
        size: 132,
    },
};
