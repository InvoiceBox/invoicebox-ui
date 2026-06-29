import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TPureInputPalette } from '../PureInput/palette';
import { TInputLabelPalette } from '../InputLabel/palette';
import { MODERN_STYLE_SIZE_PARAMS_MAP, TSizes } from '../constants';

type TProps = {
    visible: boolean;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop: number;
    size: TSizes;
    required?: boolean;
    children: ReactNode;
};

export const ModernPlaceholder: FC<TProps> = ({
    visible,
    paddingLeft = 20,
    paddingRight = 12,
    paddingTop,
    size,
    required = false,
    children,
}) => {
    const pureInputPalette = useComponentPalette<TPureInputPalette>('pureInput');
    const inputLabelPalette = useComponentPalette<TInputLabelPalette>('inputLabel');

    return (
        <S.Wrapper
            variant={MODERN_STYLE_SIZE_PARAMS_MAP[size].variant}
            $visible={visible}
            $paddingLeft={paddingLeft}
            $paddingRight={paddingRight}
            $paddingTop={paddingTop}
            $color={pureInputPalette.placeholder}
        >
            <S.TextContent>{children}</S.TextContent>
            {required && <S.Star $color={inputLabelPalette.error}>*</S.Star>}
        </S.Wrapper>
    );
};
