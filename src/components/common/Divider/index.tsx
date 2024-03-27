import React, { FC } from 'react';
import { useComponentPalette } from '../../../palette';
import * as S from './styles';
import { TDividerPalette } from './palette';

export type TProps = {
    palette?: Partial<TDividerPalette>;
};

export const Divider: FC<TProps> = ({ palette }) => {
    const mergedPalette = useComponentPalette('divider', palette);

    return <S.Divider $palette={mergedPalette} />;
};
