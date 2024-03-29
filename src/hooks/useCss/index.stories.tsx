/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { useCss } from '.';

const meta: Meta = {
    title: 'hooks/useCss',
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        useCss({ id: 'example', css: `body { color: green; }` });

        return <div>some text</div>;
    },
};
