class DiscountReasonLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.SALES_SECTION = '//span[.="sales"]';
        this.DISCOUNT_REASONS_TAB = '//span[.="discount reasons"]';
        this.NEW_BTN = '//button[.="new"]';
        this.CODE_FIELD = '//span[.="code:"]/../..//input';
        this.DEFAULT_DISCOUNT_FIELD =
            '//span[.="default discount %:"]/../..//input';
        this.USE_DISCOUNT_AS_FIELD =
            '//span[.="use discount as:"]/../..//button';
        this.USE_DISCOUNT_AS_DROPDOWN =
            '//div[contains(@class, "selectBoxListWrapper")][contains(@style, "display: block")]//ul//li';
        this.SAVE_BTN = '//div[@id="editDiscountReason"]//button[.="save"]';
        this.SEARCH_FIELD =
            '//div[@class="list settingsList discountReaseonsList"]//input[@placeholder ="search"]';
        this.GRID_FIRST_CELL =
            '(//table[@id="settingGrid_DiscountReason"]//tr[@id="1"]//td)[1]';
    }
}

module.exports = new DiscountReasonLoc();
