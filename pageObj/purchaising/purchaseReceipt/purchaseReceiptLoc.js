class PurchaseReceiptLoc {
    constructor() {
        this.PURCHASE_RECEIPT_SUB_TAB =
            "//*[@id='menuLeft']//*[contains(text(),'purchase receipts')]";
        this.CREATE_NEW_PR_BTN = "//button[.='new']";
        this.VENDOR_SEARCH_FIELD =
            "//div[@class = 'VendorAutocomplete']//input";
        this.LIST_WITH_VENDORS =
            "//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all']//a";
        this.LOCATION_SEARCH_FIELD =
            "//div[@class='LocationAutocomplete']//input";
        this.LIST_WITH_LOCATIONS = '//a[@class="ui-corner-all"]';
        this.ITEMS_SUB_TAB = "//button[@id='items']";
        this.ITEMS_SEARCH_FIELD = "//input[@class='markFind']";
        this.UNIT_COST_PRICE_FIELD =
            "//span[@data-bind='cellSpan:$root._data()[0].Cost']";
        this.ACTIVE_COST_PRICE_FIELD = "//input[@name='Cost']";
        this.HOLD_PR_BTN = "//button[contains(text(),'hold')]";
        this.PURCHASE_RECEIPT_ID = "//span[@data-bind ='text: MemoNum']";
        this.SEARCH_FIELD_RECEIPT_ID = "//input[@placeholder='receipt #']";
        this.MAGNIFIER_BTN = "//li[@class = 'find']";
        this.FINALIZE_BUTTON = "//button[contains(text(), 'finalize')]";
        this.SELECT_PO_BUTTON = "//button[contains(text(), 'select PO')]";
        this.SELECT_BUTTON =
            "//div[@class='footer']//button[contains(text(), 'select')]";
        this.YES_BUTTON = "//span[.='yes']";
        this.NO_BUTTON = "//span[.='no']";
        this.DISCARD_BUTTON = "//div[@class='right']//button[.='discard']";
        this.DISCARD_IN_POPUP_BUTTON =
            "//div[@class='ui-dialog-buttonset']//span[.='discard']";
        this.ARROW_BUTTON = "//div[@class='comboSearch']//button";
        this.LIST_WITH_TYPE_OF_ITEM_IDENTIFIERS = '//ul/li/xmp/..';
    }
}

module.exports = new PurchaseReceiptLoc();
