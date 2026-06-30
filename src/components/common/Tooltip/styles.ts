import styled from 'styled-components';
import { TTooltipPalette } from './palette';

export const Trigger = styled.span`
    display: inline-flex;
`;

export const Overlay = styled.div<{
    $palette: TTooltipPalette;
    $top: number;
    $left: number;
    $placement: 'top' | 'bottom';
}>`
    position: fixed;
    z-index: 9999;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    transform: ${({ $placement }) =>
        $placement === 'top' ? 'translate(-50%, -100%)' : 'translate(-50%, 0)'};
    box-sizing: border-box;
    min-height: 28px;
    padding: 4px 6px;
    border-radius: 10px;
    background-color: ${({ $palette }) => $palette.bg};
    color: ${({ $palette }) => $palette.color};
    box-shadow: ${({ $palette }) => $palette.shadow};
    pointer-events: none;
    max-width: 240px;
`;
