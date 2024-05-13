import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export const useUnupdatableHandler = <THandler extends Function>(handler: THandler) => {
    const ref = useRef(handler);
    ref.current = handler;

    const unupdatableHandler = useCallback((...props: unknown[]) => ref.current(...props), []);

    return unupdatableHandler as unknown as THandler;
};
