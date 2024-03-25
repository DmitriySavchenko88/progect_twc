class ShipMemosLoc {
    constructor() {
        this.SHIP_MEMOS_TAB =
            '//button[.="                 ship memos             "]';
        this.SELECT_BTN = '//button[.="select"]';
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.SALES_ORDER_NUM_INPUT =
            '//label[@data-bind="localizedLabel: \'shipOrdersPage.SalesOrderNo\'"]/../input';
        this.TO_SHIP_BTN = '//button[.="to ship"]';
        this.WARNING_OK_BTN = '(//button[.="ok"])[2]';
        this.VIEW_BTN_ON_LOST_VIEW = '//button[.="view"]';
        this.ITEMS_TAB = '//button[@id="items"]';
        this.PICK_UP_BTN = '//button[.="pick up"]';
        this.SHIP_SM_BTN = '//button[.="ship"]';
        this.SHIPPING_METHOD_BTN = '//div[@class="autocompleteArrow"]';
        this.LIST_OF_SHIPPING_METHODS = '//*[@class="ui-corner-all"]';
        this.TRACKING_NUM_INPUT = '//span[.="tracking #:"]/../..//input';
        this.SAVE_SM_BTN = '//button[.="save"]';
        this.SHIP_CONFIRM_ON_LIST_VIEW =
            '//div[@class="right"]//button[.="ship"]';
    }
}

module.exports = new ShipMemosLoc();
