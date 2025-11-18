import styled, { css } from 'styled-components';
import { Typography } from '../../common/Typography';
import { TSelectPalette } from './palette';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const InputWrapper = styled.div`
    cursor: pointer;

    input {
        cursor: pointer;
    }
`;

export const OptionWrapper = styled.div<{ $usePadding: boolean }>`
    padding: ${({ $usePadding }) => ($usePadding ? '0 8px' : 'none')};
`;

export const Option = styled(Typography)<{
    $palette: TSelectPalette;
    $isGrouped: boolean;
    $usePadding: boolean;
}>`
    overflow: hidden;
    width: 100%;
    text-align: left;
    transition: all 0.2s ease-in-out 0s;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: ${({ $usePadding }) => ($usePadding ? '12px' : 'none')};

    &:hover {
        background-color: ${({ $palette }) => $palette.bgHover};
    }

    ${({ $isGrouped }) =>
        $isGrouped &&
        css`
            padding-left: 30px;
        `}
`;

export const Group = styled(Typography)`
    padding: 12px 20px;
`;

export const DefaultOptionWrapper = styled.div<{ $usePadding?: boolean }>`
    padding: ${({ $usePadding }) => ($usePadding ? '12px' : '12px 20px')};
`;

export const DrawerContent = styled.div`
    padding-top: 36px;
`;

export const DrawerBottom = styled.div`
    height: 36px;
`;

export const EmptyLabel = styled(Typography)<{ $color: string }>`
    color: ${({ $color }) => $color};
`;

export const ScrollbarContent = styled.div``;
