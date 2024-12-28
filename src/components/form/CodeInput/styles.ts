import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints';

export const CodeInputItem = styled.input<{
    $errorBorder: string;
    $defaultBorder: string;
    $hasError?: boolean;
    disabled: boolean;
}>`
    border: 1px solid
        ${({ $defaultBorder, $hasError, $errorBorder }) => ($hasError ? $errorBorder : $defaultBorder)};
    border-radius: 8px;
    text-align: center;
    outline: none;

    &:disabled {
        opacity: 0.7;
    }
`;

export const Wrapper = styled.div<{ $isLarge: boolean }>`
    display: flex;
    gap: ${({ $isLarge }) => ($isLarge ? 16 : 12)}px;

    ${CodeInputItem} {
        width: ${({ $isLarge }) => ($isLarge ? 45 : 39)}px;
        height: ${({ $isLarge }) => ($isLarge ? 54 : 48)}px;
    }

    @media ${breakpoints.sm} {
        gap: 8px;
    }
`;
