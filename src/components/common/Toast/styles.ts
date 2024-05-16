import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { TToastPalette } from './palette';
import { breakpoints } from '../../../breakpoints';
import hexToRgba from 'hex-to-rgba';

export const Container = styled(ToastContainer)<{ $palette: TToastPalette }>`
    width: auto;
    max-width: 407px;
    z-index: 999999999;

    .Toastify__toast {
        padding: 0;
        border-radius: 10px;
        background-color: ${({ $palette }) => $palette.bg};
        box-shadow: 0px 10px 30px ${({ $palette }) => hexToRgba($palette.shadow, 0.1)};
        color: ${({ $palette }) => $palette.text};
        min-height: 54px;

        @media ${breakpoints.sm} {
            min-height: 38px;
        }
    }

    .Toastify__toast-body {
        padding: 17px 30px;

        @media ${breakpoints.sm} {
            padding: 10px;
        }
    }
`;
