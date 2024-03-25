class PaymentMethodLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.SALES_SECTION = '//span[.="sales"]';
        this.PAYMENT_METHODS_TAB = '//span[.="payment methods"]';
        this.NEW_BTN = '//button[.="new"]';
        this.PAYMENT_TYPE_FIELD = '//span[.="payment type:"]/../..//input';
        this.DROPDOWN =
            '//ul[contains(@class, "ui-autocomplete")][contains(@style, "display: block")]';
        this.OK_BTN = '//div[@id="newPaymentMethodPopup"]//button[.="ok"]';
        this.CODE_FIELD = '//span[.="code:"]/../..//input';
        this.SAVE_BTN = '//div[@id="editPaymentMethodPopup"]//button[.="save"]';
        this.SEARCH_FIELD =
            '//div[@class="list settingsList"]//input[@placeholder ="search"]';
    }
}

module.exports = new PaymentMethodLoc();
