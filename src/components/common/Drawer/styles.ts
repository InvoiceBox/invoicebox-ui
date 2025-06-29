import styled, { css } from 'styled-components';
import { BottomSheet as LibBottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { TDrawerPalette } from './palette';

export const BottomSheet = styled(LibBottomSheet)<{
    $isHaveHeader: boolean;
    $palette: TDrawerPalette;
    $overflow?: string;
}>`
    --rsbs-backdrop-bg: ${({ $palette }) => $palette.backdropBg};
    --rsbs-bg: ${({ $palette }) => $palette.bg};
    --rsbs-overlay-rounded: 10px;

    & [data-rsbs-overlay],
    [data-rsbs-backdrop] {
        z-index: 9999;
    }

    &::after {
        z-index: 9999;
    }

    [data-rsbs-header] {
        ${({ $isHaveHeader }) =>
            !$isHaveHeader &&
            `
            position: absolute;
            height: 20px;
            width: 100%;
        `}
        padding: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    [data-rsbs-overlay] {
        ${({ $isHaveHeader }) =>
            !$isHaveHeader &&
            `
            margin-bottom: -20px;
        `}
    }

    ${({ $overflow }) =>
        $overflow &&
        css`
            [data-rsbs-content] {
                overflow: visible;
            }

            [data-rsbs-scroll] {
                overflow: visible;
            }
        `}
`;

export const Title = styled.div<{ $bg: string }>`
    padding: 30px;
    background-color: ${({ $bg }) => $bg};
    border-radius: inherit;
`;

export const Body = styled.div<{
    $isErrorBorder?: boolean;
    $isPadding: boolean;
    $errorColor: string;
    $overflow?: string;
    $borderColor?: string;
}>`
    position: relative;
    overflow: ${({ $overflow }) => $overflow || 'auto'};
    flex: 1;
    border-radius: 10px 10px 0 0;
    ${({ $isErrorBorder, $errorColor, $borderColor }) =>
        ($isErrorBorder || $borderColor) &&
        css`
            border-top: 2px solid ${$borderColor || $errorColor};
        `}

    ${({ $isPadding }) => $isPadding && 'padding: 32px 16px 36px'};
`;
