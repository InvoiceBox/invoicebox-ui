import React, { FC, ReactNode, useEffect, useState } from 'react';
import * as S from './styles';
import { Typography } from '../Typography';
import { useComponentPalette } from '../../../palette';
import { TDrawerPalette } from './palette';
import { Sheet } from 'react-modal-sheet';
import { Select } from '../../form/Select';

export type TProps = {
    children: ReactNode;
    onClose: () => void;
    title?: string;
    isErrorBorder?: boolean;
    isOpen: boolean;
    isPadding?: boolean;
    borderColor?: string;
    overflow?: string;
};

export const Drawer: FC<TProps> = ({
    isOpen,
    children,
    title,
    isErrorBorder,
    onClose,
    isPadding = true,
    borderColor,
    overflow,
}) => {
    const palette = useComponentPalette<TDrawerPalette>('drawer');

    const [shouldRender, setShouldRender] = useState(false);

    // delay for close drawer and unmount
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <Sheet detent="content" isOpen={isOpen} onClose={onClose}>
            <S.StyledSheetContainer
                $isErrorBorder={isErrorBorder}
                $errorColor={palette.error}
                $borderColor={borderColor}
                $overflow={overflow}
            >
                <Sheet.Content>
                    <S.DragIndicatorWrapper>
                        <Sheet.DragIndicator />
                    </S.DragIndicatorWrapper>

                    {title && (
                        <S.Title $bg={palette.titleBg}>
                            <Typography variant="headline4">{title}</Typography>
                        </S.Title>
                    )}

                    <S.ChildrenWrapper $isBorderRadius={!title} $bgColor={palette.bg} $isPadding={isPadding}>
                        {children}
                    </S.ChildrenWrapper>
                </Sheet.Content>
            </S.StyledSheetContainer>
            <S.StyledSheetBackdrop onTap={onClose} $bgColor={palette.backdropBg} />
        </Sheet>
    );
};
