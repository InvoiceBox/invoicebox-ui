import styled, { css } from 'styled-components';
import { TDropdownPalette } from './palette';

const hidden = css`
    visibility: hidden;
    opacity: 0;
    transition:
        visibility 0ms 200ms,
        opacity 200ms 0ms ease;
`;

const visible = css`
    visibility: visible;
    opacity: 1;
    transition:
        visibility 0ms 0ms,
        opacity 200ms 0ms ease;
`;

export const Wrapper = styled.div<{
    $isVisible: boolean;
    $isAbove: boolean;
    $translateY: string;
    $positionVertical: number;
    $positionLeft: string;
    $positionRight: string;
    $minWidth: string;
    $width: string;
    $zIndex?: number;
    $palette: TDropdownPalette;
}>`
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 10px 17px ${({ $palette }) => $palette.shadow};
    background: ${({ $palette }) => $palette.bg};

    min-width: ${({ $minWidth }) => $minWidth};
    width: ${({ $width }) => $width};

    position: absolute;

    left: ${({ $positionLeft }) => $positionLeft};
    right: ${({ $positionRight }) => $positionRight};

    z-index: ${({ $zIndex }) => $zIndex ?? 5};

    ${({ $isVisible }) => ($isVisible ? visible : hidden)};

    ${({ $isAbove, $positionVertical }) =>
        $isAbove
            ? css`
                  bottom: calc(100% + ${$positionVertical}px);
              `
            : css`
                  top: calc(100% + ${$positionVertical}px);
              `};

    ${({ $translateY }) => css`
        transform: translateY(${$translateY});
    `};
`;
