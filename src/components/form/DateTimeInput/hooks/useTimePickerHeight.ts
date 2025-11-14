import { useEffect, useRef, useState } from 'react';

export const useTimePickerHeight = (isOpen: boolean) => {
    const calendarRef = useRef<HTMLDivElement>(null);

    const [timePickerHeight, setTimePickerHeight] = useState(0);

    const handleTimePickerSetHeight = () => {
        if (calendarRef.current?.offsetHeight) {
            setTimeout(() => setTimePickerHeight(calendarRef.current?.offsetHeight || 0), 0);
        }
    };

    useEffect(() => {
        handleTimePickerSetHeight();
    }, [isOpen]);

    return { calendarRef, timePickerHeight, handleTimePickerSetHeight };
};
