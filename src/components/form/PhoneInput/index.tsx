import React, { ChangeEvent, FC, ClipboardEvent, useCallback, FocusEvent, useMemo, useState } from 'react';
import InputMask from '@mona-health/react-input-mask';
import * as S from './styles';
import { phoneInputLogic } from './phoneInputLogic';
import { useValidateInitialValue } from './hooks/useValidateInitialValue';
import { RUS_COUNTRY_CODE, TSupportedCountries } from './types';
import { useInputFocus } from '../../../hooks/useInputFocus';
import { InputLabel } from '../InputLabel';
import { PureInput, TProps as TPureInputProps } from '../PureInput';
import { CountrySelect, TProps as TCountrySelectProps } from '../CountrySelect';

type TFieldProps = Pick<TPureInputProps, 'name' | 'onBlur' | 'onFocus'> & {
    value: string;
    onChange: (value: string) => void;
    hasError?: boolean;
};

type TControlProps = Pick<TPureInputProps, 'disabled' | 'id'> & {
    label: string;
    countrySelectProps: Pick<TCountrySelectProps, 'selectedLabel' | 'placeholder'>;
    onCountryChange?: (countryCode: string) => void;
    countries?: Array<{ label: string; value: TSupportedCountries }>;
};

export type TProps = TControlProps & TFieldProps;

