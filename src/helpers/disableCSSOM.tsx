import React from 'react';
import { StyleSheetManager } from 'styled-components';

export const disableCSSOM = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithDisableCSSOMComponent: React.FC<P> = (props) => {
        return (
            <StyleSheetManager disableCSSOMInjection>
                <WrappedComponent {...(props as P)} />
            </StyleSheetManager>
        );
    };

    return WithDisableCSSOMComponent;
};
