import styled from 'styled-components';
import { TColorPalette } from '../types';

export const Group = styled.div<{ $palette: TColorPalette }>`
    display: inline-flex;
    flex: none;
    background: ${({ $palette }) => $palette.surface.formsSecondary};
    border: 1px solid ${({ $palette }) => $palette.border.divider};
    border-radius: 99px;
    padding: 2px;
`;

export const Button = styled.button<{ $palette: TColorPalette }>`
    display: inline-grid;
    place-items: center;
    width: 30px;
    height: 30px;
    padding: 0;
    background: none;
    border: none;
    border-radius: 99px;
    color: ${({ $palette }) => $palette.text.tertiary};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${({ $palette }) => $palette.text.default};
    }

    &:focus-visible {
        outline: 2px solid ${({ $palette }) => $palette.text.link};
        outline-offset: 1px;
    }

    &[aria-pressed='true'] {
        background: ${({ $palette }) => $palette.surface.form};
        color: ${({ $palette }) => $palette.text.default};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;
