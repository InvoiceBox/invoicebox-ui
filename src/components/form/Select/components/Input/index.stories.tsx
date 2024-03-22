import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input, TProps } from '.';

const meta: Meta<typeof Input> = {
    title: 'form/Select/_components/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        hasError: false,
        inFocus: false,
        placeholder: 'placeholder',
        onFocus: action('focus'),
        onBlur: action('blur'),
        value: 'Selected option',
        name: 'name',
        label: 'label',
        isOpen: false,
    },
};
