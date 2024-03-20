import React, { FC, InputHTMLAttributes } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TPureInputPalette } from './palette';

export type TProps = InputHTMLAttributes<HTMLInputElement> & {
    paddingLeft?: number;
    paddingRight?: number;
    hasError?: boolean;
    inFocus?: boolean;
    hasBorder?: boolean;
    className?: never;
    palette?: Partial<TPureInputPalette>;
};

export const PureInput: FC<TProps> = ({
    paddingLeft = 18,
    paddingRight = 18,
    hasError = false,
    inFocus = false,
    hasBorder = true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className,
    palette,
    ...rest
}) => {
    const mergedPalette = useComponentPalette('pureInput', palette);

    return (
        <S.Wrapper
            variant="bodyMRegular"
            element="input"
            $paddingLeft={paddingLeft}
            $paddingRight={paddingRight}
            $hasError={hasError}
            $inFocus={inFocus}
            $hasBorder={hasBorder}
            $palette={mergedPalette}
            {...rest}
        />
    );
};
