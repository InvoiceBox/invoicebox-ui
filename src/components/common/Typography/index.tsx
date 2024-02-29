import React, { FC, ReactNode } from 'react';
import * as S from './styles';
import { typography } from './typography';
import { Helmet } from 'react-helmet';

export type TProps = {
    children: ReactNode;
    variant: keyof typeof typography;
    as?: 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
};

export const Typography: FC<TProps> = ({ children, as = 'div', variant, className }) => {
    return (
        <S.Wrapper as={as} $variant={variant} className={className}>
            {children}
        </S.Wrapper>
    );
};

export const TypographyGlobalStyle: FC = () => {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};
