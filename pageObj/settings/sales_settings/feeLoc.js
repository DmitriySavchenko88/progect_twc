class FeeLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.SALES_SECTION = '//span[.="sales"]';
        this.SALES_FEES_TAB = '(//span[.="fees"])[1]';
        this.NEW_BTN = '//button[.="new"]';
        this.CODE_FIELD = '//span[.="code:"]/../..//input';
        this.DEFAULT_AMOUNT_FIELD =
            '//div[@id="editSalesFeesPopup"]//span[.="default $:"]/../..//input';
        this.LINE_FEE_CHECKBOX =
            '//div[@id="editSalesFeesPopup"]//span[.="line fee:"]/../..//input';
        this.GLOBAL_FEE_CHECKBOX =
            '//div[@id="editSalesFeesPopup"]//span[.="global fee:"]/../..//input';
        this.SAVE_BTN = '//div[@id="editSalesFeesPopup"]//button[.="save"]';
        this.SEARCH_FIELD =
            '//div[@class="list settingsList"]//input[@placeholder ="search"]';
    }
}

module.exports = new FeeLoc();
