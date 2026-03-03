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
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform;
`;

export const Number = styled.div<{ $opacity: number; $incline: number; $isActive: boolean }>`
    opacity: ${({ $opacity }) => $opacity};
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    transform: translateZ(0) rotateX(${({ $incline }) => $incline}deg);
    backface-visibility: hidden;
    will-change: transform, opacity;

    transition: all 0.1s ease;
    ${({ $isActive }) =>
        $isActive &&
        css`
            margin: 4px 0;
        `}
`;
