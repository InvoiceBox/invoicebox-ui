import React, {
    FC,
    PointerEvent,
    ReactNode,
    TransitionEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import * as S from './styles';
import { Typography } from '../Typography';
import { useComponentPalette } from '../../../palette';
import { TDrawerPalette } from './palette';

export type TProps = {
    children: ReactNode;
    onClose: () => void;
    title?: string;
    isErrorBorder?: boolean;
    isOpen: boolean;
    isPadding?: boolean;
    borderColor?: string;
    overflow?: string;
    onOpenEnd?: () => void;
};

const ANIMATION_MS = 300;
const DRAG_CLOSE_THRESHOLD = 80;

export const Drawer: FC<TProps> = ({
    isOpen,
    children,
    title,
    isErrorBorder,
    onClose,
    isPadding = true,
    borderColor,
    overflow,
    onOpenEnd,
}) => {
    const palette = useComponentPalette<TDrawerPalette>('drawer');

    const [shouldRender, setShouldRender] = useState(false);
    const [isEntered, setIsEntered] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const dragStartYRef = useRef<number | null>(null);
    const sheetRef = useRef<HTMLDivElement | null>(null);

    // Монтируем при открытии, размонтируем после анимации закрытия (как раньше — задержка 300мс).
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            setIsEntered(false);
            const timer = setTimeout(() => setShouldRender(false), ANIMATION_MS);
            return () => clearTimeout(timer);
        }
        return undefined;
    }, [isOpen]);

    // Запускаем enter-переход на кадр позже маунта: сначала лист за экраном (translateY 100%), затем 0.
    useEffect(() => {
        if (!shouldRender || !isOpen) return undefined;
        const raf = requestAnimationFrame(() => setIsEntered(true));
        return () => cancelAnimationFrame(raf);
    }, [shouldRender, isOpen]);

    // Блокируем скролл фона, пока боттомшит открыт (как делал react-modal-sheet).
    useEffect(() => {
        if (!shouldRender) return undefined;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [shouldRender]);

    const handleTransitionEnd = useCallback(
        (event: TransitionEvent<HTMLDivElement>) => {
            if (event.target !== sheetRef.current || event.propertyName !== 'transform') return;
            if (isOpen && isEntered && onOpenEnd) onOpenEnd();
        },
        [isOpen, isEntered, onOpenEnd],
    );

    const handlePointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
        dragStartYRef.current = event.clientY;
        event.currentTarget.setPointerCapture?.(event.pointerId);
    }, []);

    const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
        if (dragStartYRef.current === null) return;
        const delta = event.clientY - dragStartYRef.current;
        setDragOffset(delta > 0 ? delta : 0);
    }, []);

    const handlePointerUp = useCallback(() => {
        if (dragStartYRef.current === null) return;
        const offset = dragOffset;
        dragStartYRef.current = null;
        setDragOffset(0);
        if (offset > DRAG_CLOSE_THRESHOLD) onClose();
    }, [dragOffset, onClose]);

    if (!shouldRender) return null;

    const isDragging = dragOffset > 0;
    const translateY = !isEntered ? '100%' : `${dragOffset}px`;

    return (
        <S.Root role="dialog" aria-modal="true">
            <S.Backdrop $bgColor={palette.backdropBg} $isVisible={isEntered} onClick={onClose} />
            <S.Sheet
                ref={sheetRef}
                style={{ transform: `translateY(${translateY})` }}
                $isDragging={isDragging}
                $isErrorBorder={isErrorBorder}
                $errorColor={palette.error}
                $borderColor={borderColor}
                $overflow={overflow}
                onTransitionEnd={handleTransitionEnd}
            >
                <S.DragHandle
                    $bg={title ? palette.titleBg : palette.bg}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    <S.DragIndicator />
                </S.DragHandle>

                {title && (
                    <S.Title $bg={palette.titleBg}>
                        <Typography variant="headline4">{title}</Typography>
                    </S.Title>
                )}

                <S.ChildrenWrapper $bgColor={palette.bg} $isPadding={isPadding}>
                    {children}
                </S.ChildrenWrapper>
            </S.Sheet>
        </S.Root>
    );
};
