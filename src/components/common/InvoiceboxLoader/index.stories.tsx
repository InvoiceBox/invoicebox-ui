import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceboxLoader } from '.';

const meta: Meta<typeof InvoiceboxLoader> = {
    title: 'common/InvoiceboxLoader',
    component: InvoiceboxLoader,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof InvoiceboxLoader> = {
    args: {
        width: '120px',
    },
};
