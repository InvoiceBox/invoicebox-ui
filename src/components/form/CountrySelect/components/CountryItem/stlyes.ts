import styled from 'styled-components';
import { TCountrySelectPalette } from '../../palette';

export const Title = styled.div<{ $isSelected: boolean; $palette: TCountrySelectPalette }>`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ $palette }) => $palette.title};
    opacity: ${({ $isSelected }) => ($isSelected ? 0.5 : 1)};
`;

export const Wrapper = styled.button<{ $palette: TCountrySelectPalette }>`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: ${({ $palette }) => $palette.countryBg};
    color: ${({ $palette }) => $palette.countryDescription};

    &:hover {
        background-color: ${({ $palette }) => $palette.countryHoverBg};

        ${Title} {
            opacity: 0.5;
        }
    }
`;
