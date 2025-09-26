import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect, TProps } from '.';

const meta: Meta<typeof CountrySelect> = {
    title: 'form/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = React.useState<string>('RUS');

    return (
        <div style={{ height: 300 }}>
            <CountrySelect {...props} value={value} onChange={setValue} />
        </div>
    );
};

export const Default: StoryObj<TProps> = {
    args: {
        options: [
            {
                label: 'Россия',
                value: 'RUS',
                description: 'ИНН',
                flag: 'RUS' as const,
            },
            {
                label: 'Казахстан',
                value: 'KAZ',
                description: 'ИИН',
                flag: 'KAZ' as const,
            },
            {
                label: 'Afghanistan',
                value: 'AF',
                description: 'NO',
            },
        ],
        placeholder: 'Поиск',
        disabled: false,
    },
    render: Component,
};
