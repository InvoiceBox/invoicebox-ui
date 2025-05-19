import React, { ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes, useCallback } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TPureInputPalette } from './palette';
import { TInputWithTypographyProps } from '../../common/Typography';

export type TProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onBlur' | 'onChange' | 'onFocus'> &
    InputHTMLAttributes<HTMLInputElement> &
    Partial<Pick<TInputWithTypographyProps, 'variant'>> & {
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
            paddingLeft = 20,
            paddingRight = 12,
            paddingTop = 13,
            paddingBottom = 13,
            hasError = false,
            inFocus = false,
            hasBorder = true,
            isOnlyNumbers = false,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            className,
            onChange,
            element = 'input',
            variant = 'bodyMRegular',
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
                variant={variant}
                element={element}
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
