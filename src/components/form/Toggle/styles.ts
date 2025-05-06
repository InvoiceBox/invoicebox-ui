import styled from 'styled-components';
import { typography } from '../../common/Typography/typography';
import { TTogglePalette } from './palette';

export type TToggleSize = 'small' | 'medium';

export const Label = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    box-sizing: border-box;
`;

export const INPUT_VARIANT_MAP: Record<
    TToggleSize,
    {
        width: number;
        height: number;
        circleSize: number;
        labelVariant: keyof typeof typography;
        leftChecked: number;
        left: number;
    }
> = {
    small: {
        width: 27,
        height: 16,
        circleSize: 14,
        labelVariant: 'captionRegular',
        leftChecked: 12,
        left: 1,
    },
    medium: {
        width: 33,
        height: 20,
        circleSize: 16,
        labelVariant: 'headline5',
        leftChecked: 15.5,
        left: 1.5,
    },
};

export const StyledInput = styled.input<{
    $palette: TTogglePalette;
    $variant: TToggleSize;
    checked?: boolean;
}>`
    position: relative;
    width: ${({ $variant }) => INPUT_VARIANT_MAP[$variant].width}px;
    height: ${({ $variant }) => INPUT_VARIANT_MAP[$variant].height}px;
    cursor: pointer;

    -webkit-appearance: none;
    box-shadow: none;

    border: none;
    background: ${({ $palette }) => $palette.defaultBg};
    border-radius: 30px;

    &:after {
        content: '';
        display: block;
        position: absolute;
        left: ${({ $variant }) => INPUT_VARIANT_MAP[$variant].left}px;
        top: 50%;
        transform: translateY(-50%);

        width: ${({ $variant }) => INPUT_VARIANT_MAP[$variant].circleSize}px;
        height: ${({ $variant }) => INPUT_VARIANT_MAP[$variant].circleSize}px;
        border-radius: 50%;
        background-color: ${({ $palette }) => $palette.circle};
        transition: all 0.2s ease-in-out 0s;
    }

    &:checked::after {
        left: ${({ $variant }) => INPUT_VARIANT_MAP[$variant].leftChecked}px;
    }

    &:checked {
        background: ${({ $palette }) => $palette.activeBg};
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
