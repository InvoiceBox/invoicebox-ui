import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints';
import { TDateInputPalette } from '../DateInput/palette';

export const Wrapper = styled.div`
    position: relative;
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const Icon = styled.div<{ $palette: TDateInputPalette }>`
    position: absolute;
    right: 12px;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    color: ${({ $palette }) => $palette.icon};
`;

export const CalendarWithTimePicker = styled.div<{ $dividerColor: string }>`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid ${({ $dividerColor }) => $dividerColor};
`;

export const CalendarWrapper = styled.div<{ $dividerColor: string }>`
    padding: 16px;

    border-right: 1px solid ${({ $dividerColor }) => $dividerColor};

    @media ${breakpoints.sm} {
        padding: 15px;
    }
`;

export const DropdownActionButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 12px 16px;
    gap: 8px;
`;

export const ActionButton = styled.button<{ $bgColor: string; $disabledBgColor: string; disabled?: boolean }>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: ${({ $bgColor }) => $bgColor};

    &:hover {
        opacity: ${({ disabled }) => (disabled ? 1 : 0.8)};
    }

    &:disabled {
        background-color: ${({ $disabledBgColor }) => $disabledBgColor};
        cursor: not-allowed;
    }
`;
