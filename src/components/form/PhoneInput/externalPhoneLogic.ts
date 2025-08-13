import { TSupportedCountries } from './types';
import { PhoneInputLogic } from './phoneInputLogic';

class ExternalPhoneLogic {
    getIsValidPhone(
        value: string,
        countries?: Array<TSupportedCountries>,
        isSupportCityRusPhoneNumber?: boolean,
    ) {
        const phoneInputLogic = new PhoneInputLogic(isSupportCityRusPhoneNumber || false);

        const notFormattedValue = phoneInputLogic.getOnlyNumbersFromString(value);
        const supportedCountries = phoneInputLogic.getSupportedCountriesByCountryNames(countries);
        const currentCountriesPhoneRules =
            phoneInputLogic.getCountriesPhoneRulesByCountryNames(supportedCountries);

        const country = Object.entries(currentCountriesPhoneRules).find((item) =>
            phoneInputLogic.getIsHaveStartSequenceInString(notFormattedValue, item[1].startSubsequence),
        );
        return phoneInputLogic.getIsValidPhoneInputByCountry(
            notFormattedValue,
            country ? country[1] : phoneInputLogic.getRusCountry(),
        );
    }

    getIsValidRusPhone(phone?: string, isSupportCityRusPhoneNumber?: boolean) {
        const phoneInputLogic = new PhoneInputLogic(isSupportCityRusPhoneNumber || false);

        return phoneInputLogic.getIsValidPhoneInputByCountry(phone || '', phoneInputLogic.getRusCountry());
    }
}

export const phoneLogic = new ExternalPhoneLogic();
