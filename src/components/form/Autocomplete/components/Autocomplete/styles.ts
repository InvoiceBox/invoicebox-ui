import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
`;

export const OptionWrapper = styled.button`
    width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: inherit;
    padding: 0;
`;

export const ChildrenWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    pointer-events: none;
    display: flex;
    align-items: center;
`;

export const InputLabelContent = styled.div`
    position: relative;
`;

export const DefaultSkeletonWrapper = styled.div`
    padding: 6px 12px;
`;
