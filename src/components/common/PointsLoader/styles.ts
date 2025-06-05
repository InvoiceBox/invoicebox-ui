import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    height: 18px;
    padding: 6px;
`;

export const Point = styled.div<{ $activeColor: string; $defaultColor: string }>`
    background-color: ${({ $defaultColor }) => $defaultColor};

    @keyframes colorChange {
        0%,
        100% {
            background-color: ${({ $defaultColor }) => $defaultColor};
        }
        33% {
            background-color: ${({ $activeColor }) => $activeColor};
        }
        66% {
            background-color: ${({ $defaultColor }) => $defaultColor};
        }
    }

    width: 6px;
    height: 6px;
    border-radius: 50%;
    animation: colorChange 3s infinite;

    &:nth-child(2) {
        animation-delay: 1s;
    }

    &:nth-child(3) {
        animation-delay: 2s;
    }
`;
