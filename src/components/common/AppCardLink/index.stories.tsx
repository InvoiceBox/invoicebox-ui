import type { Meta, StoryObj } from '@storybook/react';
import { TProps, AppCardLink } from '.';

const meta = {
    title: 'common/AppCardLink',
    component: AppCardLink,
    tags: ['autodocs'],
} satisfies Meta<typeof AppCardLink>;

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        height: 24,
        variant: 'apk',
        href: 'https://www.invoicebox.ru/ru/',
    },
};
