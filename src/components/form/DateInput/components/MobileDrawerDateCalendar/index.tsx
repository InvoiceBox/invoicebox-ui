import React, { FC } from 'react';
import { Calendar, TProps as TCalendarProps } from '../../../../common/Calendar';
import * as S from './styles';
import { DrawerHeader } from '../../../common/DrawerHeader';
import { Drawer } from '../../../../common/Drawer';

export type TProps = Pick<TCalendarProps, 'maxDate' | 'minDate'> & {
    isOpen: boolean;
    onClose: () => void;
    value: Date | null;
    onChange: (newValue: Date) => void;
};

export const MobileDrawerDateCalendar: FC<TProps> = ({
    isOpen,
    onClose,
    maxDate,
    minDate,
    value,
    onChange,
}) => {
    return (
        <Drawer onClose={onClose} isOpen={isOpen} isPadding={false}>
            <DrawerHeader onClose={onClose} label={'Выберите дату'} />
            <S.MobileCalendarWrapper>
                <Calendar
                    value={value}
                    onChange={onChange}
                    minDate={minDate}
                    maxDate={maxDate}
                    isLargeMobileSize
                />
            </S.MobileCalendarWrapper>
        </Drawer>
    );
};
