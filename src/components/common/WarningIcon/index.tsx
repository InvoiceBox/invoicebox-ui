import React, { FC } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TWarningIconPalette } from './palette';

export type TProps = {
    size?: number;
};

export const WarningIcon: FC<TProps> = ({ size = 20 }) => {
    const palette = useComponentPalette<TWarningIconPalette>('warningIcon');

    return <S.StyledIcon $palette={palette} $size={size} />;
};
