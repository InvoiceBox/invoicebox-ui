import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { TInputLabelPalette } from './palette';
import { useComponentPalette } from '../../../palette';

export type TProps = {
    disabled?: boolean;
    label?: string;
    required?: boolean;
    inFocus?: boolean;
    children: ReactNode;
};

export const InputLabel: FC<TProps> = ({
    disabled = false,
    label,
    inFocus = false,
    children,
    required = false,
}) => {
    const palette = useComponentPalette<TInputLabelPalette>('inputLabel');

    return (
        <S.Wrapper $palette={palette} $disabled={disabled} $isLabel={!!label}>
            {label && (
                <S.Label $palette={palette} $inFocus={inFocus} variant="captionRegular" $required={required}>
                    {label}
                </S.Label>
            )}
            {children}
        </S.Wrapper>
    );
};
