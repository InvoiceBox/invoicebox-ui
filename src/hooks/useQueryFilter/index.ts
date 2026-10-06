import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQueryFilterContext } from './context';

export { QueryFilterProvider, DEFAULT_PAGE_PARAM_NAME, DEFAULT_FIRST_PAGE } from './context';
export type { TQueryFilterProviderProps } from './context';
export * from './helpers';

export type TUseQueryArgumentType =
    | string
    | Array<string>
    | undefined
    | [Date, Date]
    | null
    | number
    | Date
    | boolean
    | { start: Date; end: Date };

const getIsEmptyValue = (value: TUseQueryArgumentType) =>
    value === '' || value === undefined || value === null || (Array.isArray(value) && value.length === 0);

/**
 * Значение фильтра, которое живёт в строке запроса.
 *
 * - `initialValue` записывается в адрес при монтировании, если параметра там ещё нет;
 *   пустое значение (`''`, `null`, `undefined`, `[]`) удаляет параметр.
 * - Смена значения сбрасывает номер страницы на первую (`isResetPageWhenChanged`).
 * - Начальное значение можно передавать выражением (`new Date()`, `[]`): хук сравнивает его
 *   по строке, которую оно даёт в адресе, а не по ссылке.
 *
 * Нужен `QueryFilterProvider` выше по дереву.
 */
export const useQueryFilter = <T extends TUseQueryArgumentType>(
    name: string,
    initialValue: T,
    fromString?: (value: string | null) => T,
    toString?: (value: T) => string,
    isResetPageWhenChanged = true,
): [T, (newValue: T) => void] => {
    const { searchParams, setSearchParams, pageParamName, firstPage } = useQueryFilterContext();

    // для тех случаев когда если initialValue и в случае когда он не успел вставить в квери параметры - возвращать его
    const [acceptInitialValueDone, setAcceptInitialValueDone] = useState(false);

    const serialize = useCallback(
        (value: T) => {
            if (getIsEmptyValue(value)) return '';
            return toString ? toString(value) : String(value);
        },
        [toString],
    );

    const removeAttribute = useCallback(
        (isResetPage: boolean) => {
            if (searchParams.has(name)) {
                searchParams.delete(name);
                if (isResetPage) {
                    searchParams.set(pageParamName, String(firstPage));
                }
                setSearchParams(searchParams);
            }
        },
        [firstPage, name, pageParamName, searchParams, setSearchParams],
    );

    const handleQueryChange = useCallback(
        (newValue: T) => {
            if (getIsEmptyValue(newValue)) {
                removeAttribute(isResetPageWhenChanged);
                return;
            }

            searchParams.set(name, serialize(newValue));
            if (isResetPageWhenChanged) {
                searchParams.set(pageParamName, String(firstPage));
            }
            setSearchParams(searchParams);
        },
        [
            firstPage,
            isResetPageWhenChanged,
            name,
            pageParamName,
            removeAttribute,
            searchParams,
            serialize,
            setSearchParams,
        ],
    );

    const acceptInitialValue = useCallback(
        (initial: T) => {
            if (!searchParams.has(name)) {
                if (getIsEmptyValue(initial)) {
                    removeAttribute(true);
                    setAcceptInitialValueDone(true);
                    return;
                }
                searchParams.set(name, serialize(initial));
                setSearchParams(searchParams);
            }
            setAcceptInitialValueDone(true);
        },
        [name, removeAttribute, searchParams, serialize, setSearchParams],
    );

    /**
     * Начальное значение, стабилизированное по его строковому представлению.
     *
     * Вызывающие часто передают начальное значение выражением (`monthStart()`, `[]`,
     * `new Date()`), то есть новым объектом на каждый рендер. Если зависеть от самой
     * ссылки, эффект ниже срабатывает на каждом рендере (и возвращает в адрес значение
     * по умолчанию, которое пользователь только что сбросил), а значение фильтра каждый
     * раз получает новую ссылку — эффект с запросом перезапускается без конца. Поэтому
     * ссылка меняется только когда меняется строка, которую значение даёт в адресе.
     */
    const initialKey = serialize(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const stableInitialValue = useMemo(() => initialValue, [initialKey]);

    useEffect(() => {
        acceptInitialValue(stableInitialValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stableInitialValue]);

    const handleGetValueFromString = useCallback(
        (queryValue: string | null): T => {
            if (fromString) {
                return fromString(queryValue);
            }
            return (queryValue || '') as T;
        },
        [fromString],
    );

    /**
     * Строку читаем на каждом рендере, а не кешируем по объекту `searchParams`: эффект
     * начального значения дописывает параметр прямо в текущий объект, а навигация
     * (react-router 7 — переходом с низким приоритетом) приходит позже. Между ними есть
     * рендер, где объект прежний, но строка в нём уже новая, — по ней и надо считать,
     * иначе фильтр на один рендер «пустеет» и уходит лишний запрос.
     *
     * Пока строка в адресе совпадает с начальной, отдаём сам `stableInitialValue`, а не
     * результат разбора: иначе `new Date(...)` из разборщика дал бы новую ссылку при тех
     * же данных и эффект с запросом сработал бы ещё раз.
     */
    const rawQueryValue = searchParams.get(name) ?? '';
    const isInitialNotAppliedYet = !acceptInitialValueDone && !searchParams.has(name);

    const formattedValue = useMemo(() => {
        if (isInitialNotAppliedYet || rawQueryValue === initialKey) {
            return stableInitialValue;
        }
        return handleGetValueFromString(rawQueryValue || null);
    }, [handleGetValueFromString, initialKey, isInitialNotAppliedYet, rawQueryValue, stableInitialValue]);

    return [formattedValue, handleQueryChange];
};
