import React, { FC } from 'react';
import QRCodeFromLibrary from 'qrcode.react';
import invoiceboxIcon from './assets/invoiceboxQRLogo.png';

export type TProps = {
    value: string;
    bgColor?: string;
    size?: number;
    id?: string;
};

export const QRCode: FC<TProps> = (props) => (
    <QRCodeFromLibrary
        {...props}
        renderAs="canvas"
        level="M"
        imageSettings={{
            src: invoiceboxIcon,
            height: 39,
            width: 39,
            excavate: false,
        }}
    />
);
