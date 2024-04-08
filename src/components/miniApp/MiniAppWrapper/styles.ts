import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    *:first-child {
        flex-grow: 1;
    }
`;
