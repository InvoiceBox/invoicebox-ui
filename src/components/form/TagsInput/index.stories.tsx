import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TagsInput, TProps } from '.';

const meta: Meta<typeof TagsInput> = {
    title: 'form/TagsInput',
    component: TagsInput,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = useState<Array<string> | undefined>();

    return <TagsInput {...props} value={value} onChange={setValue} />;
};

export const Default: StoryObj<TProps> = {
    args: { size: 'M', label: 'Label', hasError: false },
    render: Component,
};
