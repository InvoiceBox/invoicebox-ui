import React, { FC } from 'react';
import { useComponentPalette } from '../../../palette';
import * as S from './styles';
import { TDividerPalette } from './palette';

export type TProps = {
    palette?: Partial<TDividerPalette>;
    height?: number;
};

export const Divider: FC<TProps> = ({ palette, height = 1 }) => {
    const mergedPalette = useComponentPalette('divider', palette);

    return <S.Divider $palette={mergedPalette} $height={height} />;
};
