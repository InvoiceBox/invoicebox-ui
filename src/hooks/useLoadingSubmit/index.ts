import { useState } from 'react';

export const useLoadingSubmit = (initialIsLoading = false) => {
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(initialIsLoading);

    const startLoadingSubmit = () => {
        setIsLoadingSubmit(true);
    };

    const endLoadingSubmit = () => {
        setIsLoadingSubmit(false);
    };

    const toggleLoadingSubmit = () => setIsLoadingSubmit((v) => !v);
    return { isLoadingSubmit, startLoadingSubmit, endLoadingSubmit, toggleLoadingSubmit };
};
