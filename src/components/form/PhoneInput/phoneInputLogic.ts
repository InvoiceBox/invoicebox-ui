import { TCountryRule, TCountrySelectOption, TSupportedCountries, UNKNOWN_COUNTRY_CODE } from './types';
import { getAllCountriesPhoneRules, MASK_DIGIT_ITEM } from './constants';
import { TFlagKey } from '../../common/Flag';
import { ChangeEvent, ClipboardEvent } from 'react';

export class PhoneInputLogic {
    private isSupportCityRusPhoneNumber: boolean;
    private allCountriesPhoneRules: Record<TSupportedCountries, TCountryRule>;

    constructor(isSupportCityRusPhoneNumber: boolean) {
        this.isSupportCityRusPhoneNumber = isSupportCityRusPhoneNumber;
        this.allCountriesPhoneRules = getAllCountriesPhoneRules(isSupportCityRusPhoneNumber);
    }

    getRusCountry() {
        return this.allCountriesPhoneRules.RUS;
    }

    private getCaretPositionByRusValue(value: string) {
        const mask = this.getRusCountry().mask.split('');
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

    getSupportedCountriesByCountryNames(countries?: Array<TSupportedCountries>) {
        return countries?.filter((country) => this.allCountriesPhoneRules[country]);
    }

    getCountriesSelectOptions(countries?: Array<{ label: string; value: TSupportedCountries }>) {
        const supportedCountries = countries?.filter((country) => this.allCountriesPhoneRules[country.value]);

        return supportedCountries?.map((country) => {
            const countryRules = this.allCountriesPhoneRules[country.value];
            return {
                ...country,
                description: countryRules.startSubsequence ? `+${countryRules.startSubsequence}` : '',
                flag: countryRules.flag as TFlagKey,
            };
        });
    }

    getIsHaveCountriesSelectOptions(
        countrySelectOptions?: Array<TCountrySelectOption | TSupportedCountries>,
    ) {
        return !!countrySelectOptions?.length;
    }

    getCountriesPhoneRulesBySelectOptions(countrySelectOptions?: Array<TCountrySelectOption>) {
        return this.getIsHaveCountriesSelectOptions(countrySelectOptions)
            ? Object.fromEntries(
                  Object.entries(this.allCountriesPhoneRules).filter((ruleItem) =>
                      countrySelectOptions?.find(
                          (countrySelectOption) => countrySelectOption.value === ruleItem[0],
                      ),
                  ),
              )
            : { RUS: this.getRusCountry() };
    }

    getCountriesPhoneRulesByCountryNames(countrySelectOptions?: Array<TSupportedCountries>) {
        return this.getIsHaveCountriesSelectOptions(countrySelectOptions)
            ? Object.fromEntries(
                  Object.entries(this.allCountriesPhoneRules).filter((ruleItem) =>
                      countrySelectOptions?.find(
                          (countrySelectOption) => countrySelectOption === ruleItem[0],
                      ),
                  ),
              )
            : { RUS: this.getRusCountry() };
    }

    getIsHaveStartSequenceInString(value: string, subsequence: string) {
        return value.startsWith(subsequence);
    }

    // '8' => '+7', '9' => '+79'
    formatRusPhoneToUnifiedView(value: string, moveCaret?: (positionCaret: number) => void) {
        let result = value;

        if (value[0] === '8') {
            result = `7${value.slice(1)}`;
            if (moveCaret) {
                // когда пользователь вводит номер с "9", мы подставляем в инпут "79", но каретка не переносится после "9" - также при вставке, нужно это делать вручную
                moveCaret(this.getCaretPositionByRusValue(result));
            }
        }
        if (
            value.length === 10 &&
            value[0] !== '7' &&
            (value[0] !== '8' || (this.isSupportCityRusPhoneNumber && value[0] === '8'))
        ) {
            result = `7${value}`;
            if (moveCaret) {
                moveCaret(this.getCaretPositionByRusValue(result));
            }
        }
        if (value[0] === '9') {
            result = `79${value.slice(1)}`;
            if (moveCaret) {
                moveCaret(this.getCaretPositionByRusValue(result));
            }
        }
        return result;
    }

    getOnlyNumbersFromString(value: string) {
        return value.match(/\d/g)?.join('') || '';
    }

    // хак для того чтобы сдвигать каретку в случае если при вводе "9" надо заменить на "79", каретка не двигается сама и остаётся между "7" и "9" без этой функции
    moveCaretByValue(event: ChangeEvent<HTMLInputElement> | ClipboardEvent<HTMLInputElement>) {
        return (positionCaret: number) => {
            setTimeout(() => {
                if ('setSelectionRange' in event.target) {
                    event.target.setSelectionRange(positionCaret, positionCaret);
                }
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
