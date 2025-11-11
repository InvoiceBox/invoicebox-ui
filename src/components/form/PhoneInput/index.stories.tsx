import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TProps, PhoneInput } from '.';

const meta: Meta<typeof PhoneInput> = {
    title: 'form/PhoneInput',
    component: PhoneInput,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'onChange' },
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
    size: 'L' as const,
    isSupportCityRusPhoneNumber: false,
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
                label: 'Кыргызстан',
                value: 'KGZ',
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

export const MultiCountryWithUnknown: StoryObj<TProps> = {
    args: {
        ...commonProps,
        countries: [
            {
                label: 'Россия',
                value: 'RUS',
            },
            {
                label: 'Казахстан',
                value: 'KAZ',
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
                label: 'Другая',
                value: 'UNKNOWN',
            },
        ],
    },
    render: Component,
};

export const DefaultRusCountry: StoryObj<TProps> = {
    args: commonProps,
    render: Component,
};

export const WithoutInnerValidation: StoryObj<TProps> = {
    args: {
        ...commonProps,
        isInnerValidationDisabled: true,
    },
    render: Component,
};
