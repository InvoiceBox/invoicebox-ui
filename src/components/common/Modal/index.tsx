import React, { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { isDropdownPortalClick } from '../../../hooks/useOutsideClick';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useComponentPalette } from '../../../palette';
import { ErrorBoundary } from '../ErrorBoundary';
import { ExpandIcon } from './assets/ExpandIcon';
import { CollapseIcon } from './assets/CollapseIcon';
import { ModalExpansionContext } from './context';
import { TModalPalette } from './palette';
import * as S from './styles';

export type TProps = {
    onClose: () => void;
    isOpen: boolean;
    overflow?: string;
    width?: number;
    isDisabledOutsideClick?: boolean;
    /** кнопка разворота окна на весь экран (только в десктопной версии) */
    isExpandable?: boolean;
    children?: ReactNode;
};

const FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Modal: FC<TProps> = ({
    onClose,
    isOpen,
    children,
    overflow = 'auto',
    width,
    isDisabledOutsideClick,
    isExpandable,
}) => {
    const palette = useComponentPalette<TModalPalette>('modal');
    const contentRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const expansionContextValue = useMemo(
        () => ({ isExpandable: Boolean(isExpandable), isExpanded }),
        [isExpandable, isExpanded],
    );

    useLockBodyScroll(isOpen);

    useEffect(() => {
        if (!isOpen) {
            setIsExpanded(false);
        }
    }, [isOpen]);

    // Фокус переносим в окно при открытии и возвращаем на прежний элемент при закрытии
    useEffect(() => {
        if (!isOpen) return undefined;

        previousFocusRef.current = document.activeElement as HTMLElement | null;

        contentRef.current?.focus();

        return () => {
            previousFocusRef.current?.focus();
        };
    }, [isOpen]);

    /**
     * Клик вне окна закрывает модалку. Не считаем «снаружи» клики по порталу Dropdown и по другим диалогам
     * поверх неё (role="dialog"): например, Drawer с опциями Select на планшете рендерится порталом в body,
     * и клик по его затемнению иначе закрывал бы и эту модалку.
     */
    useEffect(() => {
        if (!isOpen || isDisabledOutsideClick) return undefined;

        const handleMouseDown = (event: MouseEvent) => {
            const content = contentRef.current;
            const { target } = event;

            if (!content || !(target instanceof Element) || content.contains(target)) return;
            if (isDropdownPortalClick(target)) return;

            const dialog = target.closest('[role="dialog"]');
            if (dialog && dialog !== content) return;

            onClose();
        };

        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [isOpen, isDisabledOutsideClick, onClose]);

    // Escape закрывает окно, Tab/Shift+Tab не выпускают фокус за его пределы
    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKeyDown = (e: KeyboardEvent) => {
            // Поверх открыта другая модалка и фокус в ней — Escape и Tab обрабатывает она, а не эта
            const activeDialog = (document.activeElement as HTMLElement | null)?.closest('[role="dialog"]');
            if (activeDialog && activeDialog !== contentRef.current) return;

            if (e.key === 'Escape') {
                onClose();
                return;
            }

            if (e.key !== 'Tab') return;

            const content = contentRef.current;
            if (!content) return;

            const focusable = Array.from(content.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
            if (!focusable.length) {
                e.preventDefault();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            if (e.shiftKey && active === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && (active === last || !content.contains(active))) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <S.Container>
            <S.ContainerInner $isExpanded={isExpanded}>
                <S.Backdrop $palette={palette} />
                <S.Content
                    $palette={palette}
                    $overflow={overflow}
                    $width={width}
                    $isExpandable={isExpandable}
                    $isExpanded={isExpanded}
                    ref={contentRef}
                    role="dialog"
                    aria-modal="true"
                    tabIndex={-1}
                >
                    {isExpandable && (
                        <S.ExpandButton
                            type="button"
                            $palette={palette}
                            onClick={() => setIsExpanded((prev) => !prev)}
                            aria-label={isExpanded ? 'Свернуть окно' : 'Развернуть окно на весь экран'}
                            title={isExpanded ? 'Свернуть' : 'Развернуть на весь экран'}
                        >
                            {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
                        </S.ExpandButton>
                    )}
                    <ModalExpansionContext.Provider value={expansionContextValue}>
                        {/* Падение пользовательского контента не роняет страницу: окно
                            остаётся управляемым (закрытие работает), контент — пустой */}
                        <ErrorBoundary>{children}</ErrorBoundary>
                    </ModalExpansionContext.Provider>
                </S.Content>
            </S.ContainerInner>
        </S.Container>,
        document.body,
    );
};

export { useModalExpansion } from './context';
export type { TModalExpansion } from './context';
export { modalExpansionFlexItem } from './styles';
