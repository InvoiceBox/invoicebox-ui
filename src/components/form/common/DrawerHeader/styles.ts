import styled from 'styled-components';
import { Typography } from '../../../common/Typography';

export const Wrapper = styled.div<{ $borderColor: string }>`
    display: flex;
    gap: 8px;
    align-items: center;
    border-bottom: 1px solid ${({ $borderColor }) => $borderColor};
    padding: 28px 16px 8px;
`;

export const CloseButton = styled.button`
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: inherit;
`;

export const HeadLabel = styled(Typography)<{ $color: string }>`
    flex: 1;
    color: ${({ $color }) => $color};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const ApplyButton = styled.button<{ $color: string }>`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: ${({ $color }) => $color};

    &:disabled {
        opacity: 0.4;
    }
`;
