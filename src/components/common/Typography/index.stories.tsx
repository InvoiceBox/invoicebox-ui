import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';
import { typography } from './typography';
import Markdown from 'markdown-to-jsx';

const meta = {
    title: 'common/Typography',
    component: Typography,
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid';

export const Default: StoryObj<typeof Typography> = {
    args: {
        variant: 'bodyL',
        children: dummyText,
    },
};

export const List: StoryObj<typeof Typography> = {
    render: () => (
        <Typography variant="bodyL">
            {Object.keys(typography).map((variant) => (
                <>
                    <Markdown>
                        {`
### ${variant}
`}
                    </Markdown>
                    <Typography variant={variant as keyof typeof typography}>{dummyText}</Typography>
                    <Markdown>
                        {`
\`\`\`
${typography[variant as keyof typeof typography].join('').replaceAll('        ', '').split('\n').filter(Boolean).join('\n')}
\`\`\`
`}
                    </Markdown>
                    <hr />
                </>
            ))}
        </Typography>
    ),
};
