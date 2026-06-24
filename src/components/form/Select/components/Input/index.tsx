import React, { forwardRef } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../../../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../../../PureInput';
import { Arrow, TProps as TArrowProps } from '../../../../common/Arrow';
import { ResetButton } from '../../../ResetButton';
import { TSizes } from '../../../constants';
import { useInputStyles } from '../../../_hooks/useInputStyles';

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
            inFocus = false,
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
        const { inputLabel, paddingAndVariantOptions, modernPlaceholder } = useInputStyles({
            isHaveValue: !!value,
            useModernStyles,
            size,
            label,
            inFocus,
            placeholder,
        });

        const isShowResetIcon = !!value && !!onReset;

        return (
            <InputLabel
                inFocus={inFocus}
                label={inputLabel}
                required={required}
                useModernStyles={useModernStyles}
                size={size}
            >
                <S.ControlWrapper>
                    {modernPlaceholder}
                    <PureInput
                        ref={ref}
                        hasError={hasError}
                        inFocus={inFocus}
                        name={name}
                        placeholder={useModernStyles ? undefined : placeholder}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        value={value}
                        renderedValue={renderedValue}
                        readOnly
                        paddingRight={52}
                        onClick={onClick}
                        useModernStyles={useModernStyles}
                        {...paddingAndVariantOptions}
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
