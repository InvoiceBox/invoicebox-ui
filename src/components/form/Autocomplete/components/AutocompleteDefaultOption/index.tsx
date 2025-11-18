import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { typography } from '../../../../common/Typography/typography';
import { Typography } from '../../../../common/Typography';

export type TProps = {
    children: ReactNode;
    usePadding?: boolean;
};

export const AutocompleteDefaultOption: FC<TProps> = ({ children, usePadding = false }) => {
    return (
        <Wrapper $usePadding={usePadding} variant={'bodyMRegular'} element={'div'}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled(Typography)<{ $usePadding: boolean }>`
    overflow: hidden;
    display: flex;
    width: 100%;
    text-align: left;
    flex-direction: column;
    padding: ${({ $usePadding }) => ($usePadding ? '12px' : '12px 20px')};
    transition: all 0.2s ease-in-out;
    ${typography.bodyMRegular}
    box-sizing: border-box;
`;
