import styled from 'styled-components';
import { TSearchInputPalette } from './palette';

export const IconWrapper = styled.span<{
    $inFocus: boolean;
    $palette: TSearchInputPalette;
    $useModernStyles: boolean;
}>`
    position: absolute;
    right: 20px;
    bottom: ${({ $useModernStyles }) => (!$useModernStyles ? `calc(50% - 5px)` : '50%')};
    transform: translateY(50%);
    display: flex;
    align-content: center;
    justify-content: center;
    opacity: ${({ $inFocus }) => ($inFocus ? 1 : 0.5)};
    transition: all 0.2s ease-in-out 0s;
    color: ${({ $palette }) => $palette.icon};
`;
