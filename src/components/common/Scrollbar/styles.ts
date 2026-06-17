import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
    $maxHeight: number | string;
    $trackWidth: number;
    $thumb: string;
    $autoHeight: boolean;
}>`
    overflow-y: auto;
    overflow-x: hidden;

    ${({ $autoHeight, $maxHeight }) =>
        $autoHeight
            ? css`
                  max-height: ${typeof $maxHeight === 'number' ? `${$maxHeight}px` : $maxHeight};
              `
            : css`
                  height: 100%;
              `}

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${({ $thumb }) => $thumb} transparent;

    /* WebKit/Blink */
    &::-webkit-scrollbar {
        width: ${({ $trackWidth }) => $trackWidth}px;
        height: ${({ $trackWidth }) => $trackWidth}px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ $thumb }) => $thumb};
        border-radius: 4px;
    }
`;
