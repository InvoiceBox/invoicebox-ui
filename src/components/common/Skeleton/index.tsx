import React, { FC } from 'react';
import * as S from './styles';
import { TSkeletonPalette } from './palette';
import { useComponentPalette } from '../../../palette';

export type TProps = {
    width?: string;
    height?: string;
    palette?: Partial<TSkeletonPalette>;
};

export const Skeleton: FC<TProps> = ({ width = '100%', height = '100%', palette }) => {
    const mergedPalette = useComponentPalette('skeleton', palette);

    return (
        <S.Wrapper $width={width} $height={height} $palette={mergedPalette}>
            <S.Inner $palette={mergedPalette} />
        </S.Wrapper>
    );
};
