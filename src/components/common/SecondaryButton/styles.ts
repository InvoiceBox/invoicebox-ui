import styled from 'styled-components';
import { Typography } from '../Typography';
import { TSecondaryButtonPalette } from './palette';

export const Inner = styled(Typography)<{ $isLoading?: boolean }>`
    visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
`;

export const Wrapper = styled.button<{ $palette: TSecondaryButtonPalette }>`
    position: relative;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 13px 24px;
    color: ${({ $palette }) => $palette.text};
    background-color: ${({ $palette }) => $palette.bg};
    transition: background-color 0.2s ease-in-out 0s;

    &:hover:not(:disabled) {
        background-color: ${({ $palette }) => $palette.bgHover};
    }

    &:active:not(:disabled) {
        background-color: ${({ $palette }) => $palette.bgActive};
    }

    &:disabled {
        cursor: not-allowed;

        ${Inner} {
            opacity: 0.5;
        }
    }
`;

export const LoaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
