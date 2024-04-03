import { useEffect, useState } from 'react';
import { phoneInputLogic } from '../phoneInputLogic';
import { allCountriesPhoneRules } from '../constants';
import { RUS_COUNTRY_CODE, TCountryRule } from '../types';

export const useValidateInitialValue = (
    initialValue: string,
    currentCountriesPhoneRules: { [p: string]: TCountryRule },
    onChange: (value: string) => void,
    setIsHaveInputError: (value: boolean) => void,
    setCountry: (value: string) => void,
) => {
    const [isInitialValidateDone, setIsInitialValidateDone] = useState(false);

    useEffect(() => {
        if (isInitialValidateDone) return;

        if (initialValue) {
            const currentCountry = Object.entries(currentCountriesPhoneRules).find((item) =>
                initialValue.startsWith(item[1].startSubsequence),
            );
            const isValidInputValue = phoneInputLogic.getIsValidPhoneInput(
                initialValue,
                currentCountry ? currentCountry[1] : allCountriesPhoneRules.RUS,
            );
            onChange(isValidInputValue ? initialValue : '');
            setIsHaveInputError(!isValidInputValue);
            setCountry(currentCountry ? currentCountry[0] : RUS_COUNTRY_CODE);
        }

        setIsInitialValidateDone(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInitialValidateDone]);
};
