import styled, { css, keyframes } from 'styled-components';
import { Typography } from '../../common/Typography';
import { TInputLabelPalette } from './palette';
import { LABEL_PADDING } from './constants';

const labelFadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(4px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Label = styled(Typography)<{
    $inFocus: boolean;
    $palette: TInputLabelPalette;
    $required?: boolean;
    $useModernStyles?: boolean;
    $paddingTop?: number;
    $left?: number;
}>`
    border-radius: 10px;
    position: absolute;
    top: ${({ $paddingTop }) => ($paddingTop ? `${$paddingTop}px` : 0)};
    left: ${({ $left }) => (typeof $left === 'number' ? `${$left}px` : '10px')};
    background-color: ${({ $palette, $useModernStyles }) => ($useModernStyles ? 'none' : $palette.bg)};
    padding: 0 ${LABEL_PADDING}px;
    z-index: 2;
    transition: color 0.2s ease-in-out 0s;
    animation: ${labelFadeIn} 0.15s ease;
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
    $useModernStyles?: boolean;
}>`
    position: relative;
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
