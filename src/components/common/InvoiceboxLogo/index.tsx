import React, { FC } from 'react';
import LogoDarkRu from './components/LogoDarkRu';

export type TProps = {
    height: number;
};

export const InvoiceboxLogo: FC<TProps> = ({ height }) => {
    return <LogoDarkRu height={height} />;
};
