import styled from 'styled-components';
import CalendarFromLibrary from 'react-calendar';

export const LibCalendar = styled(CalendarFromLibrary)<{
    $arrow: string;
    $weekDay: string;
    $tile: string;
    $tileActive: string;
    $tileBgActive: string;
    selectRange?: boolean;
}>`
    border: none;
    width: 240px;
    min-width: 210px;
    background: transparent;

    @media (max-width: 320px) {
        width: 225px;
    }

    /* navigation block */

    .react-calendar__navigation {
        margin-bottom: 0;
    }

    /* navigation arrow */

    .react-calendar__navigation__arrow {
        font-size: 24px;
        background-color: transparent !important;
        color: ${({ $arrow }) => $arrow};
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
    }

    /* weekdays */

    .react-calendar__month-view__weekdays__weekday {
        color: ${({ $weekDay }) => $weekDay};
        font-size: 12px;
        font-weight: 400;
    }

    .react-calendar__month-view__weekdays__weekday abbr {
        text-decoration: none;
    }

    /* day */

    .react-calendar__tile {
        font-size: 12px;
        color: ${({ $tile }) => $tile};
        background-color: transparent !important;
        padding: 4px 6.6667px;
        border-radius: 6px;
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

    ${({ selectRange }) =>
        selectRange &&
        `
            .react-calendar__tile--range {
                border-radius: 0;
            }
            
            .react-calendar__tile--rangeStart {
                border-radius: 6px 0 0 6px;
            }
            
            .react-calendar__tile--rangeEnd {
                border-radius: 0 6px 6px 0;
            }
    
            .react-calendar__tile--rangeBothEnds {
                border-radius: 6px;
            }
    `}
`;
