import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints';
import { TBgCardPalette } from './palette';

export const Wrapper = styled.div<{ $palette: TBgCardPalette }>`
    background-color: ${({ $palette }) => $palette.bg};
    position: relative;
    border-radius: 20px;
    padding: 30px;

    @media ${breakpoints.md} {
        padding: 16px;
    }
`;
