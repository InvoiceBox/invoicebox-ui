import { TCountryRule, TCountrySelectOption, TSupportedCountries, UNKNOWN_COUNTRY_CODE } from './types';
import { allCountriesPhoneRules, MASK_DIGIT_ITEM } from './constants';
import { TFlagKey } from '../../common/Flag';
import { ChangeEvent } from 'react';

class PhoneInputLogic {
    private getCaretPositionByRusValue(value: string) {
        const mask = allCountriesPhoneRules.RUS.mask.split('');
        let counter = 0;
        let position = 0;
        mask.forEach((maskItem, index) => {
            if (maskItem === MASK_DIGIT_ITEM) {
                counter += 1;
                if (counter === value.length) {
                    position = index + 1;
                }
            }
        });

        return position;
    }

    getIsValidPhoneInputByCountry(value: string, country: TCountryRule) {
        return !!value.match(country.regexp);
    }

    getIsValidPhone(value: string, countries?: Array<{ label: string; value: TSupportedCountries }>) {
        const notFormattedValue = this.getOnlyNumbersFromString(value);
        const countrySelectOptions = this.getCountriesSelectOptions(countries);
        const currentCountriesPhoneRules = this.getCountriesPhoneRules(countrySelectOptions);

        const country = Object.entries(currentCountriesPhoneRules).find((item) =>
            phoneInputLogic.getIsHaveStartSequenceInString(notFormattedValue, item[1].startSubsequence),
        );
        return this.getIsValidPhoneInputByCountry(
            notFormattedValue,
            country ? country[1] : allCountriesPhoneRules.RUS,
        );
    }

    getCountriesSelectOptions(countries?: Array<{ label: string; value: TSupportedCountries }>) {
        const supportedCountries = countries?.filter((country) => allCountriesPhoneRules[country.value]);

        return supportedCountries?.map((country) => {
            const countryRules = allCountriesPhoneRules[country.value];
            return {
                ...country,
                description: countryRules.startSubsequence ? `+${countryRules.startSubsequence}` : '',
                flag: countryRules.flag as TFlagKey,
            };
        });
    }

    getIsHaveCountriesSelectOptions(countrySelectOptions?: Array<TCountrySelectOption>) {
        return !!countrySelectOptions?.length;
    }

    getCountriesPhoneRules(countrySelectOptions?: Array<TCountrySelectOption>) {
        return this.getIsHaveCountriesSelectOptions(countrySelectOptions)
            ? Object.fromEntries(
                  Object.entries(allCountriesPhoneRules).filter((ruleItem) =>
                      countrySelectOptions?.find(
                          (countrySelectOption) => countrySelectOption.value === ruleItem[0],
                      ),
                  ),
              )
            : { RUS: allCountriesPhoneRules.RUS };
    }

    getIsHaveStartSequenceInString(value: string, subsequence: string) {
        return value.startsWith(subsequence);
    }

    // '8' => '+7', '9' => '+79'
    formatRusPhoneToUnifiedView(value: string, moveCaret?: (positionCaret: number) => void) {
        let result = value;

        if (value[0] === '8') {
            result = `7${value.slice(1)}`;
        }
        if (value[0] === '9') {
            const newValue = `79${value.slice(1)}`;
            result = newValue;
            if (moveCaret) {
                // когда пользователь вводит номер с "9", мы подставляем в инпут "79", но каретка не переносится после "9", нужно это делать вручную
                moveCaret(this.getCaretPositionByRusValue(newValue));
            }
        }

        return result;
    }

    getOnlyNumbersFromString(value: string) {
        return value.match(/\d/g)?.join('') || '';
    }

    // хак для того чтобы сдвигать каретку в случае если при вводе "9" надо заменить на "79", каретка не двигается сама и остаётся между "7" и "9" без этой функции
    moveCaretByValue(event: ChangeEvent<HTMLInputElement>) {
        return (positionCaret: number) => {
            setTimeout(() => {
                event.target.setSelectionRange(positionCaret, positionCaret);
            }, 0);
        };
    }

    getIsNeedChangeCountry(
        inputValue: string,
        currentCountry: TCountryRule,
        newCountry?: [string, TCountryRule],
    ) {
        return (
            newCountry &&
            currentCountry.startSubsequence !== newCountry[1].startSubsequence &&
            inputValue &&
            (newCountry[0] === UNKNOWN_COUNTRY_CODE
                ? !this.getIsHaveStartSequenceInString(inputValue, currentCountry.startSubsequence)
                : true)
        );
    }
}

export const phoneInputLogic = new PhoneInputLogic();
export const getIsValidPhone = phoneInputLogic.getIsValidPhone;
