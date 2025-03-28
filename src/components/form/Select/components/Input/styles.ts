import styled from 'styled-components';

export const IconWrapper = styled.div<{ $pointerEvents: string }>`
    position: absolute;
    right: 14px;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    pointer-events: ${({ $pointerEvents }) => $pointerEvents};
`;

export const ControlWrapper = styled.div`
    position: relative;
`;
