import styled from 'styled-components';
import { typography } from '../../common/Typography/typography';
import { TTogglePalette } from './palette';

export type TToggleSize = 'small' | 'medium';

export const Label = styled.label<{ $color: string; $disabled?: boolean; $disabledColor: string }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    color: ${({ $color, $disabledColor, $disabled }) => ($disabled ? $disabledColor : $color)};
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
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
        border: number;
    }
> = {
    small: {
        width: 27,
        height: 16,
        circleSize: 14,
        labelVariant: 'captionRegular',
        leftChecked: 11,
        left: 0,
        border: 1,
    },
    medium: {
        width: 32.225,
        height: 19.2,
        circleSize: 16,
        labelVariant: 'headline5',
        leftChecked: 13,
        left: 0,
        border: 1.5,
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
    flex-shrink: 0;
    box-sizing: border-box;
    border: ${({ $variant }) => INPUT_VARIANT_MAP[$variant].border}px solid;
    border-color: rgba(0, 0, 0, 0);

    -webkit-appearance: none;
    box-shadow: none;

    background: ${({ $palette }) => $palette.defaultBg};
    border-radius: 50px;

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
        border: ${({ $variant }) => INPUT_VARIANT_MAP[$variant].border}px solid
            ${({ $palette }) => $palette.disabledBorder};
        background: white;

        &:after {
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
        }
    }
`;
