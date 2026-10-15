import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints';
import { Typography } from '../Typography';
import { TWentWrongModalPalette } from './palette';

type TPaletteProps = { $palette: TWentWrongModalPalette };

export const ModalInner = styled.div<TPaletteProps>`
    width: 624px;
    color: ${({ $palette }) => $palette.text};

    @media ${breakpoints.md} {
        width: 100%;
    }
`;

export const Header = styled.div<TPaletteProps & { $image: string }>`
    height: 171px;
    background:
        url(${({ $image }) => $image}) no-repeat center bottom,
        ${({ $palette }) => $palette.headerBg};
    background-size: 184px;

    @media ${breakpoints.sm} {
        background-size: 163px;
    }
`;

export const Content = styled.div`
    padding: 30px;
    text-align: center;

    @media ${breakpoints.sm} {
        padding: 24px 16px 32px;
    }
`;

export const Title = styled(Typography)`
    margin-bottom: 12px;
`;

export const Description = styled(Typography)<TPaletteProps>`
    margin-bottom: 24px;
    color: ${({ $palette }) => $palette.description};

    @media ${breakpoints.sm} {
        margin-bottom: 16px;
    }
`;

export const Contacts = styled.div<{ $marginBottom: string }>`
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    margin-bottom: ${({ $marginBottom }) => $marginBottom};

    @media ${breakpoints.sm} {
        flex-direction: column;
        gap: 0;
    }
`;

export const ContactItem = styled.a`
    padding: 8px 16px 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    text-decoration: none;

    @media ${breakpoints.sm} {
        gap: 6px;
    }
`;

export const RequestIdWrapper = styled.div<TPaletteProps>`
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${({ $palette }) => $palette.requestId};
`;

export const CopyText = styled.div`
    padding: 4px 12px;
    pointer-events: none;
`;

export const RequestIdValue = styled(Typography)<TPaletteProps>`
    max-width: 320px;
    padding: 0;
    border: none;
    background: transparent;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:is(button) {
        cursor: pointer;
    }

    &:is(button):hover {
        background-color: ${({ $palette }) => $palette.copyValueHoverBg};
    }

    @media ${breakpoints.sm} {
        max-width: 200px;
    }
`;

export const ButtonCopyCode = styled.button<TPaletteProps>`
    flex-shrink: 0;
    height: 24px;
    width: 24px;
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: ${({ $palette }) => $palette.copyIcon};
    background: ${({ $palette }) => $palette.copyButtonBg};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CopiedStatus = styled.span<{ $isVisuallyHidden: boolean }>`
    flex-shrink: 0;

    ${({ $isVisuallyHidden }) =>
        $isVisuallyHidden &&
        `
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0 0 0 0);
            white-space: nowrap;
            border: 0;
        `}
`;
