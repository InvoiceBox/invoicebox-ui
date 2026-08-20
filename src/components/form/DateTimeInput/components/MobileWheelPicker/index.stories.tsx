import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MobileWheelPicker, WheelColumn, TProps } from '.';

const meta: Meta<typeof MobileWheelPicker> = {
    title: 'form/DateTimeInput/_components/MobileWheelPicker',
    component: MobileWheelPicker,
    tags: ['autodocs'],
};

export default meta;

const OPTIONS = new Array(30).fill(0).map((item, index) => ({
    value: index,
    label: `Строка ${index}`,
}));

export const Default: StoryObj<TProps> = {
    args: { label: 'Пример' },
    render: function Render(args) {
        const [value, setValue] = useState(0);

        return (
            <MobileWheelPicker {...args}>
                <WheelColumn
                    label={'Пример'}
                    options={OPTIONS}
                    value={value}
                    onChange={setValue}
                    width={140}
                />
            </MobileWheelPicker>
        );
    },
};
