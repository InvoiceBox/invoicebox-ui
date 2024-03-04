import React, { ButtonHTMLAttributes, FC } from 'react';
import * as S from './styles';
import { InvoiceboxSpinner, TProps as TInvoiceboxSpinnerProps } from '../InvoiceboxSpinner';
import { TSecondaryButtonPalette } from './palette';
import { useComponentPalette } from '../../../palette';

export type TProps = {
    isLoading?: boolean;
    palette?: Partial<TSecondaryButtonPalette>;
    invoiceboxSpinnerProps?: Pick<TInvoiceboxSpinnerProps, 'palette'>;
    fullWidth?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export const SecondaryButton: FC<TProps> = ({
    isLoading,
    palette,
    invoiceboxSpinnerProps,
    fullWidth = false,
    children,
    disabled,
    ...rest
}) => {
    const mergedPalette = useComponentPalette('secondaryButton', palette);

    return (
        <S.Wrapper disabled={disabled || isLoading} $palette={mergedPalette} $fullWidth={fullWidth} {...rest}>
            {isLoading && (
                <S.LoaderWrapper>
                    <InvoiceboxSpinner {...invoiceboxSpinnerProps} isSecondary width="32px" />
                </S.LoaderWrapper>
            )}
            <S.Inner element="span" variant="buttonM" $isLoading={isLoading}>
                {children}
            </S.Inner>
        </S.Wrapper>
    );
};
