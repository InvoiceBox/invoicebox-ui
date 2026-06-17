import styled, { css } from 'styled-components';
import { TDropdownPalette } from './palette';

// Невидимый якорь в потоке: по его родителю (поле-триггер) считаем позицию портал-дропдауна.
// display:none — не влияет на вёрстку, но parentElement (само поле) доступен для измерений.
export const Anchor = styled.span`
    display: none;
`;

// Слой-обёртка дропдауна: вынесена порталом в body и спозиционирована fixed точно над полем
// (через inline top/left/width/height). pointer-events:none — сам слой не перехватывает клики
// (его площадь = полю), кликабелен только внутренний Wrapper.
export const PositionLayer = styled.div`
    position: fixed;
    z-index: 1000;
    pointer-events: none;
`;

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
    $usePadding?: boolean;
}>`
    pointer-events: auto;
    padding: ${({ $usePadding }) => ($usePadding ? '8px 0;' : 'none')};
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 4px 50px 0 ${({ $palette }) => $palette.shadow};
    background: ${({ $palette }) => $palette.bg};
    outline: 1px solid ${({ $palette }) => $palette.bg};

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
