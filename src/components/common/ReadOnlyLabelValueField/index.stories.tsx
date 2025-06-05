import type { Meta, StoryObj } from '@storybook/react';
import { ReadOnlyLabelValueField, TProps } from '.';

const meta: Meta<TProps> = {
    title: 'common/ReadOnlyLabelValueField',
    component: ReadOnlyLabelValueField,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
        value: 'Value',
        size: 'L',
    },
};
