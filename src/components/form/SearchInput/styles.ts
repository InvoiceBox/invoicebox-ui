import styled from 'styled-components';

export const IconWrapper = styled.span<{ $inFocus: boolean }>`
    position: absolute;
    right: 20px;
    bottom: 50%;
    transform: translateY(50%);
    display: flex;
    align-content: center;
    justify-content: center;
    opacity: ${({ $inFocus }) => ($inFocus ? 1 : 0.5)};
    transition: all 0.2s ease-in-out 0s;
`;

export const ResetButton = styled.button`
    display: flex;
    align-content: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
`;
