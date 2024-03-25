class FiscalZoneLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.COMPANY_SETTINGS_SECTION = '//span[.="company settings"]';
        this.CREDIT_AND_REWARD_SUBSECTION =
            '//span[.="credit & reward platform"]';
        this.FISCAL_ZONES_TAB = '//span[.="fiscal zones"]';
        this.NEW_BTN = '//button[.="new"]';
        this.FISCAL_ZONE_NAME_FIELD =
            '//span[.="fiscal zone name:"]/../..//input';
        this.CURRENCY_FIELD = '//span[.="currency:"]/../..//input';
        this.DROPDOWN =
            '//ul[contains(@class, "ui-autocomplete")][contains(@style, "display: block")]';
        this.LOCATION_TAB = '//button[@id="locations"]';
        this.LOCATION_TABLE = '//table[@id="giftCards-location-grid"]';
        this.GIFT_CARDS_TAB = '//button[@id="giftCards"]';
        this.ENABLE_GIFT_CARDS_CHECKBOX =
            '//span[.="enable gift cards:"]/../..//input';
        this.SAVE_BTN_SELECTOR = "//button[.='save']";
        this.LOCATIONS_TAB_SEARCH_FIELD =
            '//*[@id="locations-form"]//label[.="search"]/../input';
        this.LOCATIONS_TAB_SPY_GLASS =
            '//*[@id="locations-form"]//label[.="search"]/../span[@class="spyglass"]';
        this.SEARCH_FIELD =
            '//div[@class="list settingsList"]//input[@placeholder ="search"]';
    }
}

module.exports = new FiscalZoneLoc();
