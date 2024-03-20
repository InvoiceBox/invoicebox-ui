import { useCallback, useMemo } from 'react';

type TFilter = (value: string) => string;

export type TProps = {
    max: number;
};

export const useFilters = ({ max }: TProps) => {
    const filterOnlyNumbers: TFilter = useCallback((value: string) => value.replace(/[^0-9]/g, ''), []);
    const filterMax: TFilter = useCallback(
        (value: string) => {
            if (!value) return '';
            return Number(value) > max ? String(max) : value;
        },
        [max],
    );

    const filters = useMemo(() => [filterOnlyNumbers, filterMax], [filterOnlyNumbers, filterMax]);

    return filters;
};
