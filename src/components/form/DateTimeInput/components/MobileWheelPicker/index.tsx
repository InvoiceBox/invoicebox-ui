import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { useComponentPalette } from '../../../../../palette';
import { TMobileWheelPickerPalette } from './palette';

export type TProps = {
    children: ReactNode;
    label: string;
};

const getIsIphone = () => typeof navigator !== 'undefined' && /iPhone/.test(navigator.userAgent);

/**
 * Общая «обвязка» барабанного пикера: подсветка выбранной строки по центру и
 * затухание к краям. Внутрь кладутся WheelColumn — по одной на каждую часть значения.
 */
export const MobileWheelPicker: FC<TProps> = ({ children, label }) => {
    const palette = useComponentPalette<TMobileWheelPickerPalette>('mobileWheelPicker');

    return (
        <S.Wrapper $isIphone={getIsIphone()} role="group" aria-label={label}>
            <S.SelectedBand $bgColor={palette.selectedBg} />
            {children}
            <S.Fade $isTop $from={palette.fadeBg} $to={palette.fadeBgTransparent} />
            <S.Fade $isTop={false} $from={palette.fadeBg} $to={palette.fadeBgTransparent} />
        </S.Wrapper>
    );
};

export { WheelColumn } from './components/WheelColumn';
export type { TWheelOption } from './components/WheelColumn';
