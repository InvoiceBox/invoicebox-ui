import { TSupportedCountries } from './types';
import { allCountriesPhoneRules } from './constants';
import { phoneInputLogic } from './phoneInputLogic';

class ExternalPhoneLogic {
    getIsValidPhone(value: string, countries?: Array<{ label: string; value: TSupportedCountries }>) {
        const notFormattedValue = phoneInputLogic.getOnlyNumbersFromString(value);
        const countrySelectOptions = phoneInputLogic.getCountriesSelectOptions(countries);
        const currentCountriesPhoneRules = phoneInputLogic.getCountriesPhoneRules(countrySelectOptions);

        const country = Object.entries(currentCountriesPhoneRules).find((item) =>
            phoneInputLogic.getIsHaveStartSequenceInString(notFormattedValue, item[1].startSubsequence),
        );
        return phoneInputLogic.getIsValidPhoneInputByCountry(
            notFormattedValue,
            country ? country[1] : allCountriesPhoneRules.RUS,
        );
    }
}

export const phoneLogic = new ExternalPhoneLogic();
