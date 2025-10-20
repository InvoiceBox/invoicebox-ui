import React, { forwardRef } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../../../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../../../PureInput';
import { Arrow, TProps as TArrowProps } from '../../../../common/Arrow';
import { ResetButton } from '../../../ResetButton';
import { SIZE_PARAMS_MAP, TSizes } from '../../../constants';

export type TProps = Pick<TInputLabelProps, 'inFocus' | 'label' | 'required'> &
    Pick<TPureInputProps, 'hasError' | 'placeholder' | 'name' | 'onFocus' | 'onBlur' | 'value' | 'onClick'> &
    Pick<TArrowProps, 'isOpen'> & { onReset?: () => void; size?: TSizes; renderedValue?: React.ReactNode };

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
        },
        ref,
    ) => {
        const isShowResetIcon = !!value && !!onReset;

        return (
            <InputLabel inFocus={inFocus} label={label} required={required}>
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
                        {...SIZE_PARAMS_MAP[size]}
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
