import React, { FC } from 'react';
import * as S from './styles';
import { Typography } from '../../../../common/Typography';
import { useComponentPalette } from '../../../../../palette';
import { TTimePickerPalette } from './palette';
import { Scrollbar } from '../../../../common/Scrollbar';

const HOURS = new Array(24).fill(0).map((item, index) => index);
const MINUTES = new Array(60).fill(0).map((item, index) => index);

export type TProps = {
    value: [number, number];
    onChange: (value: [number, number]) => void;
    height?: number;
};

export const TimePicker: FC<TProps> = ({ value, onChange, height = 230 }) => {
    const palette = useComponentPalette<TTimePickerPalette>('timePicker');

    const [hour, minute] = value;

    const handleHourChange = (newHour: number) => onChange([newHour, minute]);
    const handleMinuteChange = (newMinute: number) => onChange([hour, newMinute]);

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
                                type={'button'}
                                onClick={() => handleHourChange(hourItem)}
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
                                type={'button'}
                                onClick={() => handleMinuteChange(minuteItem)}
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
