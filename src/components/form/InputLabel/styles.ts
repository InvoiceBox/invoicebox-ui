import styled, { css } from 'styled-components';
import { Typography } from '../../common/Typography';
import { TInputLabelPalette } from './palette';

export const Label = styled(Typography)<{
    $inFocus: boolean;
    $palette: TInputLabelPalette;
    $required?: boolean;
}>`
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 10px;
    background-color: ${({ $palette }) => $palette.bg};
    padding: 0 10px;
    z-index: 2;
    transition: color 0.2s ease-in-out 0s;
    color: ${({ $inFocus, $palette }) => ($inFocus ? $palette.textHighlight : $palette.text)};

    ${({ $required, $palette }) =>
        $required &&
        css`
      &::after {
        content: " *";
        color: ${() => $palette.error};
    `}
`;

export const Wrapper = styled.div<{
    $disabled: boolean;
    $isLabel: boolean;
    $palette: TInputLabelPalette;
}>`
    position: relative;
    padding-top: ${({ $isLabel }) => ($isLabel ? 10 : 0)}px;
    width: 100%;
    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

    &:hover ${Label} {
        ${({ $disabled, $palette }) =>
            !$disabled &&
            css`
                color: ${$palette.textHighlight};
            `};
    }
`;
