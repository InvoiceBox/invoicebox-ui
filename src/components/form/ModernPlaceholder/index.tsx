import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TPureInputPalette } from '../PureInput/palette';
import { TInputLabelPalette } from '../InputLabel/palette';
import { SIZE_PARAMS_MAP, TSizes } from '../constants';

type TProps = {
    visible: boolean;
    paddingLeft?: number;
    paddingTop: number;
    size: TSizes;
    required?: boolean;
    children: ReactNode;
};

export const ModernPlaceholder: FC<TProps> = ({
    visible,
    paddingLeft = 20,
    paddingTop,
    size,
    required = false,
    children,
}) => {
    const pureInputPalette = useComponentPalette<TPureInputPalette>('pureInput');
    const inputLabelPalette = useComponentPalette<TInputLabelPalette>('inputLabel');

    return (
        <S.Wrapper
            variant={SIZE_PARAMS_MAP[size].variant}
            $visible={visible}
            $paddingLeft={paddingLeft}
            $paddingTop={paddingTop}
            $color={pureInputPalette.placeholder}
        >
            {children}
            {required && <S.Star $color={inputLabelPalette.error}>*</S.Star>}
        </S.Wrapper>
    );
};
