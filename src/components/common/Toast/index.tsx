import React, { FC } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TToastPalette } from './palette';
import { toast as libToast } from 'react-toastify';
import { Typography } from '../Typography';

type TToastOptions = {
    toastId?: string;
};

// toastId по умолчанию выводится из текста: пока тост с таким id виден,
// повторные вызовы с тем же сообщением игнорируются react-toastify —
// одинаковые ошибки не стекаются в «бурю тостов»
export const toast = {
    error: (message: string, options?: TToastOptions) => {
        libToast.error(() => <Typography variant="bodyMRegular">{message}</Typography>, {
            toastId: options?.toastId ?? `error:${message}`,
        });
    },
    success: (message: string, options?: TToastOptions) => {
        libToast.success(() => <Typography variant="bodyMRegular">{message}</Typography>, {
            toastId: options?.toastId ?? `success:${message}`,
        });
    },
};

export const ToastContainer: FC = () => {
    const palette = useComponentPalette<TToastPalette>('toast');

    return <S.Container autoClose={3000} position="bottom-right" $palette={palette} />;
};
