import { useEffect, useState } from 'react';
import { logic } from '../../DateInput/logic';

const resetValue = null;

export const useStringValue = (value: Date | null): [string, (value: string) => void] => {
    const [stringValue, setStringValue] = useState(logic.valueToString(value, true));

    useEffect(() => {
        if (stringValue && value === resetValue) {
            setStringValue('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return [stringValue, setStringValue];
};
