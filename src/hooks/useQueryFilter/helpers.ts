export const DATA_SPLITTER = '!!!';

const pad = (value: number) => String(value).padStart(2, '0');

/**
 * Дата в строку запроса: локальное время со смещением, `yyyy-MM-dd'T'HH:mm:ssxxx`
 * (например, `2026-10-06T19:16:00+07:00`). Миллисекунды отбрасываются.
 */
export const formatDateForQuery = (date: Date): string => {
    const offsetMinutes = -date.getTimezoneOffset();
    const sign = offsetMinutes >= 0 ? '+' : '-';
    const absOffset = Math.abs(offsetMinutes);

    return (
        `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
        `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}` +
        `${sign}${pad(Math.floor(absOffset / 60))}:${pad(absOffset % 60)}`
    );
};

/** Дата без времени: `yyyy-MM-dd` по местному времени */
export const formatDateOnlyForQuery = (date: Date): string =>
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

export const getDateOrNullFromQueryString = (value: string | null) => (value ? new Date(value) : null);
export const getQueryStringFromDateOrNull = (value: Date | null) => (value ? formatDateForQuery(value) : '');

export const getDateArrOrNullFromQueryString = (value: string | null): [Date, Date] | null => {
    if (value) {
        const datesArray = value.split(DATA_SPLITTER).map((date) => new Date(date));

        if (datesArray.length === 2) {
            return [datesArray[0], datesArray[1]];
        }
    }

    return null;
};
// Диапазон дат хранится в адресе без времени — так он и раньше писался в кабинете
export const getQueryStringFromDateArrOrNull = (value: [Date, Date] | null) =>
    value ? value.map(formatDateOnlyForQuery).join(DATA_SPLITTER) : '';

export const getNumberOrNullFromQueryString = (value: string | null) => (value ? Number(value) : null);
export const getQueryStringFromNumberOrNull = (value: number | null) => (value ? String(value) : '');

export const getQueryStringFromArrayString = (value: Array<string> | undefined) =>
    value?.join(DATA_SPLITTER) || '';
export const getArrayStringsFromQueryString = (value: string | null) =>
    value ? value.split(DATA_SPLITTER) : undefined;

export const booleanFromString = (value: string | null) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return null;
};
