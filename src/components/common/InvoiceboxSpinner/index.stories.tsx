import type { Meta, StoryObj } from '@storybook/react';

import { InvoiceboxSpinner } from '.';

const meta = {
    title: 'common/InvoiceboxSpinner',
    component: InvoiceboxSpinner,
    tags: ['autodocs'],
} satisfies Meta<typeof InvoiceboxSpinner>;

export default meta;

export const Default: StoryObj<typeof InvoiceboxSpinner> = {
    args: {
        width: '32px',
    },
};
