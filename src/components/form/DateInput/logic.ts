class Logic {
    private today = new Date();

    getPlaceholder(withTime?: boolean) {
        return this.valueToString(this.today, withTime);
    }

    isValid(date: Date): boolean {
        return !Number.isNaN(date.valueOf());
    }

    isBetweenMinAndMax(date: Date, minDate?: Date, maxDate?: Date): boolean {
        const isValidByMin = !minDate ? true : date >= minDate;
        const isValidByMax = !maxDate ? true : date <= maxDate;
        return isValidByMin && isValidByMax;
    }

    // Date => 31.01.2023
    valueToString(value: null | Date, withTime?: boolean): string {
        if (!value) return '';
        const toTwoDigits = (item: number) => `0${item}`.slice(-2);
        const date = [
            toTwoDigits(value.getDate()),
            toTwoDigits(value.getMonth() + 1),
            value.getFullYear(),
        ].join('.');

        const time = [toTwoDigits(value.getHours()), toTwoDigits(value.getMinutes())].join(':');

        return withTime ? date + ' ' + time : date;
    }

    // 31.01.2023 => Date
    stringToDate(str: string, withTime?: boolean): Date {
        const [dateStr, timeStr] = str.split(' ');

        const [dd, mm, yyyy] = dateStr.split('.');
        const [hours, minutes] = timeStr ? timeStr.split(':') : ['00', '00'];

        const formattedDateStr = [mm, dd, yyyy].filter((i) => i).join('/');
        const formattedTimeStr = [hours, minutes, '00'].filter((i) => i).join(':');

        return new Date(withTime ? formattedDateStr + ' ' + formattedTimeStr : formattedDateStr);
    }

    addHoursAndMinutesToDate(date: Date, hours: number, minutes: number) {
        const newDate = new Date(date);
        newDate.setHours(hours, minutes, 0, 0);
        return newDate;
    }

    getHoursAndMinutesFromDate(date: Date) {
        return [date.getHours(), date.getMinutes()];
    }
}

export const logic = new Logic();
