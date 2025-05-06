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
};

export const Toggle: FC<TProps> = ({ checked, variant = 'small', label, onChange, ...other }) => {
    const palette = useComponentPalette<TTogglePalette>('toggle');

    const { labelVariant } = INPUT_VARIANT_MAP[variant as TToggleSize];

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <S.Label>
            <S.StyledInput
                $variant={variant as TToggleSize}
                $palette={palette}
                checked={checked}
                onChange={handleChange}
                type="checkbox"
                {...other}
            />
            <Typography variant={labelVariant}>{label}</Typography>
        </S.Label>
    );
};
