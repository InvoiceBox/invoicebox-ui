import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { getPureInputStyled } from '../PureInput/styles';
import styled from 'styled-components';

type TProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

const Wrapper: FC<TProps> = ({ children, ...other }) => (
    <div {...other} style={{ overflow: 'hidden' }}>
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

export const InputWithSaveButtonWrapper = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const SaveButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
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
