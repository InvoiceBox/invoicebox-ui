/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { useCss } from '.';
import { useState } from 'react';

const meta: Meta = {
    title: 'hooks/useCss',
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
    render: () => {
        const [isGreen, setIsGreen] = useState(true);

        useCss({ id: 'example', css: `body { color: ${isGreen ? 'green' : 'blue'}; }` });

        return (
            <div>
                <div>some text</div>
                <button onClick={() => setIsGreen((f) => !f)}>change color</button>
            </div>
        );
    },
};
