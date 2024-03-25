class PurchasingLoc {
    constructor() {
        this.PURCHASING_TAB = '//*[@datahover="purchasing"]';
        this.PURCHASE_ORDER_TAB =
            '//button[.="                 purchase orders             "]';
        this.CREATE_NEW_PO_BTN = '//button[.="new"]';
        this.VENDOR_FIELD =
            '//*[@id="general-form"]//span[.="vendor:"]/parent::div[@class = "name"]/..//input';
        this.DISTRIBUTION_TYPE =
            '//*[@id="general-form"]//span[.="distribution type:"]/../following-sibling::div';
        this.SHIP_TO_LOCATION_FIELD =
            '//*[@id="general-form"]//span[.="ship-to location:"]/../..//input';
        this.ORDER_DATE_FIELD =
            '//*[@id="general-form"]//span[.="order date:"]/../..//input';
        this.SHIP_DATE_FIELD =
            '//*[@id="general-form"]//span[.="ship date:"]/../..//input';
        this.ARRIVAL_DATE_FIELD =
            '//*[@id="general-form"]//span[.="arrival date:"]/../..//input';
        this.CANCEL_DATE_FIELD =
            '//*[@id="general-form"]//span[.="cancel date:"]/../..//input';
        this.ORDER_DATE_PICKER_BTN =
            '//span[.="order date:"]/../..//span[@class="ui-datepicker-trigger"]';
        this.SHIP_DATE_PICKER_BTN =
            '//span[.="ship date:"]/../..//span[@class="ui-datepicker-trigger"]';
        this.ARRIVAL_DATE_PICKER_BTN =
            '//span[.="arrival date:"]/../..//span[@class="ui-datepicker-trigger"]';
        this.CANCEL_DATE_PICKER_BTN =
            '//span[.="cancel date:"]/../..//span[@class="ui-datepicker-trigger"]';
        this.TODAY_DATE =
            '//*[@id="applicationHost"]//div[contains(@class, "v-date-picker-table")]//button[contains(@class, "v-btn--outlined")]';
        this.PURCHASE_ORDER_ITEMS_TAB = '//button[@id = "items"]';
        this.ITEMS_GRID = '//table[@id="purchaseOrderItemsGrid"]';
        this.HOLD_BTN = '//button[contains(text(),"hold")]';
        this.PURCHASE_ORDER_UNIVERSAL_NUMBER =
            '//*[.="universal order #:"]/..//div[@class = "value"]';
        this.UNIVERSAL_ORDER_SEARCH_FIELD =
            '//input[@placeholder="universal order #"]';
        this.MAGNIFIER_ICON = '//li[@class="find"]/span[@class="spy"]';
        this.STATUS_COLUMN_VALUE =
            '//*[@aria-describedby = "POGridModel_IsHeld"]';
        this.RELEASE_BTN = '//button[text()="release"]';
        this.FISCAL_ZONE_FIELD =
            '//*[@id="general-form"]//span[.="fiscal zone:"]/../..//input';
        this.OPENED_DROPDOWM =
            '//*[@id="applicationHost"]//*[contains(@class, "menuable__content__active")]//div[@role="listbox"]';
        this.OPENED_DROPDOWN_ITEM =
            '//*[@id="applicationHost"]//*[contains(@class, "menuable__content__active")]//div[@role="listbox"]//div';
        this.ZERO_COST_YES_BTN = '//button//span[text()="yes"]';
        this.EDIT_SHIP_TO_LOCATION_BTN =
            '//*[@id="general-form"]//span[.="ship-to locations:"]/../..//a[. = "edit"]';
        this.PURCHASE_LOCATION_TABLE = '//table[@id="PurchaseLocationFilter"]';
        this.PURCHASE_LOCATION_TABLE_SELECT_BTN = '//button[.="select"]';
        this.PURCHASE_LOCATION_TABLE_SEARCH_FIELD =
            '//span[.="select locations"]/../../..//input[@placeholder="search"]';
        this.PURCHASE_LOCATION_TABLE_SEARCH_ICON =
            '//span[.="select locations"]/../../..//span[@class="spyglass"]';
        this.PURCHASE_LOCATION_TABLE_CLEAR_ICON =
            '//span[.="select locations"]/../../..//span[@class="empty"]';
        this.ITEMS_GRID = '//table[@id="purchaseOrderItemsGrid"]';
        this.ITEMS_GRID_EXPAND_BTN =
            '//table[@id="purchaseOrderItemsGrid"]//tr[@id = "1"]//span[contains(@class, "collapseArrow ")]';
        this.EDIT_ALLOCATION_LOCATIONS_BTN =
            '//*[@id="general-form"]//span[.="allocation locations:"]/../..//a[. = "edit"]';
        this.PURCHASE_LOCATION_TABLE_UNSELECT_ALL =
            '//span[.="select locations"]/../../..//button[.="unselect all"]';
        this.CANCEL_BTN =
            '//div[@id="POEdit"]//div[contains(@class, "popupInner")]/div[contains(@class, "footer")]//button[. = "cancel"]';
        this.SEARCH_RESULTS_QTY = "//*[@class='find']/sub";
        this.CONFIRM_CALCEL_BTN = '//span[.="ok"]/..';
        this.ITEM_TYPE_DROPDOWN =
            '//*[@class="searchSelectbox"]/div[.="product code"]';
        this.LIST_OF_ITEMS_IDENTIFIRE =
            '//*[contains(@id,"product-code") or (contains(@id, "plu")) or (contains(@id, "all"))]';
        this.ITEMS_QTY = '//span[.="qty to add:"]/../..//input';
        this.SEARCH_ITEM_INPUT = '//input[@placeholder="search to add"]';
        this.SPY_GLASS =
            '(//*[@class="input_wrapper"]/span[@class="spyglass"])[2]';
    }
}

module.exports = new PurchasingLoc();
