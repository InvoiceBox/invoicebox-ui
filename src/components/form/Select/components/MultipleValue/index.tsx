import React, { MouseEvent, useCallback, useLayoutEffect, useRef, useState } from 'react';
import * as S from './styles';
import { TOption } from '../..';
import { useComponentPalette } from '../../../../../palette';
import { TSelectPalette } from '../../palette';
import { Chip, TProps as TChipProps } from '../../../../common/Chip';

export type TProps<TValue> = {
    selectedOptions: TOption<TValue>[];
    onRemove: (value: TValue) => void;
    collapse?: boolean;
    chipProps?: Partial<Omit<TChipProps, 'label'>>;
};

const CHIP_SIZE = 'xs' as const;

export const MultipleValue = <TValue extends string | number>({
    selectedOptions,
    onRemove,
    collapse = false,
    chipProps,
}: TProps<TValue>) => {
    const palette = useComponentPalette<TSelectPalette>('select');

    const chipColor = chipProps?.color ?? palette.tagColor;
    const chipBgColor = chipProps?.bgColor ?? palette.tagBg;
    const chipSize = chipProps?.size ?? CHIP_SIZE;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
    const counterRef = useRef<HTMLDivElement>(null);

    const [visibleCount, setVisibleCount] = useState(selectedOptions.length);

    const handleRemove = useCallback(
        (event: MouseEvent<HTMLButtonElement>, value: TValue) => {
            event.preventDefault();
            event.stopPropagation();
            onRemove(value);
        },
        [onRemove],
    );

    useLayoutEffect(() => {
        if (!collapse) {
            setVisibleCount(selectedOptions.length);
            return undefined;
        }

        const wrapper = wrapperRef.current;
        if (!wrapper) return undefined;

        const recalculate = () => {
            const total = selectedOptions.length;
            const containerWidth = wrapper.clientWidth;
            const widths = tagRefs.current.slice(0, total).map((el) => el?.offsetWidth || 0);
            const counterWidth = counterRef.current?.offsetWidth || 0;

            const countFitting = (reserve: number) => {
                let used = 0;
                let count = 0;
                for (let i = 0; i < total; i += 1) {
                    const width = widths[i] + (count > 0 ? S.TAGS_GAP : 0);
                    if (used + width <= containerWidth - reserve) {
                        used += width;
                        count += 1;
                    } else {
                        break;
                    }
                }
                return count;
            };

            let count = countFitting(0);
            // если влезли не все теги, оставляем место под счётчик "+N"
            if (count < total) {
                count = Math.max(countFitting(counterWidth + S.TAGS_GAP), 1);
            }

            setVisibleCount(count);
        };

        recalculate();

        const observer = new ResizeObserver(recalculate);
        observer.observe(wrapper);

        return () => observer.disconnect();
    }, [collapse, selectedOptions]);

    const safeVisibleCount = collapse ? visibleCount : selectedOptions.length;
    const hiddenCount = selectedOptions.length - safeVisibleCount;

    const hiddenStyle: React.CSSProperties = {
        position: 'absolute',
        visibility: 'hidden',
        pointerEvents: 'none',
    };

    return (
        <S.Wrapper ref={wrapperRef} $collapse={collapse}>
            {selectedOptions.map((option, index) => (
                <S.ItemWrapper
                    key={option.value}
                    ref={(el) => {
                        tagRefs.current[index] = el;
                    }}
                    style={collapse && index >= safeVisibleCount ? hiddenStyle : undefined}
                >
                    <Chip
                        size={chipSize}
                        color={chipColor}
                        bgColor={chipBgColor}
                        label={
                            <>
                                <S.TagLabel variant="smallMedium">{option.label}</S.TagLabel>
                                <S.TagRemove
                                    type="button"
                                    onMouseDown={(event) => event.preventDefault()}
                                    onClick={(event) => handleRemove(event, option.value)}
                                >
                                    ×
                                </S.TagRemove>
                            </>
                        }
                    />
                </S.ItemWrapper>
            ))}

            {collapse && (
                <S.ItemWrapper ref={counterRef} style={hiddenCount > 0 ? undefined : hiddenStyle}>
                    <Chip size={chipSize} color={chipColor} bgColor={chipBgColor} label={`+${hiddenCount}`} />
                </S.ItemWrapper>
            )}
        </S.Wrapper>
    );
};
