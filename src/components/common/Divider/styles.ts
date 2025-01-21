import styled from 'styled-components';
import { TDividerPalette } from './palette';

export const Divider = styled.hr<{ $palette: TDividerPalette; $height: number }>`
    width: 100%;
    height: ${({ $height }) => $height}px;
    border: 1px solid ${({ $palette }) => $palette.divider};
    margin: 0;
    box-sizing: border-box;
`;
