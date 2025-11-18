import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { typography } from '../../../../common/Typography/typography';
import { Typography } from '../../../../common/Typography';

export type TProps = {
    children: ReactNode;
};

export const AutocompleteDefaultOption: FC<TProps> = ({ children }) => {
    return (
        <Wrapper variant={'bodyMRegular'} element={'div'}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled(Typography)`
    overflow: hidden;
    display: flex;
    width: 100%;
    text-align: left;
    flex-direction: column;
    padding: 12px 20px;
    transition: all 0.2s ease-in-out;
    ${typography.bodyMRegular}
    box-sizing: border-box;
`;
