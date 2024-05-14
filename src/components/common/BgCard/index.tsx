import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TBgCardPalette } from './palette';

export type TProps = {
    children: ReactNode;
    isTopLeftBorderRadius?: boolean;
};

export const BgCard: FC<TProps> = ({ children, isTopLeftBorderRadius = true }) => {
    const palette = useComponentPalette<TBgCardPalette>('bgCard');

    return (
        <S.Wrapper $palette={palette} $isTopLeftBorderRadius={isTopLeftBorderRadius}>
            {children}
        </S.Wrapper>
    );
};
