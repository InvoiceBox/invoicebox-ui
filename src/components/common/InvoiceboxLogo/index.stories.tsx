import type { Meta, StoryObj } from '@storybook/react';
import { TProps, InvoiceboxLogo } from '.';

const meta = {
    title: 'common/InvoiceboxLogo',
    component: InvoiceboxLogo,
    tags: ['autodocs'],
} satisfies Meta<typeof InvoiceboxLogo>;

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        height: 30,
    },
};
