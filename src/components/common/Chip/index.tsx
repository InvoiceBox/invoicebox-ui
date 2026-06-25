import React, { FC, ReactNode } from 'react';
import { TChipSize, Wrapper } from './styles';
import { Typography } from '../Typography';

export type TChipVariant = 'primary' | 'error' | 'warning' | 'info' | 'default' | 'individual' | 'legal';
export type TChipType = 'filled' | 'soft' | 'outlined';

// Семантическая палитра (значения по дизайн-токенам; при желании заменить на theme).
const PALETTE: Record<TChipVariant, { solid: string; soft: string; text: string }> = {
    primary: { solid: '#2BAA5D', soft: 'rgba(43, 170, 93, 0.12)', text: '#279954' },
    error: { solid: '#EB5757', soft: 'rgba(235, 87, 87, 0.16)', text: '#D34E4E' },
    warning: { solid: '#FEBC59', soft: 'rgba(254, 188, 89, 0.16)', text: '#E5A950' },
    info: { solid: '#6590FD', soft: 'rgba(101, 144, 253, 0.16)', text: '#5B82E4' },
    default: { solid: '#9A9FA3', soft: 'rgba(53, 63, 71, 0.08)', text: '#72797F' },
    individual: { solid: '#5119B7', soft: 'rgba(81, 25, 183, 0.16)', text: '#5119B7' },
    legal: { solid: '#006C9C', soft: 'rgba(0, 108, 156, 0.16)', text: '#006C9C' },
};

const resolve = (
    variant: TChipVariant,
    type: TChipType,
): { color: string; bgColor: string; borderColor: string } => {
    const p = PALETTE[variant];
    if (type === 'filled') return { color: '#FFFFFF', bgColor: p.solid, borderColor: 'transparent' };
    if (type === 'soft') return { color: p.text, bgColor: p.soft, borderColor: 'transparent' };
    return { color: p.text, bgColor: 'transparent', borderColor: p.solid }; // outlined
};

type TPropsBase = {
    label: string | ReactNode;
    size?: TChipSize;
};
// Старый путь: сырые цвета (обратная совместимость — существующие вызовы не меняются).
type TPropsRaw = TPropsBase & {
    color: string;
    bgColor: string;
    variant?: never;
    type?: never;
};
// Новый путь: семантика (variant + type) → цвета раскладываются внутри.
type TPropsSemantic = TPropsBase & {
    variant: TChipVariant;
    type?: TChipType;
    color?: never;
    bgColor?: never;
};
export type TProps = TPropsRaw | TPropsSemantic;

export const Chip: FC<TProps> = (props) => {
    const { label, size = 'xs' } = props;
    const { color, bgColor, borderColor } =
        'variant' in props && props.variant
            ? resolve(props.variant, props.type ?? 'filled')
            : { color: props.color, bgColor: props.bgColor, borderColor: 'transparent' };

    return (
        <Wrapper $color={color} $backgroundColor={bgColor} $borderColor={borderColor} $size={size}>
            {typeof label === 'string' ? <Typography variant="labelsHintsBold">{label}</Typography> : label}
        </Wrapper>
    );
};
