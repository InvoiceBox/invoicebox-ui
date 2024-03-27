import React, { FC } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TWarningIconPalette } from './palette';

export type TProps = {
    size?: number;
    palette?: Partial<TWarningIconPalette>;
};

export const WarningIcon: FC<TProps> = ({ size = 20, palette }) => {
    const mergedPalette = useComponentPalette('warningIcon', palette);

    return <S.StyledIcon $palette={mergedPalette} $size={size} />;
};
