import React, { FC } from 'react';
import * as S from './styles';
import { Typography } from '../../../../common/Typography';
import { useComponentPalette } from '../../../../../palette';
import { TTimePickerPalette } from './palette';
import { Scrollbar } from '../../../../common/Scrollbar';

const HOURS = new Array(24).fill(0).map((item, index) => index);
const MINUTES = new Array(60).fill(0).map((item, index) => index);

const getIsDisabled = (current: number, maxNumber: number, minNumber: number) => {
    return current > maxNumber || current < minNumber;
};

export type TProps = {
    value: [number, number];
    onChange: (value: [number, number]) => void;
    height?: number;
    minTime?: [number, number];
    maxTime?: [number, number];
};

export const TimePicker: FC<TProps> = ({ value, onChange, height = 230, maxTime, minTime }) => {
    const palette = useComponentPalette<TTimePickerPalette>('timePicker');

    const [hour, minute] = value;
    const maxTimeHour = maxTime?.[0];
    const maxTimeMinute = maxTime?.[1];
    const minTimeHour = minTime?.[0];
    const minTimeMinute = minTime?.[1];

    const handleHourChange = (newHour: number) => {
        if (newHour === maxTimeHour && maxTimeMinute && minute > maxTimeMinute) {
            return onChange([newHour, maxTimeMinute]);
        }

        if (newHour === minTimeHour && minTimeMinute && minute < minTimeMinute) {
            return onChange([newHour, minTimeMinute]);
        }

        return onChange([newHour, minute]);
    };
    const handleMinuteChange = (newMinute: number) => onChange([hour, newMinute]);

    const getIsDisabledMinute = (current: number) => {
        if (hour === maxTimeHour && maxTimeMinute && hour === minTimeHour && minTimeMinute) {
            return getIsDisabled(current, maxTimeMinute, minTimeMinute);
        }

        if (hour === maxTimeHour && maxTimeMinute) {
            return getIsDisabled(current, maxTimeMinute, 0);
        }

        if (hour === minTimeHour && minTimeMinute) {
            return getIsDisabled(current, 59, minTimeMinute);
        }

        return false;
    };

    return (
        <S.Wrapper $height={height}>
            <S.ColumnWrapper $borderColor={palette.divider}>
                <S.Label $color={palette.label} variant={'captionRegular'}>
                    час
                </S.Label>
                <Scrollbar width={3}>
                    <S.ValuesWrapper>
                        {HOURS.map((hourItem) => (
                            <S.ValueWrapper
                                key={hourItem}
                                $color={palette.tile}
                                $colorActive={palette.tileActive}
                                $isActive={hour === hourItem}
                                $bgActive={palette.tileBgActive}
                                $colorDisabled={palette.tileDisabled}
                                type={'button'}
                                onClick={() => handleHourChange(hourItem)}
                                disabled={getIsDisabled(
                                    hourItem,
                                    maxTimeHour ? maxTimeHour : 23,
                                    minTimeHour ? minTimeHour : 0,
                                )}
                            >
                                <Typography variant={'captionRegular'}>{hourItem}</Typography>
                            </S.ValueWrapper>
                        ))}
                    </S.ValuesWrapper>
                </Scrollbar>
            </S.ColumnWrapper>

            <S.ColumnWrapper $borderColor={palette.divider}>
                <S.Label $color={palette.label} variant={'captionRegular'}>
                    мин
                </S.Label>
                <Scrollbar width={3}>
                    <S.ValuesWrapper>
                        {MINUTES.map((minuteItem) => (
                            <S.ValueWrapper
                                key={minuteItem}
                                $color={palette.tile}
                                $colorActive={palette.tileActive}
                                $isActive={minute === minuteItem}
                                $bgActive={palette.tileBgActive}
                                $colorDisabled={palette.tileDisabled}
                                type={'button'}
                                onClick={() => handleMinuteChange(minuteItem)}
                                disabled={getIsDisabledMinute(minuteItem)}
                            >
                                <Typography variant={'captionRegular'}>{minuteItem}</Typography>
                            </S.ValueWrapper>
                        ))}
                    </S.ValuesWrapper>
                </Scrollbar>
            </S.ColumnWrapper>
        </S.Wrapper>
    );
};
