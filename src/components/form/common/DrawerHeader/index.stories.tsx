import type { Meta, StoryObj } from '@storybook/react';
import { DrawerHeader, TProps } from './index';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof DrawerHeader> = {
    title: 'form/common/DrawerHeader',
    component: DrawerHeader,
    tags: ['autodocs'],
    argTypes: { onClose: action('onClose'), onSubmit: action('onSubmit') },
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
        isSubmitDisabled: false,
    },
};
