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
    width: 46px;

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
    padding: 8px 0;
    box-sizing: border-box;
    margin: 0 auto;
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
`;

export const MobileWrapper = styled.div<{ $isIphone: boolean }>`
    height: 178px;
    width: 140px;
    display: flex;
    font-size: 23px;
    font-weight: 400;
    line-height: 28px;
    color: #3c3c4399;
    position: relative;

    font-family: ${({ $isIphone }) =>
        $isIphone ? '-apple-system, BlinkMacSystemFont' : "'Roboto', sans-serif"};
`;

export const SelectedMask = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 34px;
    background-color: #74748014;
    z-index: 10;
    transform: translateY(-50%);
    flex-shrink: 0;
    border-radius: 8px;
    pointer-events: none;
`;
