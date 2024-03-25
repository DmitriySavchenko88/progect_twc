class TransferOrdersLoc {
    constructor() {
        this.INVENTORY_TAB = '//*[@id="menuTop"]//button[.="inventory"]';
        this.TRANSFER_ORDERS_TAB =
            '//li[.="                 transfer orders             "]/button';
        this.CREATE_NEW_TO_BTN = '//button[.="new"]';
        this.HOLD_TO_BTN = '//button[contains(text(),"hold")]';
        this.HOLD_TO_POPUP_BTN = '//span[.="hold"]/..';
        this.DISCARD_TO_BTN = '//div[@class="right"]/button[.="discard"]';
        this.DISCARD_TO_POPUP_BTN =
            '//div[@class="ui-dialog-buttonset"]//span[.="discard"]/..';
        this.SEARCH_RESULTS_QTY = "//*[@class='find']/sub";
        this.UNIVERSAL_ORDER_NUM =
            '//span[.="universal order #:"]/../../div[@class="value"]/span';
        this.UNIVERSAL_SEARCH_INPUT =
            '//*[@id="app-content"]//input[@placeholder="universal order #"]';
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.SOURCE_LOC_INPUT =
            '//div[@class="editor source_location"]//div/input';
        this.TARGET_LOC_INPUT =
            '//div[@class="editor target_location"]//div/input';
        this.ITEMS_TAB = '//button[@id="itemsTab"]';
        this.SEARCH_ITEM_INPUT = '//input[@placeholder="search to add"]';
        this.ITEM_TYPE_DROPDOWN =
            '//*[@class="searchSelectbox"]/div[.="product code"]';
        this.LIST_OF_ITEMS_IDENTIFIRE =
            '//*[contains(@id,"product-code") or (contains(@id, "plu")) or (contains(@id, "all"))]';
        this.SPY_GLASS =
            '(//*[@class="input_wrapper"]/span[@class="spyglass"])[1]';
        this.ITEMS_QTY = '//span[.="qty to add:"]/../..//input';
        this.RELEASE_BTN =
            '(//button[.="release" and not(.="release & archive")])[1]';
        this.RELEASE_SUFFICIENT =
            '//*[@class="ui-dialog-buttonset"]/button[.="release"]';
        this.QUICK_TRANSFER_BTN = '//button[.="quick transfer"]';
        this.OK_BTN = '(//*[@class="ui-dialog-buttonset"]/button)[1]';
        this.LIST_VIEW = '//*[@class="list"]';
        this.PROGRESS_CELL = null;
        this.STATUS_OF_ORDER = null;
        this.SOURCE_LOC_CELL = null;
        this.TARGET_LOC_CELL = null;
        this.PLU_GRID_CELL =
            '//td[@aria-describedby="TO-grid-paging_InvenItemInfo.PLU"]//xmp';
        this.CHQ_HOME = '//button[.="CLOUDS_WORK"]';
    }

    _createComplexSelector(universalNum) {
        this.PROGRESS_CELL = `//*[@aria-describedby="TransferOrderListGridModel_DeviceTransactionNumber"]//xmp[.="${universalNum}"]/../../*[@aria-describedby="TransferOrderListGridModel_ScheduledTasks"]`;
        this.STATUS_OF_ORDER = `//td[@aria-describedby="TransferOrderListGridModel_DeviceTransactionNumber"]//xmp[.="${universalNum}"]/../../td[@aria-describedby="TransferOrderListGridModel_Status"]/xmp`;
        this.SOURCE_LOC_CELL = `//*[@aria-describedby="TransferOrderListGridModel_DeviceTransactionNumber"]//xmp[.="${universalNum}"]/../../*[@aria-describedby="TransferOrderListGridModel_LocationId"]/xmp`;
        this.TARGET_LOC_CELL = `//*[@aria-describedby="TransferOrderListGridModel_DeviceTransactionNumber"]//xmp[.="${universalNum}"]/../../*[@aria-describedby="TransferOrderListGridModel_DefaultLocationId"]/xmp`;
    }
}

module.exports = new TransferOrdersLoc();
