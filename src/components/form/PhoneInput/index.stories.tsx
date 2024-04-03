import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TProps, PhoneInput } from '.';

const meta: Meta<typeof PhoneInput> = {
    title: 'form/PhoneInput',
    component: PhoneInput,
    tags: ['autodocs'],
    argTypes: {
        onBlur: { action: 'onBlur' },
        onFocus: { action: 'onFocus' },
        onCountryChange: { action: 'onCountryChange' },
    },
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = useState('37411800000');

    return (
        <div>
            <p>
                Значение: <span>{value}</span>
            </p>
            <div style={{ width: 400 }}>
                <PhoneInput {...props} value={value} onChange={setValue} />
            </div>
        </div>
    );
};

const commonProps = {
    disabled: false,
    label: 'Телефон',
    countrySelectProps: {
        placeholder: 'Поиск',
        selectedLabel: '(выбрано)',
    },
};

export const MultiCountry: StoryObj<TProps> = {
    args: {
        ...commonProps,
        countries: [
            {
                label: 'Россия',
                value: 'RUS',
            },
            {
                label: 'Армения',
                value: 'ARM',
            },
            {
                label: 'Белорусь',
                value: 'BLR',
            },
            {
                label: 'Казахстан',
                value: 'KAZ',
            },
            {
                label: 'Азербайджан',
                value: 'AZE',
            },
            {
                label: 'Такджикистан',
                value: 'TJK',
            },
            {
                label: 'Узбекистан',
                value: 'UZB',
            },
        ],
    },
    render: Component,
};

export const DefaultRusCountry: StoryObj<TProps> = {
    args: commonProps,
    render: Component,
};
