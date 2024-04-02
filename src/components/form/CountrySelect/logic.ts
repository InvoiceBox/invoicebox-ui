class Logic {
    isSearchMatchOption(search: string, optionLabel: string): boolean {
        return optionLabel.toLowerCase().includes(search.trim().toLowerCase());
    }
}

export const logic = new Logic();
