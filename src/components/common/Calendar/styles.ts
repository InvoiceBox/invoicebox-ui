import styled, { css } from 'styled-components';
import CalendarFromLibrary from 'react-calendar';
import { breakpoints } from '../../../breakpoints';

const largeMobileStyles = css`
    @media ${breakpoints.sm} {
        width: 328px;
    }

    .react-calendar__navigation {
        @media ${breakpoints.sm} {
            margin-bottom: 18px;
        }
    }

    .react-calendar__navigation__label {
        @media ${breakpoints.sm} {
            font-size: 20px;
            font-weight: 500;
            line-height: 25px;
        }
    }

    .react-calendar__month-view__weekdays {
        @media ${breakpoints.sm} {
            margin-bottom: 6px;
        }
    }

    .react-calendar__tile {
        @media ${breakpoints.sm} {
            height: 48px;
            font-size: 15px;
            font-weight: 400;
            line-height: 20px;
            border-radius: 50%;
        }
    }
`;

export const LibCalendar = styled(CalendarFromLibrary)<{
    $arrow: string;
    $weekDay: string;
    $tile: string;
    $tileActive: string;
    $tileBgActive: string;
    $tileBgRangeBetween: string;
    $month: string;
    $isLargeMobileSize: boolean;
    selectRange?: boolean;
}>`
    border: none;
    width: 210px;
    min-width: 210px;
    background: transparent;

    /* navigation block */

    .react-calendar__navigation {
        margin-bottom: 16px;
        height: 28px;
    }

    /* navigation arrow */

    .react-calendar__navigation__arrow {
        font-size: 24px;
        background-color: transparent !important;
        color: ${({ $arrow }) => $arrow};
        width: 28px;
        height: 28px;
        min-width: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-calendar__navigation__arrow:disabled {
        opacity: 0.4;
        cursor: default;
    }

    .react-calendar__navigation__arrow:hover:not([disabled]) {
        opacity: 0.6;
    }

    /* navigation label */

    .react-calendar__navigation__label {
        font-size: 14px;
        background-color: transparent !important;
        cursor: default;
        color: ${({ $month }) => $month};
    }

    /* weekdays */

    .react-calendar__month-view__weekdays__weekday {
        color: ${({ $weekDay }) => $weekDay};
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        width: 30px;
        height: 22px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-calendar__month-view__weekdays__weekday abbr {
        text-decoration: none;
    }

    /* day */

    .react-calendar__tile {
        font-size: 12px;
        color: ${({ $tile }) => $tile};
        background-color: transparent !important;
        padding: 0;
        border-radius: 5px;
        margin-bottom: 4px;
        height: 22px;
    }

    .react-calendar__tile:disabled {
        opacity: 0.4;
        cursor: default;
    }

    .react-calendar__tile:hover:not([disabled]) {
        opacity: 0.6;
    }

    .react-calendar__tile--active {
        background-color: ${({ $tileBgActive }) => $tileBgActive} !important;
        color: ${({ $tileActive }) => $tileActive};
    }

    .react-calendar__tile--active:hover {
        opacity: 1 !important;
    }

    ${({ selectRange, $tileBgActive, $tileBgRangeBetween }) =>
        selectRange &&
        `
            .react-calendar__tile--range {
                border-radius: 0;
            }

            .react-calendar__tile--rangeBothEnds {
                border-radius: 5px;
            }
            
            .react-calendar__tile--active {
                background-color: ${$tileBgRangeBetween} !important;
            }

            .react-calendar__tile--rangeStart {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                background-color: ${$tileBgActive} !important;
            }

            .react-calendar__tile--rangeEnd {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                background-color: ${$tileBgActive} !important;
            }
    `}

    ${({ $isLargeMobileSize }) => $isLargeMobileSize && largeMobileStyles}
`;
