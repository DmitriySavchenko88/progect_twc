class AdjustmentMemosLoc {
    constructor() {
        this.INVENTORY_TAB = '//*[@id="menuTop"]//button[.="inventory"]';
        this.ADJUSTMENT_MEMOS_TAB =
            '//li[.="                 adjustment memos             "]/button';
        this.LOCAT_INPUT_POPUP = '//div[@class="value autocomplete"]//input';
        this.LOCATION_FROM_DROPDOWN = "//a[@tabindex = '-1']";
        this.OK_BTN_POPUP = "//div[@id='AdjustmentNew']//button[.='ok']";
        this.UNIVERSAL_SEARCH_INPUT = '//label[.="universal #"]';
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.ITEMS_TAB = '//button[@id="items"]';
        this.CREATE_NEW_TO_BTN = '//button[.="new"]';
        this.HOLD_TO_BTN = '//button[contains(text(),"hold")]';
        this.UNIVERSAL_ADJUSTMENT_NUM =
            '//span[.="universal #:"]/../../div[@class="value"]/span';
        this.UNIVERSAL_SEARCH_INPUT = '//label[.="universal #"]/../input';
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.SEARCH_ITEM_INPUT = '//input[@class="markFind"]';
        this.ITEM_TYPE_DROPDOWN =
            '(//*[@id="items-form"]//button[@class="selectBoxBtn"])[1]';
        this.SPY_GLASS =
            '(//label[.="search to add"]/..//span[@class="spyglass"])[1]';
        this.ADJ_QTY = '//input[@name="Qty"]';
        this.OK_BTN =
            '//div[@class="footer"]/div[@class="right"]/button[.="ok"]';
        this.INDICATOR_PRODUCT_CODE =
            '//div[contains(@class, "selectBoxListWrapper selectBoxOptionsContainer selecboxOptions") and contains(@style, "width")]//li';
        this.FINALIZE_BTN = '//button[.="finalize"]';
        this.CONTINUE_WITH_ZERO_COST_BTN = '//button[.="continue"]';
        this.YES_FINALIZE_BTN =
            '//div[@class="ui-dialog-buttonset"]/button[.="yes"]';
        this.DISCARD_BTN = '//div[@class="right"]//button[.="discard"]';
        this.DISCARD_FROM_POPUP =
            '//div[@class="ui-dialog-buttonset"]//span[.="discard"]';
        this.NUMBER_OF_MEMOS_FOUND =
            '//*[@id="adjustmentsDetailedSearchContainer"]/div[2]/div[2]/ul/li[2]/sub';
    }
}

module.exports = new AdjustmentMemosLoc();
