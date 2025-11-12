import styled from 'styled-components';
import { Typography } from '../../../../common/Typography';

export const Wrapper = styled.div<{ $height: number }>`
    display: flex;
    width: 93px;
    box-sizing: border-box;
    height: ${({ $height }) => $height}px;
`;

export const ColumnWrapper = styled.div<{ $borderColor: string }>`
    display: flex;
    flex-direction: column;

    &:last-child {
        border-left: 1px solid ${({ $borderColor }) => $borderColor};
    }
`;

export const Label = styled(Typography)<{ $color: string }>`
    padding: 8px 0;
    color: ${({ $color }) => $color};
    text-align: center;
`;

export const ValuesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 30px;
    padding: 8px;
`;

export const ValueWrapper = styled.button<{
    $color: string;
    $colorActive: string;
    $isActive: boolean;
    $bgActive: string;
}>`
    padding: 2px 0;
    display: flex;
    justify-content: center;
    color: ${({ $isActive, $color, $colorActive }) => ($isActive ? $colorActive : $color)};
    background: ${({ $isActive, $bgActive }) => ($isActive ? $bgActive : 'inherit')};
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;
`;

export const Border = styled.div`
    width: 1px;
    height: 100%;
    background: red;
`;
