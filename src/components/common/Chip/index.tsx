import React, { FC, ReactNode } from 'react';
import { TChipSize, Wrapper } from './styles';
import { Typography } from '../Typography';

export type TProps = {
    label: string | ReactNode;
    color: string;
    bgColor: string;
    size?: TChipSize;
};

export const Chip: FC<TProps> = ({ label, bgColor, color, size = 'xs' }) => (
    <Wrapper $color={color} $backgroundColor={bgColor} $size={size}>
        {typeof label === 'string' ? <Typography variant="smallMedium">{label}</Typography> : label}
    </Wrapper>
);
