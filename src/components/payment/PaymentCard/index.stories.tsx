import React from 'react';
import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { PaymentCard } from '.';
import { QiwiLogo } from './components/QiwiLogo';
import { WbPayIcon } from './components/WbPayIcon';

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
        comment: 'Комиссия 10 руб',
    },
};

export const DefaultCircleLogo: StoryObj<typeof PaymentCard> = {
    args: {
        title: 'Альфа-банк',
        isActive: false,
        isDisabled: false,
        comment: 'Комиссия 10 руб',
        icon: <QiwiLogo />,
    },
};

export const NotCircleLogo: StoryObj<typeof PaymentCard> = {
    args: {
        title: 'Альфа-банк',
        isActive: false,
        isDisabled: false,
        comment: 'Комиссия 10 руб',
        icon: <WbPayIcon />,
        isCircleIconLayout: false,
    },
};

export const WithChildren: StoryObj<typeof PaymentCard> = {
    args: {
        title: 'Альфа-банк',
        isActive: false,
        isDisabled: false,
        children: <div style={{ height: 22, width: 121, background: 'green' }} />,
        comment: 'Комиссия 10 руб',
    },
};

export const OverflowText: StoryObj<typeof PaymentCard> = {
    args: {
        title: 'Длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование ',
        isActive: false,
        isDisabled: false,
        comment: 'Комиссия 10 руб',
    },
};

export const OverflowTextWithChildren: StoryObj<typeof PaymentCard> = {
    args: {
        title: 'Длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование длинное наименование ',
        isActive: false,
        isDisabled: false,
        comment: 'Комиссия 10 руб',
        children: <div style={{ height: 22, width: 121, background: 'green' }} />,
    },
};
