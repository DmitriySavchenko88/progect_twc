class TaxAreaLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.COMPANY_SETTINGS_SECTION = '//span[.="company settings"]';
        this.TAXES_SUBSECTION = '//span[.="taxes"]';
        this.TAX_AREAS_TAB = '//span[.="tax areas"]';
        this.NEW_BTN = '//button[.="new"]';
        this.TAX_AREA_CODE_FIELD = '//span[.="code:"]/../..//input';
        this.TAX_AREA_COUNTRY_FIELD = '//span[.="country:"]/../..//input';
        this.TAX_AREA_TYPE_DROPDOWN = '//span[.="type:"]/../..//i';
        this.DROPDOWN = '//*[@id="applicationHost"]//*[@role="listbox"]';
        this.SAVE_BTN_SELECTOR = "//button[.='save']";
        this.SEARCH_FIELD =
            '//div[@class="list settingsList"]//input[@placeholder ="search"]';
    }
}

module.exports = new TaxAreaLoc();
