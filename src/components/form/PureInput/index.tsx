import React, { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes, useCallback } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TPureInputPalette } from './palette';

export type TProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onBlur' | 'onChange' | 'onFocus'> &
    InputHTMLAttributes<HTMLInputElement> & {
        paddingLeft?: number;
        paddingRight?: number;
        paddingTop?: number;
        paddingBottom?: number;
        hasError?: boolean;
        inFocus?: boolean;
        hasBorder?: boolean;
        isOnlyNumbers?: boolean;
        className?: never;
        element?: 'input' | 'textarea';
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
            element = 'input',
            ...rest
        },
        ref,
    ) => {
        const palette = useComponentPalette<TPureInputPalette>('pureInput');

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                const inputValue = event.target.value;
                event.target.value = isOnlyNumbers ? inputValue.replace(/[^0-9]/g, '') : inputValue;
                if (onChange) {
                    onChange(event);
                }
            },
            [isOnlyNumbers, onChange],
        );

        return (
            <S.Wrapper
                ref={ref}
                variant="bodyMRegular"
                // When never is remove then error
                element={element as never}
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
