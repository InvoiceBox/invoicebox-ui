import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints';

export const Wrapper = styled.div`
    position: relative;
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const Icon = styled.div`
    position: absolute;
    right: 12px;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`;

export const Calendar = styled.div`
    padding: 30px;

    @media ${breakpoints.sm} {
        padding: 15px;
    }
`;
