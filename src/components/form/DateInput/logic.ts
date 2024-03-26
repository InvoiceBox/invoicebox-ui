class Logic {
    private today = new Date();

    getPlaceholder() {
        return this.valueToString(this.today);
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
    valueToString(value: null | Date): string {
        if (!value) return '';
        const toTwoDigits = (item: number) => `0${item}`.slice(-2);
        const date = [toTwoDigits(value.getDate()), toTwoDigits(value.getMonth() + 1), value.getFullYear()];
        return date.join('.');
    }

    // 31.01.2023 => Date
    stringToDate(str: string): Date {
        const [dd, mm, yyyy] = str.split('.');
        return new Date([mm, dd, yyyy].filter((i) => i).join('/'));
    }
}

export const logic = new Logic();
