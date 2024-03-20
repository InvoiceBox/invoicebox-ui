import { useMemo } from 'react';

type TProps = {
    max: number;
    value: number | null;
};

export const useIncrementDisabledFlags = ({ max, value }: TProps) => {
    const isIncrementDisabled = useMemo(() => value === max, [max, value]);
    const isDecrementDisabled = useMemo(() => value === 0, [value]);

    const incrementDisabledFlags = useMemo(
        () => ({ isIncrementDisabled, isDecrementDisabled }),
        [isIncrementDisabled, isDecrementDisabled],
    );

    return incrementDisabledFlags;
};
