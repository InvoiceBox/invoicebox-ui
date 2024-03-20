import styled, { css } from 'styled-components';

export const Arrows = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    justify-content: center;
    top: 0;
    right: 18px;
`;

export const Arrow = styled.div<{ $disabled: boolean }>`
    cursor: pointer;
    display: flex;
    user-select: none;

    ${({ $disabled }) =>
        $disabled &&
        css`
            opacity: 0.4;
            pointer-events: none;
        `}
`;
