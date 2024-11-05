import React, { FC } from 'react';
import QRCodeFromLibrary from 'qrcode.react';

export type TProps = {
    value: string;
    image?: string;
    bgColor?: string;
    size?: number;
    id?: string;
};

export const QRCode: FC<TProps> = ({ image, ...others }) => (
    <QRCodeFromLibrary
        {...others}
        renderAs="canvas"
        level="M"
        imageSettings={
            image
                ? {
                      src: image,
                      height: 39,
                      width: 39,
                      excavate: false,
                  }
                : undefined
        }
    />
);