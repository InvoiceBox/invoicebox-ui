import React, { FC } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TToastPalette } from './palette';
import { toast as libToast } from 'react-toastify';
import { Typography } from '../Typography';

export const toast = {
    error: (message: string) => {
        libToast.error(() => <Typography variant="bodyMRegular">{message}</Typography>);
    },
    success: (message: string) => {
        libToast.success(() => <Typography variant="bodyMRegular">{message}</Typography>);
    },
};

export const ToastContainer: FC = () => {
    const palette = useComponentPalette<TToastPalette>('toast');

    return <S.Container autoClose={3000} position="bottom-right" $palette={palette} />;
};
