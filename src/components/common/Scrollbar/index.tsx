import React, { FC, ReactNode } from 'react';
import { useComponentPalette } from '../../../palette';
import { TScrollbarPalette } from './palette';
import * as S from './styles';

export type TProps = {
    children: ReactNode;
    maxHeight?: number;
    trackWidth?: number;
    autoHeight?: boolean;
};

// CSS-скроллбар (убрали зависимость `react-custom-scrollbars-2`): нативный overflow + стилизованный
// тонкий ползунок. Публичный API сохранён (maxHeight/trackWidth/autoHeight). autoHeight=true →
// контейнер растёт по контенту до maxHeight, затем скроллится; autoHeight=false → высота 100% родителя.
export const Scrollbar: FC<TProps> = ({ children, maxHeight = '100%', trackWidth = 4, autoHeight = true }) => {
    const palette = useComponentPalette<TScrollbarPalette>('scrollbar');

    return (
        <S.Wrapper $maxHeight={maxHeight} $trackWidth={trackWidth} $thumb={palette.thumb} $autoHeight={autoHeight}>
            {children}
        </S.Wrapper>
    );
};
