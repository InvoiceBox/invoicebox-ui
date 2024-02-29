import React from 'react';
import type { Preview } from '@storybook/react';
import { TypographyGlobalStyle } from '../src';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <>
                <TypographyGlobalStyle />
                <Story />
            </>
        ),
    ],
};

export default preview;
