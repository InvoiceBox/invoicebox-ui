import React, { FC } from 'react';
import { useComponentPalette } from '../../../palette';
import * as S from './styles';
import { TDividerPalette } from './palette';

export const Divider: FC = () => {
    const palette = useComponentPalette<TDividerPalette>('divider');

    return <S.Divider $palette={palette} />;
};
