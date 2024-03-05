import type { Meta, StoryObj } from '@storybook/react';
import { StyledSvg } from '.';

const meta: Meta<typeof StyledSvg> = {
    title: 'common/Arrow/_components/StyledSvg',
    component: StyledSvg,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;

export const Default: StoryObj<typeof StyledSvg> = {
    args: {
        $isOpen: false,
        $isLight: false,
        $openLightColor: '#cfc',
        $closeLightColor: '#cac',
        $openUsualColor: '#05b',
        $closeUsualColor: '#00b',
        size: 10,
        $padding: 7,
        $defaultRotate: 0,
    },
};
