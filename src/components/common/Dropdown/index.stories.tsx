import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown, TProps } from '.';

const meta: Meta<typeof Dropdown> = {
    title: 'common/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};

export default meta;

const args: TProps = {
    isOpen: false,
    positionVertical: 5,
    positionLeft: '0px',
    positionRight: 'auto',
    minWidth: 'auto',
    width: 'auto',
    zIndex: 5,
    onCloseTransitionEnd: action('closeTransitionEnd'),
    children: Array(100).fill('children ').join(''),
    isTopPosition: false,
};

export const Default: StoryObj<TProps> = {
    args: {
        ...args,
        isAutoPosition: false,
    },
    render: (props) => (
        <div style={{ position: 'relative' }}>
            <div>parent</div>
            <Dropdown {...props} />
        </div>
    ),
};

export const AutoPosition: StoryObj<TProps> = {
    args: {
        ...args,
        isAutoPosition: true,
    },
    render: (props) => (
        <div>
            Дропдаун ниже ↓
            <div style={{ position: 'relative', marginTop: '800px', marginBottom: '800px' }}>
                <div>parent</div>
                <Dropdown {...props} />
            </div>
        </div>
    ),
};

/** Над полем появляется/исчезает контент (как строки «Загружаем…» в модалке), пока дропдаун
 * открыт: слой должен перевязаться за полем, а не остаться на старом месте */
const RepositionOnContentResizeDemo = (props: TProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasContentAbove, setHasContentAbove] = useState(true);

    return (
        <div style={{ width: 320 }}>
            {hasContentAbove && <div style={{ height: 60 }}>Контент над полем (строка загрузки)</div>}
            <div style={{ position: 'relative' }}>
                <div>parent (поле)</div>
                <button type="button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Закрыть' : 'Открыть'} дропдаун
                </button>{' '}
                <button type="button" onClick={() => setHasContentAbove(!hasContentAbove)}>
                    Контент над полем: {hasContentAbove ? 'скрыть' : 'показать'}
                </button>
                <Dropdown {...props} isOpen={isOpen} />
            </div>
        </div>
    );
};

export const RepositionOnContentResize: StoryObj<TProps> = {
    args: {
        ...args,
    },
    render: (props) => <RepositionOnContentResizeDemo {...props} />,
};
