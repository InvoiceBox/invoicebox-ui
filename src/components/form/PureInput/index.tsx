import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TPureInputPalette } from './palette';

export type TProps = InputHTMLAttributes<HTMLInputElement> & {
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    hasError?: boolean;
    inFocus?: boolean;
    hasBorder?: boolean;
    className?: never;
};

export const PureInput = React.forwardRef<HTMLInputElement, TProps>(
    (
        {
            paddingLeft = 18,
            paddingRight = 18,
            paddingTop = 12,
            paddingBottom = 12,
            hasError = false,
            inFocus = false,
            hasBorder = true,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            className,
            ...rest
        },
        ref,
    ) => {
        const palette = useComponentPalette<TPureInputPalette>('pureInput');

        return (
            <S.Wrapper
                ref={ref}
                variant="bodyMRegular"
                element="input"
                $paddingLeft={paddingLeft}
                $paddingRight={paddingRight}
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
                $hasError={hasError}
                $inFocus={inFocus}
                $hasBorder={hasBorder}
                $palette={palette}
                {...rest}
            />
        );
    },
);

PureInput.displayName = 'PureInput';
