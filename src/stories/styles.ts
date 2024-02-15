import { styled } from 'styled-components';

export const Wrapper = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
`;

export const primaryStyles = {
    color: 'white',
    backgroundColor: '#1ea7fd',
};

export const secondaryStyles = {
    color: '#333',
    backgroundColor: 'transparent',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
};

export const smallStyles = {
    fontSize: '12px',
    padding: '10px 16px',
};

export const mediumStyles = {
    fontSize: '14px',
    padding: '11px 20px',
};

export const largeStyles = {
    fontSize: '16px',
    padding: '12px 24px',
};
