import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput, TProps } from './index';
import { useState } from 'react';

const meta: Meta<typeof SearchInput> = {
    title: 'form/SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
};

export default meta;

const Component = (props: TProps) => {
    const [value, setValue] = useState('');

    return <SearchInput {...props} value={value} onChange={setValue} placeholder="Поиск" />;
};

export const Default: StoryObj<TProps> = {
    render: Component,
};
