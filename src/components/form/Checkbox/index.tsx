import React, { FC, InputHTMLAttributes, useMemo } from 'react';
import { Typography } from '../../common/Typography';
import { Tooltip } from '../../common/Tooltip';
import { useComponentPalette } from '../../../palette';
import { TCheckboxPalette } from './palette';
import * as S from './styles';

export type TProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    checked: boolean;
    label?: string | React.ReactNode;
    disabled?: boolean;
    disabledText?: string;
};

export const Checkbox: FC<TProps> = ({
    disabled = false,
    className,
    checked = false,
    disabledText,
    label,
    ...props
}) => {
    const palette = useComponentPalette<TCheckboxPalette>('checkbox');

    const content = useMemo(
        () => (
            <>
                <S.HiddenCheckbox type="checkbox" disabled={disabled} checked={checked} {...props} />
                <S.StyledCheckbox>
                    <S.CheckboxIcon />
                </S.StyledCheckbox>
            </>
        ),
        [checked, disabled, props],
    );

    return (
        <S.CheckboxLabel $checked={checked} $disabled={disabled} $palette={palette} className={className}>
            <S.CheckboxContainer>
                {disabled && disabledText ? <Tooltip overlay={disabledText}>{content}</Tooltip> : content}
            </S.CheckboxContainer>
            {label && <Typography variant="bodyMRegular">{label}</Typography>}
        </S.CheckboxLabel>
    );
};

export default React.memo(Checkbox);
