class TaxCategoryLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.COMPANY_SETTINGS_SECTION = '//span[.="company settings"]';
        this.TAXES_SUBSECTION = '//span[.="taxes"]';
        this.TAX_CATEGORIES_TAB = '//span[.="tax categories"]';
        this.NEW_BTN = '//button[.="new"]';
        this.TAX_CODE_FIELD = '//span[.="code:"]/../..//input';
        this.SAVE_BTN_SELECTOR = "//button[.='save']";
        this.SEARCH_FIELD =
            '//div[@class="list settingsList"]//input[@placeholder ="search"]';
    }
}

module.exports = new TaxCategoryLoc();
