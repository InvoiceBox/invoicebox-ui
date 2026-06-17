import React, {
    forwardRef,
    ReactNode,
    TransitionEvent,
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import * as S from './styles';
import { useComponentPalette } from '../../../palette';
import { TDropdownPalette } from './palette';

type TPosition = {
    isAbove: boolean;
    translateY: string;
};

type TLayerRect = {
    top: number;
    left: number;
    width: number;
    height: number;
};

export type TProps = {
    children: ReactNode;
    isOpen: boolean;
    isAutoPosition?: boolean;
    positionVertical?: number;
    positionLeft?: string;
    positionRight?: string;
    minWidth?: string;
    width?: string;
    zIndex?: number;
    onCloseTransitionEnd?: () => void;
    isTopPosition?: boolean;
    usePadding?: boolean;
};

export const Dropdown = forwardRef<HTMLDivElement, TProps>(
    (
        {
            children,
            isOpen,
            isAutoPosition = false,
            positionVertical = 5,
            positionLeft = '0px',
            positionRight = 'auto',
            minWidth = 'auto',
            width = 'auto',
            zIndex,
            onCloseTransitionEnd,
            isTopPosition = false,
            usePadding = false,
        },
        forwardedRef,
    ) => {
        const palette = useComponentPalette<TDropdownPalette>('dropdown');

        const position = useRef<TPosition>({ isAbove: true, translateY: '0px' });
        const [elRef, setElRef] = useState<HTMLDivElement | null>(null);

        // Якорь остаётся в потоке на месте поля-триггера; по его родителю (само поле) считаем,
        // куда поставить вынесенный порталом дропдаун.
        const anchorRef = useRef<HTMLSpanElement>(null);
        const [layerRect, setLayerRect] = useState<TLayerRect | null>(null);

        // Дропдаун вынесён в body порталом и спозиционирован `fixed` → НЕ растит документ (баг с
        // пустой полосой внизу) и не зависит от `overflow`/`transform` предков. Слой-обёртка
        // (`PositionLayer`) `fixed` точно над полем: внутренний `Wrapper` остаётся `absolute`
        // относительно него, поэтому ВСЯ старая логика позиционирования (top/bottom/left/right/
        // translateY) и измерения работают без изменений. Пересчёт на скролл/resize, пока открыт.
        useLayoutEffect(() => {
            const updateRect = () => {
                const field = anchorRef.current?.parentElement;
                if (!field) return;
                const rect = field.getBoundingClientRect();
                setLayerRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
            };

            updateRect();
            if (!isOpen) return undefined;

            window.addEventListener('scroll', updateRect, true);
            window.addEventListener('resize', updateRect);
            return () => {
                window.removeEventListener('scroll', updateRect, true);
                window.removeEventListener('resize', updateRect);
            };
        }, [isOpen]);

        const handleCloseTransitionEnd = useCallback(
            (event: TransitionEvent<HTMLDivElement>) => {
                if (event.propertyName !== 'opacity') return;
                if (isOpen) return;
                if (onCloseTransitionEnd) onCloseTransitionEnd();
            },
            [isOpen, onCloseTransitionEnd],
        );

        const getPosition = useCallback(
            ({
                dropdownHeight,
                belowHeight,
                aboveHeight,
                dropdownIndent,
            }: {
                dropdownHeight: number;
                belowHeight: number;
                aboveHeight: number;
                dropdownIndent: number;
            }): TPosition => {
                const isEnoughSpaceBelow = belowHeight >= dropdownHeight + dropdownIndent;
                if (isEnoughSpaceBelow) return { isAbove: false, translateY: '0px' };

                const isEnoghtSpaceAbove = aboveHeight >= dropdownHeight + dropdownIndent;
                if (isEnoghtSpaceAbove) return { isAbove: true, translateY: '0px' };

                const isMoreSpaceBelowThanAbove = belowHeight >= aboveHeight;
                if (isMoreSpaceBelowThanAbove) {
                    const outOfViewPortHeight = dropdownHeight + dropdownIndent - belowHeight;
                    return { isAbove: false, translateY: `-${outOfViewPortHeight}px` };
                }
                const outOfViewPortHeight = dropdownHeight + dropdownIndent - aboveHeight;
                return { isAbove: true, translateY: `${outOfViewPortHeight}px` };
            },
            [],
        );

        const openFlagCache = useRef<boolean | null>(null);
        if (elRef) {
            const isTriggeredByFlag = openFlagCache.current !== isOpen;
            openFlagCache.current = isOpen;
            if (isTriggeredByFlag && isOpen) {
                const viewportHeight = window.innerHeight;
                const parent = elRef.parentElement as HTMLElement;
                const { bottom, top: aboveHeight } = parent.getBoundingClientRect();
                const belowHeight = viewportHeight - bottom;
                const dropdownHeight = elRef.scrollHeight;
                position.current = isAutoPosition
                    ? getPosition({
                          dropdownHeight,
                          aboveHeight,
                          belowHeight,
                          dropdownIndent: positionVertical,
                      })
                    : { isAbove: isTopPosition, translateY: '0px' };
            }
        }

        const setWrapperRef = useCallback(
            (node: HTMLDivElement | null) => {
                setElRef(node);
                if (typeof forwardedRef === 'function') forwardedRef(node);
                else if (forwardedRef) forwardedRef.current = node;
            },
            [forwardedRef],
        );

        return (
            <>
                <S.Anchor ref={anchorRef} />
                {layerRect &&
                    createPortal(
                        <S.PositionLayer
                            style={{
                                top: layerRect.top,
                                left: layerRect.left,
                                width: layerRect.width,
                                height: layerRect.height,
                            }}
                        >
                            <S.Wrapper
                                ref={setWrapperRef}
                                $isVisible={isOpen}
                                $isAbove={position.current.isAbove}
                                $translateY={position.current.translateY}
                                $positionVertical={positionVertical}
                                $positionLeft={positionLeft}
                                $positionRight={positionRight}
                                $minWidth={minWidth}
                                $width={width}
                                $zIndex={zIndex}
                                onTransitionEnd={handleCloseTransitionEnd}
                                $palette={palette}
                                $usePadding={usePadding}
                            >
                                {children}
                            </S.Wrapper>
                        </S.PositionLayer>,
                        document.body,
                    )}
            </>
        );
    },
);

Dropdown.displayName = 'Dropdown';
