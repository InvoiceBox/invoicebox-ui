import styled from 'styled-components';
import { CheckIcon } from './CheckIcon';
import { TCheckboxPalette } from './palette';

const TRANSITION = 'all .2s ease-in-out';
const BORDER_RADIUS_MIN = 4;

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export const HiddenCheckbox = styled.input`
    display: none;
`;

export const CheckboxIcon = styled(CheckIcon)`
    transition: ${TRANSITION};
`;

export const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: ${BORDER_RADIUS_MIN}px;
    transition: ${TRANSITION};
`;

const getStylesCheckbox = (palette: TCheckboxPalette, disabled: boolean, checked: boolean) => {
    if (disabled) {
        if (checked) {
            return `background-color: ${palette.disabledBg}; border: none`;
        }
        return `border: 1px solid ${palette.disabledBorder}`;
    }
    if (checked) {
        return `background-color: ${palette.checkedBg}; border: none`;
    }
    return `border: 1px solid ${palette.borderDefault}`;
};

const getHoverStylesCheckbox = (palette: TCheckboxPalette, disabled: boolean, checked: boolean) => {
    if (disabled) {
        if (checked) {
            return `background-color: ${palette.disabledBg}; border: none`;
        }
        return `border: 1px solid ${palette.disabledBg}`;
    }
    if (checked) {
        return `background-color: ${palette.checkedHoverBg}; border: none`;
    }
    return `border: 1px solid ${palette.borderHover}`;
};

export const CheckboxLabel = styled.label<{
    $checked: boolean;
    $disabled: boolean;
    $palette: TCheckboxPalette;
}>`
    display: flex;
    align-items: center;
    grid-column-gap: 10px;
    user-select: none;
    width: fit-content;
    cursor: pointer;
    color: ${({ $palette }) => $palette.labelColor};

    ${StyledCheckbox} {
        ${({ $checked, $disabled, $palette }) => getStylesCheckbox($palette, $disabled, $checked)};

        ${CheckboxIcon} {
            opacity: ${({ $checked }) => ($checked ? 1 : 0)};
        }
    }

    &:hover {
        ${StyledCheckbox} {
            ${({ $checked, $disabled, $palette }) => getHoverStylesCheckbox($palette, $disabled, $checked)};
        }
    }
`;
