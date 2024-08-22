import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { DefaultLogo } from './components/DefaultLogo';
import { SelectedRadioIcon } from './components/SelectedRadioIcon';
import { UnselectedRadioIcon } from './components/UnselectedRadioIcon';

type TProps = {
    title: string;
    children?: ReactNode;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
    comment?: string;
};

export const PaymentCard: FC<TProps> = ({
    icon,
    title,
    isActive = false,
    onClick,
    isDisabled = false,
    children,
    comment,
}) => {
    const iconJSX = icon || <DefaultLogo />;

    return (
        <S.Wrapper $isActive={isActive} $isDisabled={isDisabled} onClick={isDisabled ? undefined : onClick}>
            <S.RadioWrpper>{isActive ? <SelectedRadioIcon /> : <UnselectedRadioIcon />}</S.RadioWrpper>
            <S.Content>
                <S.Title variant="bodyMRegular" $ellipsis={!children}>
                    {title}
                </S.Title>
                {children}
            </S.Content>
            <S.IconWrapper $isActive={isActive}>{iconJSX}</S.IconWrapper>
            {comment ? <S.Comment variant="captionRegular">{comment}</S.Comment> : null}
        </S.Wrapper>
    );
};
