import React, { FC } from 'react';
import Lottie from 'lottie-react';
import animation from './assets/loader.json';

export type TProps = {
    width?: string;
};

export const InvoiceboxLoader: FC<TProps> = ({ width = '100%' }) => (
    <Lottie style={{ width }} loop animationData={animation} />
);
