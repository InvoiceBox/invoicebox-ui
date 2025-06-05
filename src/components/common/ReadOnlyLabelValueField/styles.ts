import styled from 'styled-components';
import { Typography } from '../Typography';

export const Value = styled(Typography)<{ $paddingTop: number; $paddingBottom: number; $color: string }>`
    padding-left: 20px;
    padding-right: 12px;
    padding-top: ${({ $paddingTop }) => $paddingTop}px;
    padding-bottom: ${({ $paddingBottom }) => $paddingBottom}px;
    color: ${({ $color }) => $color};
`;
