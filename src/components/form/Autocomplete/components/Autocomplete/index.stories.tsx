import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useMemo, useState } from 'react';
import { Autocomplete, TProps } from '.';
import { selectOptions } from '../../../../common/_helpers/selectOptions';

const meta: Meta<typeof Autocomplete> = {
    title: 'form/Autocomplete/components/Autocomplete',
    component: Autocomplete,
    tags: ['autodocs'],
};

export default meta;

type TStpryProps = TProps & { isCustomOptionRender: boolean };

const Component = (props: TStpryProps) => {
    const { isCustomOptionRender } = props;
    const [value, setValue] = useState('');

    const filtredOptions = useMemo(
        () => selectOptions.filter((option) => option.value.includes(value)),
        [value],
    );

    const customRender = useCallback(
        (option: { value: string }) => (
            <div style={{ textAlign: 'left', background: '#cfc', padding: 5 }}>custom {option.value}</div>
        ),
        [],
    );

    return (
        <Autocomplete
            {...props}
            value={value}
            onChange={setValue}
            options={filtredOptions}
            renderOption={isCustomOptionRender ? customRender : undefined}
        />
    );
};

export const Default: StoryObj<TStpryProps> = {
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        disabled: false,
        isCustomOptionRender: false,
        children: 'children',
        inputPaddingLeft: 60,
        readOnly: false,
    },
    render: Component,
};
