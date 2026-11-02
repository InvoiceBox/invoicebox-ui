import { MutableRefObject, useEffect, useRef } from 'react';
import { RUS_COUNTRY_CODE, TCountryRule } from '../types';
import { PhoneInputLogic } from '../phoneInputLogic';

/**
 * Проверяет значение, пришедшее снаружи: начальное и любое последующее (`reset`, `setValue`).
 *
 * Собственные `onChange` инпута сюда не попадают: при наборе в форму уходит `''`, пока номер
 * не валиден, и синхронизация по такому эху стирала бы недописанный номер. Поэтому каждое
 * отданное наружу значение запоминается в `lastEmittedValueRef`, и совпадающий с ним `value`
 * пропускается.
 */
export const useSyncExternalValue = (
    phoneInputLogic: PhoneInputLogic,
    value: string,
    currentCountriesPhoneRules: { [p: string]: TCountryRule },
    lastEmittedValueRef: MutableRefObject<string>,
    onValid: (currentInputValue: string, countryCode: string) => void,
    onUnValid: (currentInputValue: string, countryCode: string) => void,
    onClear: () => void,
) => {
    const isInitialRef = useRef(true);

    useEffect(() => {
        const isInitial = isInitialRef.current;
        isInitialRef.current = false;

        if (!isInitial && value === lastEmittedValueRef.current) return;

        lastEmittedValueRef.current = value;

        if (!value) {
            if (!isInitial) onClear();
            return;
        }

        const notFormattedValue = phoneInputLogic.getOnlyNumbersFromString(value);
        const currentCountry = Object.entries(currentCountriesPhoneRules).find((item) =>
            phoneInputLogic.getIsHaveStartSequenceInString(notFormattedValue, item[1].startSubsequence),
        );
        const countryCode = currentCountry ? currentCountry[0] : RUS_COUNTRY_CODE;
        const isValidInputValue = phoneInputLogic.getIsValidPhoneInputByCountry(
            notFormattedValue,
            currentCountry ? currentCountry[1] : phoneInputLogic.getRusCountry(),
        );

        if (isValidInputValue) {
            onValid(notFormattedValue, countryCode);
        } else {
            onUnValid(notFormattedValue, countryCode);
        }

        // Реагируем только на смену значения: правила и колбэки на результат не влияют
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
};
