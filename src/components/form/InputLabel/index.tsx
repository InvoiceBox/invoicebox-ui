import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { TInputLabelPalette } from './palette';
import { useComponentPalette } from '../../../palette';

export type TProps = {
    disabled?: boolean;
    label?: string;
    inFocus?: boolean;
    children: ReactNode;
};

export const InputLabel: FC<TProps> = ({ disabled = false, label, inFocus = false, children }) => {
    const palette = useComponentPalette<TInputLabelPalette>('inputLabel');

    return (
        <S.Wrapper $palette={palette} $disabled={disabled} $isLabel={!!label}>
            {label && (
                <S.Label $palette={palette} $inFocus={inFocus} variant="captionRegular">
                    {label}
                </S.Label>
            )}
            {children}
        </S.Wrapper>
    );
};
