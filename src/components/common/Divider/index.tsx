import React, { FC } from 'react';
import { useComponentPalette } from '../../../palette';
import * as S from './styles';
import { TDividerPalette } from './palette';
import { disableCSSOM } from '../../../helpers/disableCSSOM';

export type TProps = {
    palette?: Partial<TDividerPalette>;
};

const DividerInner: FC<TProps> = ({ palette }) => {
    const mergedPalette = useComponentPalette('divider', palette);

    return <S.Divider $palette={mergedPalette} />;
};

export const Divider = disableCSSOM(DividerInner);
