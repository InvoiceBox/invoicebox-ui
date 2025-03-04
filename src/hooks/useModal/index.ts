import { useCallback, useState } from 'react';

export const useModal = (initialState = false): [boolean, () => void, () => void, () => void] => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((v) => !v), []);

    return [isOpen, open, close, toggle];
};
