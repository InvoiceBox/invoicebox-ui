import type { Meta, StoryObj } from '@storybook/react';
import { PureInput } from '.';

const meta: Meta<typeof PureInput> = {
    title: 'form/PureInput',
    component: PureInput,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof PureInput> = {
    args: {
        paddingLeft: 18,
        paddingRight: 18,
        hasError: false,
        inFocus: false,
        hasBorder: true,
        placeholder: 'Введите текст',
        autoFocus: false,
    },
};
