import React, { FC, ReactNode } from 'react';
import { getPureInputStyled } from '../PureInput/styles';
import styled from 'styled-components';

const Wrapper: FC<{ children: ReactNode }> = ({ children, ...other }) => (
    <div style={{ overflow: 'hidden' }} {...other}>
        {children}
    </div>
);

export const PureInputStyledWrapper = getPureInputStyled(Wrapper);

export const TagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
`;

export const InputWrapper = styled.div`
    width: auto;
`;

export const ChipLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const ChipRemoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: inherit;
    padding: 0;
`;
