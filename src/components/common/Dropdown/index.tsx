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
import { DROPDOWN_PORTAL_ATTR } from '../../../hooks/useOutsideClick';
import { useComponentPalette } from '../../../palette';
import { TDropdownPalette } from './palette';

type TPosition = {
    isAbove: boolean;
    offset: number;
};

type TLayout = TPosition & {
    top: number;
    left: number;
    width: number;
    height: number;
};

const getAutoPosition = (field: DOMRect, panelHeight: number, gap: number): TPosition => {
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - field.bottom;
    const spaceAbove = field.top;
    const offset = field.height + gap;

    if (spaceBelow >= panelHeight + gap) return { isAbove: false, offset };
    if (spaceAbove >= panelHeight + gap) return { isAbove: true, offset };

    // Если список не помещается целиком, используем сторону с большим запасом места.
    return spaceBelow >= spaceAbove
        ? { isAbove: false, offset: viewportHeight - field.top - panelHeight }
        : { isAbove: true, offset: field.bottom - panelHeight };
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
    // ARIA-роль контейнера поповера: задаётся местом использования
    // (например, "dialog" для календаря; "listbox" требует ролей на опциях)
    role?: string;
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
            role,
        },
        forwardedRef,
    ) => {
        const palette = useComponentPalette<TDropdownPalette>('dropdown');

        const anchorRef = useRef<HTMLSpanElement>(null);
        const [panel, setPanel] = useState<HTMLDivElement | null>(null);
        const [layout, setLayout] = useState<TLayout | null>(null);
        const lastLayout = useRef<TLayout | null>(null);

        const updateLayout = useCallback(() => {
            const field = anchorRef.current?.parentElement;
            if (!field) return;

            const rect = field.getBoundingClientRect();
            const { isAbove, offset } =
                isAutoPosition && panel
                    ? getAutoPosition(rect, panel.getBoundingClientRect().height, positionVertical)
                    : { isAbove: isTopPosition, offset: rect.height + positionVertical };

            const prev = lastLayout.current;
            if (
                prev &&
                prev.top === rect.top &&
                prev.left === rect.left &&
                prev.width === rect.width &&
                prev.height === rect.height &&
                prev.isAbove === isAbove &&
                prev.offset === offset
            ) {
                return;
            }

            const next = {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                isAbove,
                offset,
            };
            lastLayout.current = next;
            setLayout(next);
        }, [isAutoPosition, isTopPosition, panel, positionVertical]);

        // После обновления React поле может сдвинуться без изменения размеров, а список
        // может вырасти после загрузки вариантов. Измеряем оба элемента до отрисовки.
        useLayoutEffect(() => {
            if (isOpen || !layout) updateLayout();
        });

        useLayoutEffect(() => {
            if (!isOpen) return undefined;

            window.addEventListener('scroll', updateLayout, true);
            window.addEventListener('resize', updateLayout);

            const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateLayout);
            if (observer) {
                if (panel) observer.observe(panel, { box: 'border-box' });
                for (let el = anchorRef.current?.parentElement; el; el = el.parentElement) {
                    observer.observe(el, { box: 'border-box' });
                }
            }

            return () => {
                window.removeEventListener('scroll', updateLayout, true);
                window.removeEventListener('resize', updateLayout);
                observer?.disconnect();
            };
        }, [isOpen, panel, updateLayout]);

        const handleCloseTransitionEnd = useCallback(
            (event: TransitionEvent<HTMLDivElement>) => {
                if (event.propertyName !== 'opacity') return;
                if (isOpen) return;
                if (onCloseTransitionEnd) onCloseTransitionEnd();
            },
            [isOpen, onCloseTransitionEnd],
        );

        const setWrapperRef = useCallback(
            (node: HTMLDivElement | null) => {
                setPanel(node);
                if (typeof forwardedRef === 'function') forwardedRef(node);
                else if (forwardedRef) forwardedRef.current = node;
            },
            [forwardedRef],
        );

        return (
            <>
                <S.Anchor ref={anchorRef} />
                {layout &&
                    createPortal(
                        <S.PositionLayer
                            {...{ [DROPDOWN_PORTAL_ATTR]: '' }}
                            style={{
                                top: layout.top,
                                left: layout.left,
                                width: layout.width,
                                height: layout.height,
                            }}
                        >
                            <S.Wrapper
                                ref={setWrapperRef}
                                role={role}
                                $isVisible={isOpen}
                                style={layout.isAbove ? { bottom: layout.offset } : { top: layout.offset }}
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
