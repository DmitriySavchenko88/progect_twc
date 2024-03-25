class TransferMemosLoc {
    constructor() {
        this.TRANSFER_MEMOS_TAB =
            '//li[.="                 transfer memos             "]/button';
        this.VIEW_BTN = '//button[.="view"]';
        this.UNIVERSAL_SEARCH_INPUT =
            '//input[@placeholder="universal order #"]';
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.ITEMS_TAB = '//button[@id="items"]';
        this.SOURCE_LOC_VALUE =
            '//span[.="source location:"]/../../div[@class="value"]';
        this.TARGET_LOC_VALUE =
            '//span[.="target location:"]/../../div[@class="value"]';
        this.PLU_ITEM_GRID_CELL =
            '//td[@aria-describedby="tm-items-grid-paging_InvenItemInfo.PLU"]/xmp';
        this.QTY_IN_GRID_CELL =
            '//td[@aria-describedby="tm-items-grid-paging_QuantityIn"]/xmp';
    }
}

module.exports = new TransferMemosLoc();
