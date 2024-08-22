import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { Icon } from './components/Icon';

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
    const iconJSX = icon || <Icon />;

    return (
        <S.Wrapper
            $isActive={!isDisabled && isActive}
            $isDisabled={isDisabled}
            onClick={isDisabled ? undefined : onClick}
        >
            <S.IconWrapper>
                <S.DefaultIconWrapper>{iconJSX}</S.DefaultIconWrapper>
            </S.IconWrapper>
            <S.Content>
                <S.SubPaymentTitle variant="bodyMRegular" $onlyTitle={!children}>
                    {title}
                </S.SubPaymentTitle>
                {children && <S.SubPaymentSubTitle>{children}</S.SubPaymentSubTitle>}
            </S.Content>
            {comment ? <S.Comment variant="captionRegular">{comment}</S.Comment> : null}
        </S.Wrapper>
    );
};
