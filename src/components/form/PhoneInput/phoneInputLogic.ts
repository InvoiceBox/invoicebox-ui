import { TCountryRule, TCountrySelectOption, TSupportedCountries } from './types';
import { allCountriesPhoneRules } from './constants';
import { TFlagKey } from '../../common/Flag';

class PhoneInputLogic {
    getIsValidPhoneInput(value: string, country: TCountryRule) {
        return !!value.match(country.regexp);
    }

    getCountriesSelectOptions(countries?: Array<{ label: string; value: TSupportedCountries }>) {
        const supportedCountries = countries?.filter((country) => allCountriesPhoneRules[country.value]);

        return supportedCountries?.map((country) => {
            const countryRules = allCountriesPhoneRules[country.value];
            return {
                ...country,
                description: `+${countryRules.startSubsequence}`,
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

    getOnlyNumbersFromString(value: string) {
        return value.match(/\d/g)?.join('') || '';
    }
}

export const phoneInputLogic = new PhoneInputLogic();
