import type { Meta, StoryObj } from '@storybook/react';
import { ResetButton, TProps } from './index';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ResetButton> = {
    title: 'form/ResetButton',
    component: ResetButton,
    tags: ['autodocs'],
    argTypes: { onClick: action('onClick') },
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {},
};
