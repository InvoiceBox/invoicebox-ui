import styled from 'styled-components';
import { TCountrySelectPalette } from './palette';

export const Wrapper = styled.div`
    position: relative;
`;

export const HeaderWrapper = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    pointer-events: auto;
    background: transparent;
    border: none;
    cursor: pointer;
    height: 24px;
`;

export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    pointer-events: auto;
`;

export const CountrySearchWrapper = styled.div<{ $palette: TCountrySelectPalette }>`
    border-bottom: 1px solid ${({ $palette }) => $palette.border};
    width: 100%;
`;
