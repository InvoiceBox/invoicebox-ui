import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useModal } from '../../../hooks/useModal';
import { ToastContainer } from '../Toast';
import { WentWrongModal, TProps } from '.';

const meta: Meta<typeof WentWrongModal> = {
    title: 'common/WentWrongModal',
    component: WentWrongModal,
    tags: ['autodocs'],
};

export default meta;

const Render = (args: TProps) => {
    const [isOpen, open, close] = useModal(false);

    return (
        <div>
            <button type="button" onClick={open}>
                Open
            </button>
            <WentWrongModal {...args} isOpen={isOpen} onClose={close} />
            <ToastContainer />
        </div>
    );
};

const commonArgs = {
    title: 'Что-то пошло не так...',
    description:
        'К сожалению, произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте ещё раз или обратитесь в службу поддержки',
};

export const Default: StoryObj<TProps> = {
    args: commonArgs,
    render: Render,
};

export const WithRequestId: StoryObj<TProps> = {
    args: {
        ...commonArgs,
        title: 'Доступ заблокирован',
        description:
            'Вы исчерпали количество попыток входа на сегодня. Пожалуйста, повторите попытку позже или обратитесь в службу поддержки',
        requestErrorId: '7f3c2a9e-41b8-4d0e-9a51-2c6f8e1b0d47',
    },
    render: Render,
};
