import { useEffect, useState } from 'react';
import { phoneInputLogic } from '../phoneInputLogic';
import { allCountriesPhoneRules } from '../constants';
import { RUS_COUNTRY_CODE, TCountryRule } from '../types';

export const useValidateInitialValue = (
    initialValue: string,
    currentCountriesPhoneRules: { [p: string]: TCountryRule },
    onValid: (currentInputValue: string, countryCode: string) => void,
    onUnValid: (countryCode: string) => void,
) => {
    const [isInitialValidateDone, setIsInitialValidateDone] = useState(false);

    useEffect(() => {
        if (isInitialValidateDone) return;

        if (initialValue) {
            const notFormattedValue = phoneInputLogic.getOnlyNumbersFromString(initialValue);
            const currentCountry = Object.entries(currentCountriesPhoneRules).find((item) =>
                phoneInputLogic.getIsHaveStartSequenceInString(notFormattedValue, item[1].startSubsequence),
            );
            const countryCode = currentCountry ? currentCountry[0] : RUS_COUNTRY_CODE;
            const isValidInputValue = phoneInputLogic.getIsValidPhoneInput(
                notFormattedValue,
                currentCountry ? currentCountry[1] : allCountriesPhoneRules.RUS,
            );
            if (isValidInputValue) {
                onValid(notFormattedValue, countryCode);
            } else {
                onUnValid(countryCode);
            }
        }

        setIsInitialValidateDone(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInitialValidateDone]);
};
