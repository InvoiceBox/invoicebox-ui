import styled, { css } from 'styled-components';

export const Root = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const Backdrop = styled.div<{ $bgColor: string; $isVisible: boolean }>`
    position: absolute;
    inset: 0;
    background-color: ${({ $bgColor }) => $bgColor};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transition: opacity 300ms ease;
`;

export const Sheet = styled.div<{
    $isDragging: boolean;
    $isErrorBorder?: boolean;
    $errorColor: string;
    $borderColor?: string;
    $overflow?: string;
}>`
    position: relative;
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border-radius: 10px 10px 0 0;
    will-change: transform;
    transition: transform 300ms cubic-bezier(0.32, 0.72, 0, 1);

    ${({ $isDragging }) =>
        $isDragging &&
        css`
            transition: none;
        `}

    ${({ $isErrorBorder, $errorColor, $borderColor }) =>
        ($isErrorBorder || $borderColor) &&
        css`
            border-top: 2px solid ${$borderColor || $errorColor};
        `}

    ${({ $overflow }) =>
        $overflow === 'visible'
            ? css`
                  overflow: visible;
              `
            : css`
                  overflow-y: auto;
              `}
`;

export const DragHandle = styled.div<{ $bg: string }>`
    position: relative;
    flex: 0 0 auto;
    height: 28px;
    background-color: ${({ $bg }) => $bg};
    border-radius: 10px 10px 0 0;
    touch-action: none;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`;

export const DragIndicator = styled.div`
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    border-radius: 99px;
    background-color: rgba(53, 63, 71, 0.2);
`;

export const Title = styled.div<{ $bg: string }>`
    background-color: ${({ $bg }) => $bg};
    padding: 30px;
    position: relative;
    text-align: center;
    border-radius: 10px 10px 0 0;
`;

export const ChildrenWrapper = styled.div<{
    $isPadding: boolean;
    $bgColor: string;
    $isBorderRadius?: boolean;
}>`
    ${({ $isPadding }) => $isPadding && 'padding: 32px 16px 36px'};
    background-color: ${({ $bgColor }) => $bgColor};

    ${({ $isBorderRadius }) =>
        $isBorderRadius &&
        css`
            border-radius: 10px 10px 0 0;
        `}
`;
