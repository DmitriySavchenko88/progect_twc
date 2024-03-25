class LocationLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.LOCATION_SETTINGS_SECTION = '//span[.="location settings"]';
        this.LOCATION_SETTINGS_TAB =
            '//span[.="locations / location settings"]';
        this.NEW_BTN = '//button[.="new"]';
        this.CREATE_BRAND_NEW_RADIOBUTTON =
            '//span[.="create brand new location"]/../input';
        this.OK_BUTTON = '//div[@class = "footer"]//button[.="ok"]';
        this.CODE_FIELD = '//span[.="code:"]/../..//input';
        this.REGIONAL_PRICE_LEVEL_FIELD =
            '//span[.="regional price level:"]/../..//input';
        this.LOCATION_PRICE_LEVEL_FIELD =
            '//span[.="location price level:"]/../..//input';
        this.TAX_AREA_FIELD = '//span[.="tax area:"]/../..//input';
        this.OPEN_CHECKBOX =
            '//div[@id="LocationEdit"]//span[.="open:"]/../..//input';
        this.AVAILABLE_FOR_SDD_CHECKBOX =
            '//div[@id="LocationEdit"]//span[.="available for same day delivery:"]/../..//input';
        this.BASE_CURRENCY_FIELD = '//span[.="base currency:"]/../..//input';
        this.COUNTRY_FIELD = '(//span[.="country:"]/../..//input)[1]';
        this.POSTAL_CODE_FIELD = '(//span[.="postal code:"]/../..//input)[1]';
        this.ADDRESS1_FIELD = '(//span[.="address 1:"]/../..//input)[1]';
        this.DROPDOWN =
            '//ul[contains(@class, "ui-autocomplete")][contains(@style, "display: block")]';
        this.SALES_TAB = '//button[@id="sales"]';
        this.LOCATION_FOR_NEW_ORDERS_CHECKBOX =
            '//span[.="location for new order creation in CHQ:"]/../..//input';
        this.CREATE_LOCATION_BTN = '//span[.="create location"]';
        this.SEARCH_FIELD =
            '//div[@class="list settingsList locationList"]//input[@placeholder ="search"]';
    }
}

module.exports = new LocationLoc();
