import type { Meta, StoryObj } from '@storybook/react';
import { MiniAppWrapper } from '.';

const meta: Meta<typeof MiniAppWrapper> = {
    title: 'miniApp/MiniAppWrapper',
    component: MiniAppWrapper,
    tags: ['autodocs'],
};

export default meta;

const children = (
    <>
        <div style={{ background: 'antiquewhite', padding: 15 }}>form</div>
        <div style={{ background: 'aquamarine', padding: 15 }}>footer</div>
    </>
);

export const ContainerHasNoHeigth: StoryObj = {
    render: () => (
        <div>
            <MiniAppWrapper>{children}</MiniAppWrapper>
        </div>
    ),
};

export const ContainerHasHeigth: StoryObj = {
    render: () => (
        <div style={{ height: 200 }}>
            <MiniAppWrapper>{children}</MiniAppWrapper>
        </div>
    ),
};
