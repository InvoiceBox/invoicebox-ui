import styled, { css, keyframes } from 'styled-components';
import { TSkeletonPalette } from './palette';
import { reducedMotion } from '../../../utils/reducedMotion';

const shine = keyframes`
    from {
        background-position: -200px 0;
    }
    to {
        background-position: calc(200px + 100%) 0;
    }
`;

const appear = keyframes`
    to {
        visibility: visible;
    }
`;

export const Wrapper = styled.div<{
    $width: string;
    $height: string;
    $borderRadius: string;
    $showDelay: number;
    $palette: TSkeletonPalette;
}>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: ${({ $borderRadius }) => $borderRadius};
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background: ${({ $palette }) => $palette.bg};

    /* Задержка показа — не движение: при «Уменьшении движения» она остаётся, иначе плашка не появится */
    ${({ $showDelay }) =>
        $showDelay > 0 &&
        css`
            visibility: hidden;
            animation: ${appear} 0s linear ${$showDelay}ms forwards;
        `}
`;

/* Перелив как в личном кабинете: полоса 200 проходит плашку за 1,2 с */
export const Inner = styled.div<{ $palette: TSkeletonPalette }>`
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        90deg,
        ${({ $palette }) => $palette.bg},
        ${({ $palette }) => $palette.flicker},
        ${({ $palette }) => $palette.bg}
    );
    background-size: 200px 100%;
    background-repeat: no-repeat;
    animation: ${shine} 1.2s ease-in-out infinite;
    ${reducedMotion}
`;
