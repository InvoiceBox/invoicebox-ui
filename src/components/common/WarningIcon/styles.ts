import styled from 'styled-components';
import { Icon } from './components/Icon';
import { TWarningIconPalette } from './palette';

export const StyledIcon = styled(Icon)<{ $palette: TWarningIconPalette; $size: number }>`
    cursor: pointer;
    color: ${({ $palette }) => $palette.icon};
    width: ${({ $size }) => `${$size}px`};
    height: ${({ $size }) => `${$size}px`};
`;
