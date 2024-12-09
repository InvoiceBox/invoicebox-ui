import styled from 'styled-components';
import { Typography } from '../Typography';

export const BodyWrapper = styled.div`
    padding: 32px 0 36px;
`;

export const InputWrapper = styled.div`
    padding: 8px 16px;
`;

export const OptionWrapper = styled.button`
    width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: inherit;
`;

export const ContentWrapper = styled.div`
    height: 380px;
`;

export const SkeletonListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px 16px;
`;

export const Prompt = styled(Typography)<{ $color: string }>`
    padding: 8px 16px 0 16px;
    text-align: center;
    color: ${({ $color }) => $color};
`;
