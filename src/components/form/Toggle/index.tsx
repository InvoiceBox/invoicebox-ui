import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import * as S from './styles';
import { INPUT_VARIANT_MAP, TToggleSize } from './styles';
import { Typography } from '../../common/Typography';
import { useComponentPalette } from '../../../palette';
import { TTogglePalette } from './palette';

export type TProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange: (value: boolean) => void;
    label: string;
    variant?: TToggleSize;
    alwaysHighlighted?: boolean;
};

export const Toggle: FC<TProps> = ({
    checked,
    variant = 'small',
    label,
    onChange,
    disabled,
    alwaysHighlighted = false,
    ...other
}) => {
    const palette = useComponentPalette<TTogglePalette>('toggle');

    const { labelVariant } = INPUT_VARIANT_MAP[variant as TToggleSize];

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <S.Label $color={palette.label} $disabled={disabled} $disabledColor={palette.disabledLabel}>
            <S.StyledInput
                $variant={variant as TToggleSize}
                $palette={palette}
                $alwaysHighlighted={alwaysHighlighted}
                checked={checked}
                onChange={handleChange}
                type="checkbox"
                disabled={disabled}
                {...other}
            />
            {label && <Typography variant={labelVariant}>{label}</Typography>}
        </S.Label>
    );
};
