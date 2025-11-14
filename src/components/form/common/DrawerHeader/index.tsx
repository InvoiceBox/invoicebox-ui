import React, { FC } from 'react';
import * as S from './styles';
import { Cross24Icon } from './components/Cross24Icon';
import { Typography } from '../../../common/Typography';
import { useComponentPalette } from '../../../../palette';
import { TDrawerHeaderPalette } from './palette';

export type TProps = {
    onClose: () => void;
    onSubmit?: () => void;
    label: string;
    isSubmitDisabled?: boolean;
};

export const DrawerHeader: FC<TProps> = ({ onClose, label, onSubmit, isSubmitDisabled }) => {
    const palette = useComponentPalette<TDrawerHeaderPalette>('drawerHeader');

    return (
        <S.Wrapper $borderColor={palette.border}>
            <S.CloseButton type={'button'} onClick={onClose}>
                <Cross24Icon />
            </S.CloseButton>
            <S.HeadLabel $color={palette.headLabel} variant={'headline3'}>
                {label}
            </S.HeadLabel>
            {onSubmit && (
                <S.ApplyButton
                    disabled={isSubmitDisabled}
                    onClick={onSubmit}
                    type={'button'}
                    $color={palette.applyButton}
                >
                    <Typography variant={'headline6'}>Готово</Typography>
                </S.ApplyButton>
            )}
        </S.Wrapper>
    );
};
