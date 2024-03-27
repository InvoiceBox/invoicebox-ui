import styled from 'styled-components';
import { TDividerPalette } from './palette';

export const Divider = styled.hr<{ $palette: TDividerPalette }>`
    width: 100%;
    height: 1px;
    border: 1px solid ${({ $palette }) => $palette.divider};
    margin: 0px;
    box-sizing: border-box;
`;
