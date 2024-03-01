import React, { FC, HTMLProps } from 'react';
import * as S from './styles';
import { typography } from './typography';
import { Helmet } from 'react-helmet';

type TDefaultElementProps = { as?: never } & HTMLProps<HTMLDivElement>;

type TDivProps = { as: 'div' } & HTMLProps<HTMLDivElement>;
type TParagraphProps = { as: 'p' } & HTMLProps<HTMLParagraphElement>;
type TSpanProps = { as: 'span' } & HTMLProps<HTMLSpanElement>;
type THeadingProps = { as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' } & HTMLProps<HTMLHeadingElement>;

export type TProps = {
    variant: keyof typeof typography;
} & ((TDefaultElementProps | TDivProps) | TParagraphProps | TSpanProps | THeadingProps);

export const Typography: FC<TProps> = ({ variant, as = 'div', ...rest }) => {
    return <S.Wrapper as={as} $variant={variant} {...(rest as HTMLProps<HTMLDivElement>)} />;
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
