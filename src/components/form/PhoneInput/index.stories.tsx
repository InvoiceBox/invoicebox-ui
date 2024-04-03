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
        <div style={{ height: 400 }}>
            <p>
                Значение: <span>{value}</span>
            </p>
            <PhoneInput {...props} value={value} onChange={setValue} />
        </div>
    );
};

export const MultiCountry: StoryObj<TProps> = {
    args: {
        disabled: false,
        label: 'Телефон',
        countrySelectProps: {
            placeholder: 'Поиск',
            selectedLabel: '(выбрано)',
        },
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
    args: {
        disabled: false,
        label: 'Телефон',
        countrySelectProps: {
            placeholder: 'Поиск',
            selectedLabel: '(выбрано)',
        },
    },
    render: Component,
};
