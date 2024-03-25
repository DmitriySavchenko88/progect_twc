class Attribute {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.INVENTORY_CATALOG_SECTION = '//span[.="inventory / catalog"]';
        this.ATTRIBUTES_TAB = '//span[.="attributes"]';
        this.NEW_ATTRIBUTE_BTN = '//button[.="new"]';
        this.CODE_FIELD = '//span[.="code:"]/../..//input';
        this.VALUES_TAB = '//button[@name="valuesTab"]';
        this.NEW_VALUE_BTN = '//div[@id="AttributteEdit"]//button[.="new"]';
        this.VALUE_FIELD = '//span[.="value:"]/../..//input';
        this.SAVE_VALUE_BTN =
            '//div[@id="attributeValueEditPopup"]//button[.="save"]';
        this.POSITION_FIELD = '//span[.="position:"]/../..//i';
        this.DROPDOWN = '//*[@id="applicationHost"]//*[@role="listbox"]';
        this.SAVE_BTN_SELECTOR = "//button[.='save']";
        this.SEARCH_FIELD =
            '//div[@class="list settingsList"]//input[@placeholder ="search"]';
    }
}

module.exports = new Attribute();
