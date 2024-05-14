import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TBgCardPalette } from './palette';

export type TProps = {
    children: ReactNode;
    isTopLeftBorder?: boolean;
};

export const BgCard: FC<TProps> = ({ children, isTopLeftBorder = true }) => {
    const palette = useComponentPalette<TBgCardPalette>('bgCard');

    return (
        <S.Wrapper $palette={palette} $isTopLeftBorder={isTopLeftBorder}>
            {children}
        </S.Wrapper>
    );
};
