import React, { FC } from 'react';
import * as S from './styles';

export type TProps = {
    width?: string;
    height?: string;
};

export const Skeleton: FC<TProps> = ({ width = '100%', height = '100%' }) => (
    <S.Wrapper $width={width} $height={height}>
        <S.Inner />
    </S.Wrapper>
);
