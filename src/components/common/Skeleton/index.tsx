import React, { FC } from 'react';
import * as S from './styles';
import { TSkeletonPalette } from './palette';
import { useComponentPalette } from '../../../palette';

export type TProps = {
    /** число — пиксели, строка — как есть: `'100%'`, `'72px'` */
    width?: string | number;
    height?: string | number;
    /** скругление в пикселях: 4 у строк текста, 10 у полей, 20 у кнопок и карточек */
    borderRadius?: number;
    /** круг: аватар, значок строки; ширина берётся из высоты */
    circle?: boolean;
    /**
     * Через сколько миллисекунд плашка становится видимой. Место под ней занято сразу.
     * В личном кабинете 180: на быстром ответе плашек не видно вовсе
     */
    showDelay?: number;
    palette?: Partial<TSkeletonPalette>;
};

const toCssSize = (value: string | number) => (typeof value === 'number' ? `${value}px` : value);

/**
 * Плашка скелетона. Сама по себе декорация (`aria-hidden`): факт загрузки объявляет
 * один статус рядом с группой плашек
 */
export const Skeleton: FC<TProps> = ({
    width = '100%',
    height = '100%',
    borderRadius = 10,
    circle = false,
    showDelay = 0,
    palette,
}) => {
    const mergedPalette = useComponentPalette('skeleton', palette);

    return (
        <S.Wrapper
            aria-hidden
            $width={toCssSize(circle ? (width === '100%' ? height : width) : width)}
            $height={toCssSize(height)}
            $borderRadius={circle ? '50%' : `${borderRadius}px`}
            $showDelay={showDelay}
            $palette={mergedPalette}
        >
            <S.Inner $palette={mergedPalette} />
        </S.Wrapper>
    );
};
