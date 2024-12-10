import React, { ChangeEvent, InputHTMLAttributes, useCallback } from 'react';
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
    isOnlyNumbers?: boolean;
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
            isOnlyNumbers = false,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            className,
            onChange,
            ...rest
        },
        ref,
    ) => {
        const palette = useComponentPalette<TPureInputPalette>('pureInput');

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                const inputValue = event.target.value;
                const replacedValue = isOnlyNumbers ? inputValue.replace(/[^0-9]/g, '') : inputValue;

                if (onChange) {
                    const formattedEvent = {
                        ...event,
                        target: {
                            ...event.target,
                            value: replacedValue,
                        },
                    } as React.ChangeEvent<HTMLInputElement>;
                    onChange(formattedEvent);
                }
            },
            [isOnlyNumbers, onChange],
        );

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
                onChange={handleChange}
                {...rest}
            />
        );
    },
);

PureInput.displayName = 'PureInput';
