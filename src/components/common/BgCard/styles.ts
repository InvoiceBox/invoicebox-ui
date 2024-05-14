import styled, { css } from 'styled-components';
import { breakpoints } from '../../../breakpoints';
import { TBgCardPalette } from './palette';

export const Wrapper = styled.div<{ $palette: TBgCardPalette; $isTopLeftBorderRadius: boolean }>`
    background-color: ${({ $palette }) => $palette.bg};
    position: relative;
    border-radius: 20px;
    padding: 30px;

    ${({ $isTopLeftBorderRadius }) =>
        !$isTopLeftBorderRadius &&
        css`
            border-top-left-radius: 0px;
        `}

    @media ${breakpoints.md} {
        padding: 16px;
    }
`;
