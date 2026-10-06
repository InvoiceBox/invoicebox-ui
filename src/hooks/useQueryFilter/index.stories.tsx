import React, { ReactNode, useCallback, useState } from 'react';
/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import {
    QueryFilterProvider,
    getDateOrNullFromQueryString,
    getQueryStringFromDateOrNull,
    useQueryFilter,
} from '.';

const meta: Meta = {
    title: 'hooks/useQueryFilter',
    tags: ['autodocs'],
};

export default meta;

// В приложении сюда передают useSearchParams() роутера; в истории адрес живёт в состоянии
const InMemoryRouter = ({ children }: { children: (search: string) => ReactNode }) => {
    const [searchParams, setSearchParamsState] = useState(() => new URLSearchParams());
    const setSearchParams = useCallback(
        (next: URLSearchParams) => setSearchParamsState(new URLSearchParams(next.toString())),
        [],
    );

    return (
        <QueryFilterProvider searchParams={searchParams} setSearchParams={setSearchParams}>
            {children(searchParams.toString())}
        </QueryFilterProvider>
    );
};

const Filters = () => {
    const [status, setStatus] = useQueryFilter<string>('status', 'pending');
    const [from, setFrom] = useQueryFilter<Date | null>(
        'from',
        null,
        getDateOrNullFromQueryString,
        getQueryStringFromDateOrNull,
    );

    return (
        <div>
            <p>status: {status || '—'}</p>
            <button type={'button'} onClick={() => setStatus('approved')}>
                status = approved
            </button>
            <button type={'button'} onClick={() => setStatus('')}>
                Сбросить status
            </button>
            <p>from: {from ? from.toLocaleString() : '—'}</p>
            <button type={'button'} onClick={() => setFrom(new Date())}>
                from = сейчас
            </button>
            <button type={'button'} onClick={() => setFrom(null)}>
                Сбросить from
            </button>
        </div>
    );
};

export const Default: StoryObj = {
    render: () => (
        <InMemoryRouter>
            {(search) => (
                <div>
                    <p>
                        Адрес: <code>?{search}</code>
                    </p>
                    <Filters />
                </div>
            )}
        </InMemoryRouter>
    ),
};
