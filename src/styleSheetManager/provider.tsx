import React, { FC, ReactNode } from 'react';
import { StyleSheetManager } from 'styled-components';
import { IStyleSheetManager } from 'styled-components/dist/models/StyleSheetManager';

type TProps = Pick<IStyleSheetManager, 'disableCSSOMInjection'> & {
    children: ReactNode;
};

export const StyleSheetManagerProvider: FC<TProps> = ({ children, disableCSSOMInjection }) => {
    return <StyleSheetManager disableCSSOMInjection={disableCSSOMInjection}>{children}</StyleSheetManager>;
};
