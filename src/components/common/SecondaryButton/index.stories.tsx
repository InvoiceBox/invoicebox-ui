import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton } from '.';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'common/SecondaryButton',
    component: SecondaryButton,
    tags: ['autodocs'],
} satisfies Meta<typeof SecondaryButton>;

export default meta;

export const Default: StoryObj<typeof SecondaryButton> = {
    args: {
        disabled: false,
        isLoading: false,
        fullWidth: false,
        onClick: action('click'),
        children: 'Button',
    },
};