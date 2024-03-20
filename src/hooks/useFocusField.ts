import { useState } from 'react';

type TProps<TEvent> = {
    initialFocusFlag?: boolean;
    onFocus?: (e: TEvent) => void;
    onBlur?: (e: TEvent) => void;
};

export const useInputFocus = <TEvent>({ initialFocusFlag = false, onFocus, onBlur }: TProps<TEvent> = {}) => {
    const [inFocus, setInFocus] = useState(initialFocusFlag);

    const handleFocus = (event: TEvent) => {
        setInFocus(true);
        if (onFocus) onFocus(event);
    };

    const handleBlur = (event: TEvent) => {
        setInFocus(false);
        if (onBlur) onBlur(event);
    };

    return { inFocus, handleFocus, handleBlur };
};
