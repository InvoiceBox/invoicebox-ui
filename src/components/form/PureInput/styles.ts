import styled from 'styled-components';
import { TPureInputPalette } from './palette';
import { InputWithTypography } from '../../common/Typography';

export const Wrapper = styled(InputWithTypography)<{
    $paddingLeft: number;
    $paddingRight: number;
    $paddingTop: number;
    $paddingBottom: number;
    $hasError: boolean;
    $inFocus: boolean;
    $hasBorder: boolean;
    $palette: TPureInputPalette;
}>`
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
