import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    text-align: right;

    /* Аппаратное ускорение */
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    will-change: transform;
`;

export const Number = styled.div<{ $opacity: number; $incline: number; $isActive: boolean }>`
    opacity: ${({ $opacity }) => $opacity};
    width: 28px;
    height: 28px;
    flex-shrink: 0;

    /* Аппаратное ускорение для анимаций */
    transform: translateZ(0) rotateX(${({ $incline }) => $incline}deg);
    backface-visibility: hidden;
    perspective: 1000;

    /* Оптимизация производительности */
    will-change: transform, opacity;

    /* Убираем transition во время скролла */
    transition: ${({ $isActive }) => ($isActive ? 'margin 0.2s ease' : 'none')};

    ${({ $isActive }) =>
        $isActive &&
        css`
            margin: 4px 0;
        `}
`;
