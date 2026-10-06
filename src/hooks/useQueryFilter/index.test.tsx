/**
 * @jest-environment jsdom
 */
import React, { act, ReactNode, startTransition, useCallback, useEffect, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';
import {
    booleanFromString,
    formatDateForQuery,
    getDateArrOrNullFromQueryString,
    getQueryStringFromDateArrOrNull,
    getDateOrNullFromQueryString,
    getQueryStringFromDateOrNull,
    QueryFilterProvider,
    useQueryFilter,
} from '.';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let url = '';

/**
 * Роутер в памяти, ведущий себя как react-router 7: запись адреса идёт переходом с низким
 * приоритетом, а в следующем рендере приходит новый объект URLSearchParams.
 */
const MemoryRouter = ({ initial = '', children }: { initial?: string; children: ReactNode }) => {
    const [searchParams, setSearchParamsState] = useState(() => new URLSearchParams(initial));
    const setSearchParams = useCallback((next: URLSearchParams) => {
        const nextString = next.toString();
        url = nextString;
        startTransition(() => setSearchParamsState(new URLSearchParams(nextString)));
    }, []);

    return (
        <QueryFilterProvider searchParams={searchParams} setSearchParams={setSearchParams}>
            {children}
        </QueryFilterProvider>
    );
};

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
    url = '';
    container = document.createElement('div');
    root = createRoot(container);
});

afterEach(() => {
    act(() => root.unmount());
});

const render = (node: ReactNode) => act(() => root.render(node));

describe('useQueryFilter', () => {
    test('строковое значение по умолчанию: попадает в адрес, запрос один', () => {
        const requests: Array<string> = [];
        let setter: (value: string) => void = () => undefined;

        const List = () => {
            const [status, setStatus] = useQueryFilter<string>('status', 'pending');
            setter = setStatus;
            useEffect(() => {
                requests.push(status);
            }, [status]);
            return null;
        };

        render(
            <MemoryRouter>
                <List />
            </MemoryRouter>,
        );

        expect(url).toBe('status=pending');
        expect(requests).toEqual(['pending']);

        act(() => setter('approved'));
        expect(url).toBe('status=approved&page=1');
        expect(requests).toEqual(['pending', 'approved']);
    });

    test('дата по умолчанию выражением: ни лишнего запроса, ни цикла', () => {
        const requests: Array<string> = [];
        const from = new Date(2026, 9, 1, 12, 30, 15);

        const List = () => {
            // новый объект на каждом рендере — так вызывающие и пишут
            const [dateFrom] = useQueryFilter<Date | null>(
                'from',
                new Date(from.getTime()),
                getDateOrNullFromQueryString,
                getQueryStringFromDateOrNull,
            );
            useEffect(() => {
                requests.push(String(dateFrom?.getTime()));
            }, [dateFrom]);
            return null;
        };

        render(
            <MemoryRouter>
                <List />
            </MemoryRouter>,
        );

        expect(new URLSearchParams(url).get('from')).toBe(formatDateForQuery(from));
        expect(requests).toEqual([String(from.getTime())]);
    });

    test('значение из адреса важнее значения по умолчанию', () => {
        let value = '';

        const List = () => {
            [value] = useQueryFilter<string>('status', 'pending');
            return null;
        };

        render(
            <MemoryRouter initial="status=rejected&page=3">
                <List />
            </MemoryRouter>,
        );

        expect(value).toBe('rejected');
        expect(url).toBe('');
    });

    test('сброс фильтра с непустым значением по умолчанию не возвращает его обратно', () => {
        let value: Array<string> | undefined;
        let setter: (next: Array<string> | undefined) => void = () => undefined;

        const List = () => {
            [value, setter] = useQueryFilter<Array<string> | undefined>(
                'ids',
                ['a', 'b'],
                (raw) => (raw ? raw.split(',') : undefined),
                (next) => (next ? next.join(',') : ''),
            );
            return null;
        };

        render(
            <MemoryRouter>
                <List />
            </MemoryRouter>,
        );
        expect(value).toEqual(['a', 'b']);

        act(() => setter(undefined));
        expect(url).toBe('page=1');
        expect(value).toBeUndefined();
    });

    test('isResetPageWhenChanged=false не трогает страницу', () => {
        let setter: (next: string) => void = () => undefined;

        const List = () => {
            [, setter] = useQueryFilter<string>('q', '', undefined, undefined, false);
            return null;
        };

        render(
            <MemoryRouter initial="page=4">
                <List />
            </MemoryRouter>,
        );

        act(() => setter('abc'));
        expect(url).toBe('page=4&q=abc');
    });
});

describe('formatDateForQuery', () => {
    test('локальное время со смещением, без миллисекунд', () => {
        const date = new Date(2026, 0, 2, 3, 4, 5, 678);
        const formatted = formatDateForQuery(date);

        expect(formatted).toMatch(/^2026-01-02T03:04:05[+-]\d{2}:\d{2}$/);
        expect(new Date(formatted).getTime()).toBe(new Date(2026, 0, 2, 3, 4, 5).getTime());
    });
});

describe('разборщики', () => {
    test('диапазон дат пишется без времени и читается обратно', () => {
        const range: [Date, Date] = [new Date(2026, 9, 1, 15, 0), new Date(2026, 9, 31, 9, 0)];
        const query = getQueryStringFromDateArrOrNull(range);

        expect(query).toBe('2026-10-01!!!2026-10-31');
        expect(getDateArrOrNullFromQueryString(query)).toHaveLength(2);
        expect(getDateArrOrNullFromQueryString(null)).toBeNull();
    });

    test('булевы значения', () => {
        expect(booleanFromString('true')).toBe(true);
        expect(booleanFromString('false')).toBe(false);
        expect(booleanFromString(null)).toBeNull();
    });
});
