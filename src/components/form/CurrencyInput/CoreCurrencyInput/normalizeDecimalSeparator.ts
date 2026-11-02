export const DECIMAL_SEPARATOR = ',';

// 1,500.50 / 1,500,000.5 — запятая как разделитель разрядов, точка — дробная часть
const COMMA_GROUPS_DOT_DECIMAL = /^-?\d{1,3}(,\d{3})+\.\d*$/;
// 1.500.000 — точка как разделитель разрядов (минимум две группы, чтобы не путать с 1.500)
const DOT_GROUPS = /^-?\d{1,3}(\.\d{3}){2,}$/;

/**
 * Приводит сырое значение инпута к формату с запятой в качестве десятичного разделителя.
 *
 * `react-currency-input-field` при `decimalSeparator: ','` считает точку недопустимым символом
 * и выбрасывает её: «1500.50» превращалось в 150050, «1.5» — в 15. Функция передаётся
 * в `transformRawValue` и вызывается до очистки значения — и при наборе, и при вставке.
 */
export const normalizeDecimalSeparator = (rawValue: string): string => {
    if (!rawValue.includes('.')) {
        return rawValue;
    }

    const compact = rawValue.replace(/\s/g, '');

    if (COMMA_GROUPS_DOT_DECIMAL.test(compact)) {
        return compact.replace(/,/g, '').replace('.', DECIMAL_SEPARATOR);
    }

    if (DOT_GROUPS.test(compact)) {
        return compact.replace(/\./g, '');
    }

    // Дробная часть уже есть — вторую не создаём, точка отбрасывается библиотекой как раньше
    if (rawValue.includes(DECIMAL_SEPARATOR)) {
        return rawValue;
    }

    const lastDotIndex = rawValue.lastIndexOf('.');

    return `${rawValue.slice(0, lastDotIndex).replace(/\./g, '')}${DECIMAL_SEPARATOR}${rawValue.slice(lastDotIndex + 1)}`;
};
