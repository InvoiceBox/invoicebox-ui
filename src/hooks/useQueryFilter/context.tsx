import React, { createContext, ReactNode, useContext, useMemo } from 'react';

export const DEFAULT_PAGE_PARAM_NAME = 'page';
export const DEFAULT_FIRST_PAGE = 1;

export type TQueryFilterContext = {
    /** Текущие параметры строки запроса (например, `useSearchParams()[0]` из react-router) */
    searchParams: URLSearchParams;
    /**
     * Записать параметры в адрес. Хук передаёт сюда тот же объект `searchParams`, предварительно
     * изменив его, поэтому реализация обязана довести дело до НОВОГО объекта `searchParams`
     * в следующем рендере (react-router так и делает: пишет адрес и разбирает его заново).
     */
    setSearchParams: (nextSearchParams: URLSearchParams) => void;
    /** Имя параметра страницы, который сбрасывается при смене фильтра. По умолчанию `page` */
    pageParamName: string;
    /** Номер первой страницы. По умолчанию `1` */
    firstPage: number;
};

const QueryFilterContext = createContext<TQueryFilterContext | null>(null);

export type TQueryFilterProviderProps = {
    searchParams: URLSearchParams;
    setSearchParams: (nextSearchParams: URLSearchParams) => void;
    pageParamName?: string;
    firstPage?: number;
    children: ReactNode;
};

/**
 * Подключает `useQueryFilter` к роутеру приложения. Библиотека от роутера не зависит:
 * приложение само передаёт параметры строки запроса и способ их записать.
 *
 * ```tsx
 * const [searchParams, setSearchParams] = useSearchParams();
 * <QueryFilterProvider searchParams={searchParams} setSearchParams={setSearchParams}>
 * ```
 */
export const QueryFilterProvider = ({
    searchParams,
    setSearchParams,
    pageParamName = DEFAULT_PAGE_PARAM_NAME,
    firstPage = DEFAULT_FIRST_PAGE,
    children,
}: TQueryFilterProviderProps) => {
    const value = useMemo(
        () => ({ searchParams, setSearchParams, pageParamName, firstPage }),
        [searchParams, setSearchParams, pageParamName, firstPage],
    );

    return <QueryFilterContext.Provider value={value}>{children}</QueryFilterContext.Provider>;
};

export const useQueryFilterContext = (): TQueryFilterContext => {
    const context = useContext(QueryFilterContext);

    if (!context) {
        throw new Error('useQueryFilter must be used inside QueryFilterProvider');
    }

    return context;
};
