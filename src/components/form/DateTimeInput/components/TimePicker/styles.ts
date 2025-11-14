import styled from 'styled-components';
import { Typography } from '../../../../common/Typography';
import { breakpoints } from '../../../../../breakpoints';

export const Wrapper = styled.div<{ $height: number }>`
    display: flex;
    width: 93px;
    box-sizing: border-box;
    height: ${({ $height }) => $height}px;

    @media ${breakpoints.sm} {
        flex-direction: column;
        width: auto;
        height: auto;
    }
`;

export const ColumnWrapper = styled.div<{ $borderColor: string }>`
    display: flex;
    flex-direction: column;
    width: 46px;

    &:last-child {
        border-left: 1px solid ${({ $borderColor }) => $borderColor};
    }

    @media ${breakpoints.sm} {
        flex-direction: row;
        width: auto;
        align-items: center;
        overflow: hidden;

        &:last-child {
            border: none;
            border-top: 1px solid ${({ $borderColor }) => $borderColor};
        }
    }
`;

export const Label = styled(Typography)<{ $color: string }>`
    padding: 8px 0;
    color: ${({ $color }) => $color};
    text-align: center;

    @media ${breakpoints.sm} {
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        padding: 14px;
    }
`;

export const ValuesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 30px;
    padding: 8px 0;
    box-sizing: border-box;
    margin: 0 auto;

    @media ${breakpoints.sm} {
        flex-direction: row;
        gap: 0;
        margin: 0;
        width: auto;
        padding: 8px 0;
    }
`;

export const ValueWrapper = styled.button<{
    $color: string;
    $colorActive: string;
    $isActive: boolean;
    $bgActive: string;
    $colorDisabled: string;
}>`
    padding: 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ $isActive, $color, $colorActive }) => ($isActive ? $colorActive : $color)};
    background: ${({ $isActive, $bgActive }) => ($isActive ? $bgActive : 'inherit')};
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;

    &:disabled {
        cursor: not-allowed;
        color: ${({ $colorDisabled }) => $colorDisabled};
    }

    @media ${breakpoints.sm} {
        flex-direction: row;
        width: 44px;
        height: 48px;
        flex-shrink: 0;
        border-radius: 50%;
        padding: 0;
    }
`;

export const Value = styled(Typography)`
    @media ${breakpoints.sm} {
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
    }
`;

export const MobileScrollWrapper = styled.div`
    display: contents;

    @media ${breakpoints.sm} {
        display: block;
        overflow: hidden;
    }
`;
