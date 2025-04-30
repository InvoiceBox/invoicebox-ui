import React, {
    ButtonHTMLAttributes,
    FC,
    forwardRef,
    HTMLAttributes,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
} from 'react';
import * as S from './styles';
import { typography } from './typography';

type TDivProps = { element?: 'div' } & HTMLAttributes<HTMLDivElement>;
type TParagraphProps = { element: 'p' } & HTMLAttributes<HTMLParagraphElement>;
type TSpanProps = { element: 'span' } & HTMLAttributes<HTMLSpanElement>;
type THeadingProps = {
    element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLHeadingElement>;
type TButtonProps = { element: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type TInputProps = { element: 'input' } & InputHTMLAttributes<HTMLInputElement>;
type TTextAreaProps = { element: 'textarea' } & Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onBlur' | 'onChange' | 'onFocus'
> &
    InputHTMLAttributes<HTMLInputElement>;

type TGeneralProps = {
    variant: keyof typeof typography;
};

export type TProps = TGeneralProps &
    (TDivProps | TParagraphProps | TSpanProps | THeadingProps | TButtonProps | TInputProps | TTextAreaProps);

export const Typography: FC<TProps> = ({ variant, element = 'div', ...rest }) => {
    return <S.Wrapper as={element} $variant={variant} {...rest} />;
};

export const InputWithTypography = forwardRef<HTMLInputElement, TGeneralProps & TInputProps>(
    ({ variant, element = 'input', ...rest }, ref) => {
        return <S.Wrapper ref={ref} as={element} $variant={variant} {...rest} />;
    },
);

Typography.displayName = 'Typography';
InputWithTypography.displayName = 'InputWithTypography';
