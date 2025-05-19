import styled from 'styled-components';
import { TPureInputPalette } from './palette';
import { InputWithTypography } from '../../common/Typography';
import { ElementType } from 'react';
import { typography } from '../../common/Typography/typography';

export const getPureInputStyled = (component: ElementType) => styled(component)<{
    $paddingLeft: number;
    $paddingRight: number;
    $paddingTop: number;
    $paddingBottom: number;
    $hasError: boolean;
    $inFocus: boolean;
    $hasBorder: boolean;
    $palette: TPureInputPalette;
    // only for StyledCurrencyInputFromLibrary
    $variant?: keyof typeof typography;
}>`
    ${({ $variant }) => $variant && typography[$variant]}

    resize: none;
    color: ${({ $palette }) => $palette.text};
    border-radius: 10px;
    outline: none;
    width: 100%;
    background-color: ${({ $palette }) => $palette.bg};
    transition: all 0.2s ease-in-out 0s;
    box-sizing: border-box;
    padding-right: ${({ $paddingRight }) => $paddingRight}px;
    padding-left: ${({ $paddingLeft }) => $paddingLeft}px;
    padding-top: ${({ $paddingTop }) => $paddingTop}px;
    padding-bottom: ${({ $paddingBottom }) => $paddingBottom}px;
    border: 1px solid
        ${({ $hasError, $inFocus, $hasBorder, $palette }) =>
            !$hasBorder
                ? 'transparent'
                : $hasError
                  ? $palette.error
                  : $inFocus
                    ? $palette.borderFocus
                    : $palette.border};

    &::placeholder {
        color: ${({ $palette }) => $palette.placeholder};
    }

    /*
        Убирает браузерные стрелочки вверх/вниз
        у инпута с типом number
    */

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type='number'] {
        -moz-appearance: textfield;
    }

    /* 
        Если пользователь заполнил поле при помощи браузерного автокомплита, то меняется цвет фона и шрифта
        Чтобы этого не происходило существует этот хак
    */

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        transition:
            background-color 0s 600000s,
            color 0s 600000s !important;
    }
`;

export const Wrapper = getPureInputStyled(InputWithTypography);
