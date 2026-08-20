import { TWheelOption } from '../MobileWheelPicker';

// Родительный падеж — барабан читается как одна строка: «20 июня 1986».
export const MONTHS = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

// Диапазон лет по умолчанию, когда minDate/maxDate не заданы.
const YEARS_BACK = 100;
const YEARS_FORWARD = 100;

const clampNumber = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const range = (from: number, to: number) =>
    to < from ? [from] : new Array(to - from + 1).fill(0).map((item, index) => from + index);

class DatePickerLogic {
    getDaysInMonth(year: number, month: number) {
        // Нулевой день следующего месяца — последний день текущего.
        return new Date(year, month + 1, 0).getDate();
    }

    getYearOptions(minDate?: Date, maxDate?: Date): Array<TWheelOption> {
        const currentYear = new Date().getFullYear();
        const from = minDate ? minDate.getFullYear() : currentYear - YEARS_BACK;
        const to = maxDate ? maxDate.getFullYear() : currentYear + YEARS_FORWARD;

        return range(from, to).map((year) => ({ value: year, label: year.toString() }));
    }

    getMonthOptions(year: number, minDate?: Date, maxDate?: Date): Array<TWheelOption> {
        const from = minDate && year === minDate.getFullYear() ? minDate.getMonth() : 0;
        const to = maxDate && year === maxDate.getFullYear() ? maxDate.getMonth() : 11;

        return range(from, to).map((month) => ({ value: month, label: MONTHS[month] }));
    }

    getDayOptions(year: number, month: number, minDate?: Date, maxDate?: Date): Array<TWheelOption> {
        const isMinMonth = !!minDate && year === minDate.getFullYear() && month === minDate.getMonth();
        const isMaxMonth = !!maxDate && year === maxDate.getFullYear() && month === maxDate.getMonth();

        const from = isMinMonth && minDate ? minDate.getDate() : 1;
        const to = isMaxMonth && maxDate ? maxDate.getDate() : this.getDaysInMonth(year, month);

        return range(from, to).map((day) => ({ value: day, label: day.toString() }));
    }

    // Приводит произвольную комбинацию колонок к дате внутри minDate/maxDate:
    // сначала год, затем месяц (он зависит от года), затем день (зависит от обоих).
    clampDate(year: number, month: number, day: number, minDate?: Date, maxDate?: Date): Date {
        const yearOptions = this.getYearOptions(minDate, maxDate);
        const safeYear = clampNumber(year, yearOptions[0].value, yearOptions[yearOptions.length - 1].value);

        const monthOptions = this.getMonthOptions(safeYear, minDate, maxDate);
        const safeMonth = clampNumber(
            month,
            monthOptions[0].value,
            monthOptions[monthOptions.length - 1].value,
        );

        const dayOptions = this.getDayOptions(safeYear, safeMonth, minDate, maxDate);
        const safeDay = clampNumber(day, dayOptions[0].value, dayOptions[dayOptions.length - 1].value);

        return new Date(safeYear, safeMonth, safeDay);
    }
}

export const datePickerLogic = new DatePickerLogic();
