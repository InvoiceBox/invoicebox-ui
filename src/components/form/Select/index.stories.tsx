import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Select, TProps } from '.';

const meta: Meta<typeof Select> = {
    title: 'form/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps<string>) => {
    const [value, setValue] = useState<string | null>(null);

    const handleChange = useCallback((newValue: string | null) => {
        setValue(newValue);
        action('onChange')(newValue);
    }, []);

    return <Select {...props} value={value} onChange={handleChange} />;
};

const COMMON_ARGS = {
    hasError: false,
    label: 'Label',
    name: 'name',
    placeholder: 'Placeholder',
    isResetButtonEnabled: false,
    size: 'L' as const,
    isLoading: false,
    options: [
        { label: 'Option 1', value: 'option-1', groupId: '1', entity: { id: 1, name: 'name option 1' } },
        { label: 'Option 2', value: 'option-2', groupId: '1', entity: { id: 2, name: 'name option 2' } },
        { label: 'Option 3', value: 'option-3', groupId: '2', entity: { id: 3, name: 'name option 3' } },
        { label: 'Option 4', value: 'option-4', groupId: '2', entity: { id: 4, name: 'name option 4' } },
        { label: 'Option 5', value: 'option-5', entity: { id: 5, name: 'name option 5' } },
        { label: 'Option 6', value: 'option-6', entity: { id: 6, name: 'name option 6' } },
        { label: 'Option 7', value: 'option-7', entity: { id: 7, name: 'name option 7' } },
        { label: 'Option 8', value: 'option-8', entity: { id: 8, name: 'name option 8' } },
        { label: 'Option 9', value: 'option-9', entity: { id: 9, name: 'name option 9' } },
        { label: 'Option 10', value: 'option-10', entity: { id: 10, name: 'name option 10' } },
        { label: 'Option 11', value: 'option-11', entity: { id: 11, name: 'name option 11' } },
        { label: 'Option 12', value: 'option-12', entity: { id: 12, name: 'name option 12' } },
    ],
};

const COLORS_BY_ID_MAP: Record<number, string> = {
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'red',
    5: 'blue',
    6: 'green',
    7: 'red',
    8: 'blue',
    9: 'green',
};

const renderOption = (entity: { name: string }) => <div>Hello {entity.name} </div>;
const renderValue = (entity: { id: number; name: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS_BY_ID_MAP[entity.id],
                borderRadius: 10,
                border: '1px solid lightgrey',
            }}
        ></div>
        Selected color: {entity.name}{' '}
    </div>
);

const renderGroup = (group: { name: string }) => <div>Group name is: {group.name} </div>;

export const Default: StoryObj<TProps<string>> = {
    args: {
        ...COMMON_ARGS,
    },
    render: Component,
};

export const EmptyOptions: StoryObj<TProps<string>> = {
    args: {
        ...COMMON_ARGS,
        options: [],
    },
    render: Component,
};

export const WithDropdownHeader: StoryObj<TProps<string>> = {
    args: {
        ...COMMON_ARGS,
        dropdownHeader: <div>Dropdown header</div>,
        options: [],
    },
    render: Component,
};

export const RenderOption: StoryObj<TProps<string>> = {
    args: {
        ...COMMON_ARGS,
        renderOption,
    },
    render: Component,
};

export const WithGroups: StoryObj<TProps<string>> = {
    args: {
        ...COMMON_ARGS,
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
    render: Component,
};

export const RenderOptionWithGroups: StoryObj<TProps<string>> = {
    args: {
        ...COMMON_ARGS,
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
        renderOption,
    },
    render: Component,
};

export const WithCustomGroups: StoryObj<TProps<string>> = {
    args: {
        ...COMMON_ARGS,
        groups: [
            {
                label: 'Group 1',
                id: '1',
                entity: {
                    name: 'name group 1',
                },
            },
            {
                label: 'Group 2',
                id: '2',
                entity: {
                    name: 'name group 2',
                },
            },
        ],
        renderGroup,
    },

    render: Component,
};

export const WithRenderedValue: StoryObj<TProps<string>> = {
    args: {
        ...COMMON_ARGS,
        renderValue,
    },

    render: Component,
};
