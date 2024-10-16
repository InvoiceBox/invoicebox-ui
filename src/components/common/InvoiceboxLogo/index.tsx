import React, { FC } from 'react';
import LogoDarkRu from './components/LogoDarkRu';

export type TProps = {
    width: number;
    height: number;
};

const InvoiceboxLogo: FC<TProps> = ({ width, height }) => {
    return <LogoDarkRu height={height} width={width} />;
};

export default InvoiceboxLogo;
