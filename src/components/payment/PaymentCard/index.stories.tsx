import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { PaymentCard } from '.';

const meta: Meta<typeof PaymentCard> = {
    title: 'payment/PaymentCard',
    component: PaymentCard,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof PaymentCard> = {
    args: {
        title: 'Альфа-банк',
        isActive: false,
        isDisabled: false,
        children: 'children',
        comment: 'Комиссия 10 руб',
    },
};
