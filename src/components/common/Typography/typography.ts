import { css } from 'styled-components';
import { breakpoints } from '../../../breakpoints';

export const typography = {
    headline1: css`
        font-size: 34px;
        font-weight: 400;
        line-height: 42px;

        @media ${breakpoints.sm} {
            font-size: 30px;
            font-weight: 400;
            line-height: 48px;
        }
    `,
    headline2: css`
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;

        @media ${breakpoints.sm} {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
        }
    `,
    headline3: css`
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;

        @media ${breakpoints.sm} {
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
        }
    `,
    headline4: css`
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;

        @media ${breakpoints.sm} {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
    `,
    headline5: css`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

        @media ${breakpoints.sm} {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }
    `,
    headline6: css`
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
    `,
    headerText: css`
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;

        @media ${breakpoints.sm} {
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
        }
    `,
    buttonL: css`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    `,
    bodyL: css`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

        @media ${breakpoints.sm} {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }
    `,
    bodyLUnderlined: css`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-decoration: underline;

        @media ${breakpoints.sm} {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            text-decoration: underline;
        }
    `,
    buttonM: css`
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    `,
    bodyMRegular: css`
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    `,
    bodyMBold: css`
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
    `,
    bodyMUnderlined: css`
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-decoration: underline;
    `,
    captionRegular: css`
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
    `,
    labelsHintsRegular: css`
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    `,
    labelsHintsBold: css`
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
    `,
    captionSRegular: css`
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
    `,
    captionUnderlined: css`
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        text-decoration: underline;
    `,
    smallMedium: css`
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
    `,
    labelsAndHints: css`
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    `,
};
