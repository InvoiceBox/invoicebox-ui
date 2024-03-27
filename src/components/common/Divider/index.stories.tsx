import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '.';

const meta: Meta<typeof Divider> = {
    title: 'common/Divider',
    component: Divider,
    tags: ['autodocs'],
};

export default meta;
type TStory = StoryObj<typeof Divider>;

export const Default: TStory = {};
