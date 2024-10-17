import styled from 'styled-components';

export const ChildrenWrapper = styled.div`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;

export const InputLabelContent = styled.div`
    position: relative;
    z-index: 1;
`;
