import React from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TPointsLoaderPalette } from './palette';

const points = new Array(3).fill('').map((item, index) => index);

export const PointsLoader = () => {
    const palette = useComponentPalette<TPointsLoaderPalette>('pointsLoader');

    return (
        <S.Wrapper>
            {points.map((pointItem) => (
                <S.Point key={pointItem} $activeColor={palette.active} $defaultColor={palette.default} />
            ))}
        </S.Wrapper>
    );
};
