import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints';
import { TDateInputPalette } from './palette';

export const Wrapper = styled.div`
    position: relative;
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const Icon = styled.div<{ $palette: TDateInputPalette }>`
    position: absolute;
    right: 12px;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    color: ${({ $palette }) => $palette.icon};
`;

export const CalendarWrapper = styled.div`
    padding: 30px;

    @media ${breakpoints.sm} {
        padding: 15px;
    }
`;
