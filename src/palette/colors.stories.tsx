import type { Meta, StoryObj } from '@storybook/react';
import { defaultAbstractPalette } from './constants';
import { Typography } from '../components/common/Typography';

const meta: Meta = {
    title: 'palette/Colors',
};

export default meta;

export const Docs: StoryObj = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            {Object.keys(defaultAbstractPalette).map((key) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div
                        style={{
                            backgroundColor:
                                defaultAbstractPalette[key as keyof typeof defaultAbstractPalette],
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                        }}
                    />
                    <Typography variant="bodyL">
                        {key} {defaultAbstractPalette[key as keyof typeof defaultAbstractPalette]}
                    </Typography>
                </div>
            ))}
        </div>
    ),
};
