import styled from 'styled-components';
import { reducedMotion } from '../../../../../../../utils/reducedMotion';
import { EDGE_PADDING, ITEM_HEIGHT } from '../../constants';

export const Wrapper = styled.div<{ $align: 'left' | 'center' | 'right' }>`
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: ${EDGE_PADDING}px 0;
    overflow-y: scroll;
    overscroll-behavior: contain;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    text-align: ${({ $align }) => $align};

    /* Скрываем скроллбар: барабан управляется жестом, полоса ломает нативный вид. */
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Item = styled.button<{
    $color: string;
    $colorActive: string;
    $isActive: boolean;
    $opacity: number;
    $incline: number;
    $scale: number;
}>`
    display: block;
    width: 100%;
    height: ${ITEM_HEIGHT}px;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    scroll-snap-align: center;
    font: inherit;
    text-align: inherit;
    line-height: ${ITEM_HEIGHT}px;

    color: ${({ $isActive, $color, $colorActive }) => ($isActive ? $colorActive : $color)};
    opacity: ${({ $opacity }) => $opacity};
    transform: rotateX(${({ $incline }) => $incline}deg) scale(${({ $scale }) => $scale});
    backface-visibility: hidden;
    transition:
        opacity 0.12s ease,
        transform 0.12s ease,
        color 0.12s ease;

    ${reducedMotion}
`;
