import React, { FC, ReactNode } from 'react';
import * as S from './styles';

export type TProps = {
    children: ReactNode;
};

export const MiniAppWrapper: FC<TProps> = ({ children }) => {
    return <S.Wrapper>{children}</S.Wrapper>;
};
