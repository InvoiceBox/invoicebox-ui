import React, { ButtonHTMLAttributes, forwardRef, HTMLAttributes, InputHTMLAttributes } from 'react';
import * as S from './styles';
import { typography } from './typography';
import { useCss } from '../../../hooks/useCss';

const CSS_ID = 'INVOICEBOX_UI_TYPOGRAPHY';

type TDivProps = { element?: 'div' } & HTMLAttributes<HTMLDivElement>;
type TParagraphProps = { element: 'p' } & HTMLAttributes<HTMLParagraphElement>;
type TSpanProps = { element: 'span' } & HTMLAttributes<HTMLSpanElement>;
type THeadingProps = {
    element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement>;
type TButtonProps = { element: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type TInputProps = { element: 'input' } & InputHTMLAttributes<HTMLInputElement>;

export type TProps = {
    variant: keyof typeof typography;
} & (TDivProps | TParagraphProps | TSpanProps | THeadingProps | TButtonProps | TInputProps);

export const Typography = forwardRef<HTMLInputElement, TProps>(
    ({ variant, element = 'div', ...rest }, ref) => {
        useCss({
            id: CSS_ID,
            css: `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')`,
        });

        return <S.Wrapper ref={ref} as={element} $variant={variant} {...rest} />;
    },
);

Typography.displayName = 'Typography';
