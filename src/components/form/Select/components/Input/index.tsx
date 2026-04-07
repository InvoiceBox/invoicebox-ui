import React, { forwardRef, useMemo } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../../../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../../../PureInput';
import { Arrow, TProps as TArrowProps } from '../../../../common/Arrow';
import { ResetButton } from '../../../ResetButton';
import { MODERN_STYLE_SIZE_PARAMS_MAP, SIZE_PARAMS_MAP, TSizes } from '../../../constants';

export type TProps = Pick<TInputLabelProps, 'inFocus' | 'label' | 'required'> &
    Pick<TPureInputProps, 'hasError' | 'placeholder' | 'name' | 'onFocus' | 'onBlur' | 'value' | 'onClick'> &
    Pick<TArrowProps, 'isOpen'> & {
        onReset?: () => void;
        size?: TSizes;
        renderedValue?: React.ReactNode;
        useModernStyles?: boolean;
    };

export const Input = forwardRef<HTMLInputElement, TProps>(
    (
        {
            hasError,
            inFocus,
            placeholder,
            onFocus,
            onBlur,
            value,
            renderedValue,
            name,
            label,
            isOpen,
            onReset,
            size = 'M',
            onClick,
            required,
            useModernStyles = false,
        },
        ref,
    ) => {
        const isShowResetIcon = !!value && !!onReset;

        const paddingOptions = useMemo(() => {
            if (value && useModernStyles) {
                return MODERN_STYLE_SIZE_PARAMS_MAP[size];
            } else {
                return SIZE_PARAMS_MAP[size];
            }
        }, [size, value, useModernStyles]);

        return (
            <InputLabel
                inFocus={inFocus}
                label={label}
                required={required}
                useModernStyles={useModernStyles}
                size={size}
            >
                <S.ControlWrapper>
                    <PureInput
                        ref={ref}
                        hasError={hasError}
                        inFocus={inFocus}
                        name={name}
                        placeholder={placeholder}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        value={value}
                        renderedValue={renderedValue}
                        readOnly
                        paddingRight={52}
                        onClick={onClick}
                        useModernStyles={useModernStyles}
                        {...paddingOptions}
                    />

                    <S.IconWrapper $pointerEvents={isShowResetIcon ? 'default' : 'none'}>
                        {isShowResetIcon ? <ResetButton onClick={onReset} /> : <Arrow isOpen={isOpen} />}
                    </S.IconWrapper>
                </S.ControlWrapper>
            </InputLabel>
        );
    },
);

Input.displayName = 'Input';
