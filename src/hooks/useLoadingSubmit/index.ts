import { useCallback, useState } from 'react';

export const useLoadingSubmit = (initialIsLoading = false) => {
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(initialIsLoading);

    const startLoadingSubmit = useCallback(() => {
        setIsLoadingSubmit(true);
    }, []);

    const endLoadingSubmit = useCallback(() => {
        setIsLoadingSubmit(false);
    }, []);

    const toggleLoadingSubmit = useCallback(() => setIsLoadingSubmit((v) => !v), []);
    return { isLoadingSubmit, startLoadingSubmit, endLoadingSubmit, toggleLoadingSubmit };
};
