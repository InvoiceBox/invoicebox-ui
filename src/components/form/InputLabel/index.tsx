import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { TInputLabelPalette } from './palette';
import { useComponentPalette } from '../../../palette';
import { MODERN_STYLE_SIZE_PARAMS_MAP, TSizes } from '../constants';

export type TProps = {
    disabled?: boolean;
    label?: string;
    required?: boolean;
    inFocus?: boolean;
    children: ReactNode;
    useModernStyles?: boolean;
    size?: TSizes;
    left?: number;
};

export const InputLabel: FC<TProps> = ({
    disabled = false,
    label,
    inFocus = false,
    children,
    required = false,
    useModernStyles = false,
    size,
    left,
}) => {
    const palette = useComponentPalette<TInputLabelPalette>('inputLabel');

    return (
        <S.Wrapper
            $palette={palette}
            $disabled={disabled}
            $isLabel={!!label}
            $useModernStyles={useModernStyles}
        >
            {label && (
                <S.Label
                    $palette={palette}
                    $inFocus={inFocus}
                    variant={
                        size && useModernStyles
                            ? MODERN_STYLE_SIZE_PARAMS_MAP[size].labelVariant
                            : 'captionRegular'
                    }
                    $required={required}
                    $useModernStyles={useModernStyles}
                    $paddingTop={
                        size && useModernStyles ? MODERN_STYLE_SIZE_PARAMS_MAP[size].labelPaddingTop : 0
                    }
                    $left={left}
                >
                    {label}
                </S.Label>
            )}
            {children}
        </S.Wrapper>
    );
};
