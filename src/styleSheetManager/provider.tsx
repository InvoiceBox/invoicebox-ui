import React, { FC, ReactNode } from 'react';
import { StyleSheetManager } from 'styled-components';

type TProps = {
    disableCSSOMInjection: boolean;
    children: ReactNode;
};

export const StyleSheetManagerProvider: FC<TProps> = ({ children, disableCSSOMInjection }) => {
    return <StyleSheetManager disableCSSOMInjection={disableCSSOMInjection}>{children}</StyleSheetManager>;
};
