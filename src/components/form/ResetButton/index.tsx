import React, { FC } from 'react';
import { CrossIcon } from './CrossIcon';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TResetButtonPalette } from './palette';

export type TProps = {
    onClick: () => void;
};

export const ResetButton: FC<TProps> = ({ onClick }) => {
    const palette = useComponentPalette<TResetButtonPalette>('resetButton');

    return (
        <S.ButtonWrapper type="button" onClick={onClick} $color={palette.color}>
            <CrossIcon />
        </S.ButtonWrapper>
    );
};
