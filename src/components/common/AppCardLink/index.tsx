import React, { FC } from 'react';
import { TAppCardProps, TAppCardVariant } from './constants';
import GooglePlayRu from './components/GooglePlayRu';
import ApkRu from './components/ApkRu';
import RuStoreRu from './components/RuStoreRu';
import AppGalleryRu from './components/AppGalleryRu';
import * as S from './styles';

export type TProps = {
    height: number;
    variant: TAppCardVariant;
    href: string;
};

export const AppCardLink: FC<TProps> = ({ height, variant, href }) => {
    const appCardMap: Record<TAppCardVariant, FC<TAppCardProps>> = {
        googlePlay: GooglePlayRu,
        apk: ApkRu,
        ruStore: RuStoreRu,
        appGallery: AppGalleryRu,
    };

    const AppCardComponent = appCardMap[variant];

    return (
        <S.Wrapper href={href} target={'_blank'}>
            <AppCardComponent height={height} />
        </S.Wrapper>
    );
};
