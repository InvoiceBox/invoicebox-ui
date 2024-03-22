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
    zIndex?: number | 'auto';
};

export const InputLabel: FC<TProps> = ({
    disabled = false,
    label,
    inFocus = false,
    children,
    palette,
    zIndex = 1,
}) => {
    const mergedPalette = useComponentPalette('inputLabel', palette);

    return (
        <S.Wrapper $palette={mergedPalette} $disabled={disabled} $isLabel={!!label}>
            {label && (
                <S.Label $palette={mergedPalette} $inFocus={inFocus} variant="captionRegular">
                    {label}
                </S.Label>
            )}
            <S.InputWrapper $zIndex={zIndex}>{children}</S.InputWrapper>
        </S.Wrapper>
    );
};
