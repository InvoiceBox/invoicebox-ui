import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { TInputLabelPalette } from './palette';
import { useComponentPalette } from '../../../palette';

export type TProps = {
    disabled?: boolean;
    label?: string;
    inFocus?: boolean;
    children: ReactNode;
    palette?: Partial<TInputLabelPalette>;
};

export const InputLabel: FC<TProps> = ({ disabled = false, label, inFocus = false, children, palette }) => {
    const mergedPalette = useComponentPalette('inputLabel', palette);

    return (
        <S.Wrapper $palette={mergedPalette} $disabled={disabled} $isLabel={!!label}>
            {label && (
                <S.Label $palette={mergedPalette} $inFocus={inFocus} variant="captionRegular">
                    {label}
                </S.Label>
            )}
            {children}
        </S.Wrapper>
    );
};