export const PhoneInput: FC<TProps> = ({
    onBlur,
    name,
    onFocus,
    countrySelectProps,
    value,
    onChange,
    hasError,
    label,
    disabled,
    id,
    countries,
    onCountryChange,
}) => {
    const countrySelectOptions = useMemo(
        () => phoneInputLogic.getCountriesSelectOptions(countries),
        [countries],
    );
    const isHaveSelectCountries = useMemo(
        () => phoneInputLogic.getIsHaveCountriesSelectOptions(countrySelectOptions),
        [countrySelectOptions],
    );
    const currentCountriesPhoneRules = useMemo(
        () => phoneInputLogic.getCountriesPhoneRules(countrySelectOptions),
        [countrySelectOptions],
    );

    const {
        inFocus,
        handleFocus: focusHandler,
        handleBlur: blurHandler,
    } = useInputFocus({ onFocus, onBlur });

    const [isHaveInputError, setIsHaveInputError] = useState(false);
    const [isFirstBlur, setIsFirstBlur] = useState(true);

    const [inputValue, setInputValue] = useState(value);
    const [country, setCountry] = useState(RUS_COUNTRY_CODE);

    const handleChangeCountry = useCallback(
        (countryCode: string) => {
            setCountry(countryCode);
            if (onCountryChange) {
                onCountryChange(countryCode);
            }
        },
        [onCountryChange],
    );

    const handleValid = useCallback(
        (currentInputValue: string, countryCode: string) => {
            onChange(currentInputValue);
            setIsHaveInputError(false);
            setCountry(countryCode);
        },
        [onChange],
    );

    const handleUnValid = useCallback(
        (countryCode: string) => {
            onChange('');
            setIsHaveInputError(true);
            setCountry(countryCode);
        },
        [onChange],
    );

    useValidateInitialValue(value, currentCountriesPhoneRules, handleValid, handleUnValid);

    // хак для того чтобы сдвигать каретку в случае если при вводе "9" надо заменить на "79", каретка не двигается сама и остаётся между "7" и "9" без этой функции
    const moveCaretByValue = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => (positionCaret: number) => {
            setTimeout(() => {
                event.target.setSelectionRange(positionCaret, positionCaret);
            }, 0);
        },
        [],
    );

    const getIsValidValue = useCallback(
        (currentValue: string) => {
            const currentCountry = currentCountriesPhoneRules[country];
            const newCountry = Object.entries(currentCountriesPhoneRules).find(
                (item) =>
                    phoneInputLogic.getIsHaveStartSequenceInString(currentValue, item[1].startSubsequence) &&
                    currentCountry.flag !== item[1].flag,
            );

            const isNeedChangeCountry =
                newCountry && currentCountry.startSubsequence !== newCountry[1].startSubsequence;
            const isNeedAndCanChangeCountry = isNeedChangeCountry && !!newCountry;
            if (isNeedAndCanChangeCountry) {
                handleChangeCountry(newCountry[0]);
            }

            return phoneInputLogic.getIsValidPhoneInput(
                currentValue,
                isNeedAndCanChangeCountry ? newCountry[1] : currentCountry,
            );
        },
        [country, currentCountriesPhoneRules, handleChangeCountry],
    );

    const handleInputValueChange = useCallback(
        (currentInputValue: string, event?: ChangeEvent<HTMLInputElement>) => {
            const notFormattedValue = phoneInputLogic.getOnlyNumbersFromString(currentInputValue);
            const moveCaret = event ? moveCaretByValue(event) : undefined;
            const intermediateValue =
                country === RUS_COUNTRY_CODE
                    ? phoneInputLogic.formatRusPhoneToUnifiedView(notFormattedValue, moveCaret)
                    : notFormattedValue;

            const isValidInputValue = getIsValidValue(intermediateValue);
            setIsHaveInputError(!isValidInputValue);
            onChange(isValidInputValue ? intermediateValue : '');
            setInputValue(intermediateValue);
        },
        [country, getIsValidValue, moveCaretByValue, onChange],
    );

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            handleInputValueChange(event.target.value, event);
        },
        [handleInputValueChange],
    );

    const handleBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            blurHandler(event);
            if (isFirstBlur) {
                setIsFirstBlur(false);
            }
        },
        [isFirstBlur, blurHandler],
    );

    const handleCountryChange = useCallback(
        (countryValue: string) => {
            handleChangeCountry(countryValue);
            const currentCountry = currentCountriesPhoneRules[countryValue];
            const isValidInputValue = phoneInputLogic.getIsValidPhoneInput(inputValue, currentCountry);
            setIsFirstBlur(false);
            setIsHaveInputError(!isValidInputValue);
        },
        [currentCountriesPhoneRules, handleChangeCountry, inputValue],
    );

    const handlePaste = useCallback(
        (event: ClipboardEvent<HTMLInputElement>) => {
            event.preventDefault();

            const pasteText = event.clipboardData.getData('Text').trim();
            handleInputValueChange(pasteText);
        },
        [handleInputValueChange],
    );

    return (
        <InputLabel inFocus={inFocus} label={label} disabled={disabled}>
            <S.InputLabelContent>
                {!!countrySelectOptions?.length && (
                    <S.InputLabelFloatWrapper>
                        <S.CountrySelectWrapper>
                            <CountrySelect
                                minWidth="350px"
                                options={countrySelectOptions}
                                onChange={handleCountryChange}
                                value={country}
                                placeholder={countrySelectProps.placeholder}
                                positionVertical={16}
                                positionRight="0"
                                positionLeft="-20px"
                                disabled={disabled}
                                selectedLabel={countrySelectProps.selectedLabel}
                            />
                        </S.CountrySelectWrapper>
                    </S.InputLabelFloatWrapper>
                )}
                <InputMask
                    value={inputValue}
                    onFocus={focusHandler}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    mask={currentCountriesPhoneRules[country].mask}
                    maskPlaceholder={null}
                    disabled={disabled}
                    onPaste={handlePaste}
                    placeholder={currentCountriesPhoneRules[country].placeholder}
                >
                    <PureInput
                        id={id}
                        hasError={hasError || (isFirstBlur ? false : isHaveInputError)}
                        inFocus={inFocus}
                        name={name}
                        paddingLeft={isHaveSelectCountries ? 75 : 18}
                        autoComplete={'off'}
                    />
                </InputMask>
            </S.InputLabelContent>
        </InputLabel>
    );
};
