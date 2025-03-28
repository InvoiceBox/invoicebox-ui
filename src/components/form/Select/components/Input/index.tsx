import React, { FC } from 'react';
import * as S from './styles';
import { InputLabel, TProps as TInputLabelProps } from '../../../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../../../PureInput';
import { Arrow, TProps as TArrowProps } from '../../../../common/Arrow';
import { ResetButton } from '../../../ResetButton';

export type TProps = Pick<TInputLabelProps, 'inFocus' | 'label'> &
    Pick<TPureInputProps, 'hasError' | 'placeholder' | 'name' | 'onFocus' | 'onBlur' | 'value'> &
    Pick<TArrowProps, 'isOpen'> & { onReset?: () => void };

export const Input: FC<TProps> = ({
    hasError,
    inFocus,
    placeholder,
    onFocus,
    onBlur,
    value,
    name,
    label,
    isOpen,
    onReset,
}) => {
    const isShowResetIcon = !!value && !!onReset;

    return (
        <InputLabel inFocus={inFocus} label={label}>
            <S.ControlWrapper>
                <PureInput
                    hasError={hasError}
                    inFocus={inFocus}
                    name={name}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={value}
                    readOnly
                    paddingRight={52}
                />

                <S.IconWrapper $pointerEvents={isShowResetIcon ? 'default' : 'none'}>
                    {isShowResetIcon ? <ResetButton onClick={onReset} /> : <Arrow isOpen={isOpen} />}
                </S.IconWrapper>
            </S.ControlWrapper>
        </InputLabel>
    );
};
