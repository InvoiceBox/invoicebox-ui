import type { Meta, StoryObj } from '@storybook/react';
import { CountryItem, TProps } from '.';
import { useComponentPalette } from '../../../../../palette';
import { TCountrySelectPalette } from '../../palette';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof CountryItem> = {
    title: 'form/CountrySelect/_components/CountryItem',
    component: CountryItem,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps<string>) => {
    const palette = useComponentPalette<TCountrySelectPalette>('countrySelect');

    return <CountryItem {...props} palette={palette} />;
};

export const Default: StoryObj<TProps<string>> = {
    args: {
        isSelected: false,
        description: 'ИНН',
        value: 'RUS',
        countryLabel: 'Russia',
        flag: 'RUS',
        selectedLabel: '(Выбрано)',
        onSelect: action('onSelect'),
    },
    render: Component,
};
