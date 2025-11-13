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

    const handleHourChange = (newHour: number) => {
        if (newHour === maxTime?.[0] && minute > maxTime[1]) {
            return onChange([newHour, maxTime[1]]);
        }

        if (newHour === minTime?.[0] && minute < minTime[1]) {
            return onChange([newHour, minTime[1]]);
        }

        return onChange([newHour, minute]);
    };
    const handleMinuteChange = (newMinute: number) => onChange([hour, newMinute]);

    const getIsDisabledMinute = (current: number) => {
        if (value[0] === maxTime?.[0] && value[0] === minTime?.[0]) {
            return getIsDisabled(current, maxTime[1], minTime[1]);
        }

        if (value[0] === maxTime?.[0]) {
            return getIsDisabled(current, maxTime[1], 0);
        }

        if (value[0] === minTime?.[0]) {
            return getIsDisabled(current, 59, minTime[1]);
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
                                    maxTime ? maxTime[0] : 23,
                                    minTime ? minTime[0] : 0,
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
