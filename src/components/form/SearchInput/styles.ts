import styled from 'styled-components';
import { TSearchInputPalette } from './palette';

export const ResetButton = styled.button`
    display: flex;
    align-content: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const IconWrapper = styled.span<{ $inFocus: boolean; $palette: TSearchInputPalette }>`
    position: absolute;
    right: 20px;
    bottom: 50%;
    transform: translateY(50%);
    display: flex;
    align-content: center;
    justify-content: center;
    opacity: ${({ $inFocus }) => ($inFocus ? 1 : 0.5)};
    transition: all 0.2s ease-in-out 0s;
    color: ${({ $palette }) => $palette.icon};

    ${ResetButton} {
        color: ${({ $palette }) => $palette.icon};
    }
`;
