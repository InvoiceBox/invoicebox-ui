import { FC } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TToastPalette } from './palette';

export { toast } from 'react-toastify';

export const ToastContainer: FC = () => {
    const palette = useComponentPalette<TToastPalette>('toast');

    return <S.Container autoClose={3000} position="bottom-right" $palette={palette} />;
};
