import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Select } from '.';

const meta: Meta<typeof Select> = {
    title: 'form/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;

const selectOptions = [
    { label: 'Option 1', value: 'option-1', groupId: '1' },
    { label: 'Option 2', value: 'option-2', groupId: '1' },
    { label: 'Option 3', value: 'option-3', groupId: '2' },
    { label: 'Option 4', value: 'option-4', groupId: '2' },
    { label: 'Option 5', value: 'option-5' },
    { label: 'Option 6', value: 'option-6' },
    { label: 'Option 7', value: 'option-7' },
    { label: 'Option 8', value: 'option-8' },
    { label: 'Option 9', value: 'option-9' },
    { label: 'Option 10', value: 'option-10' },
    { label: 'Option 11', value: 'option-11' },
    { label: 'Option 12', value: 'option-12' },
];

export const Default: StoryObj<typeof Select> = {
    args: {
        hasError: false,
        label: 'Label',
        name: 'name',
        placeholder: 'Placeholder',
        groups: [
            {
                label: 'Group 1',
                id: '1',
            },
            {
                label: 'Group 2',
                id: '2',
            },
        ],
    },
    render: function Component(props) {
        const [value, setValue] = useState<string | null>(null);

        const handleChange = useCallback((newValue: string | null) => {
            setValue(newValue);
            action('onChange')(newValue);
        }, []);

        return <Select {...props} value={value} onChange={handleChange} options={selectOptions} />;
    },
};
