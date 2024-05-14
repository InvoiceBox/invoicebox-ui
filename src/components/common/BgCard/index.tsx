import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TBgCardPalette } from './palette';

export type TProps = {
    children: ReactNode;
};

export const BgCard: FC<TProps> = ({ children }) => {
    const palette = useComponentPalette<TBgCardPalette>('bgCard');

    return <S.Wrapper $palette={palette}>{children}</S.Wrapper>;
};
