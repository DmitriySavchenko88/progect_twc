class CatalogLoc {
    constructor() {
        this.INVENTORY_TAB = '//*[@id="menuTop"]//button[.="inventory"]';
        this.CREATE_NEW_PRODUCT_BTN = "//button[.='new']";
        this.SINGLE_ITEM_RADIO_BTN = "//input[@value='SingleItem']/..";
        this.STYLE_ITEM_RADIO_BTN = "//input[@value='Style']/..";
        this.SERVICE_ITEM_RADIO_BTN = "//input[@value='ServiceItem']/..";
        this.OK_BTN = "//div[@class='footer']//button[.='ok']";
        this.TAX_CATEGORY_INPUT =
            "(//span[contains(text(), 'tax category')])[1]/../../div[2]/div/input";
        this.FULL_DEPT_NAME = "//span[.='full dept name:']/../../..//input";
        this.LIST_WITH_DROPDOWN_TO_CHOOSE =
            "//*[@class='highlighted ui-menu-item']/../li/a";
        this.PRODUCT_DESCRIPTION_INPUT =
            "//*[.='Store descr (old):']/..//input | //*[.='product description:']/..//input";
        this.SEARCH_FIELD = "//*[.='search']/../input";
        this.PRODUCT_CODE_INPUT_SEARCH =
            "//*[@class='scrollContainer rightScrollShift']/div[1]//input";
        this.MAGNIFY_ICON =
            "//*[@data-bind='click: showSearchResultClicked.bind($data, true), visible: isSearchResultsSetted()']";
        this.MAGNIFY_ICON_FILTERS = "//li[@class='find']/span[@class='spy']";
        this.V_ATTR1_INPUT = "//span[.='v attribute 1:']/../..//input";
        this.V_ATTR2_INPUT = "//span[.='v attribute 2:']/../..//input";
        this.ITEMS_TAB = "//*[@id='itemsTab']";
        this.ADD_BTN = "//div[@id='itemsTab-form']//button[.='add']";
        this.SELECT_ALL_BTN = "//button[.='select all']";
        this.SAVE_BTN2 = "(//button[.='save'])[2]";
        this.PRODUCT_CODE_VALUE =
            "//*[@data-bind='value: invenStyle.StyleNo ']";
        this.VENDORS_TAB =
            "//*[@id='scrollContainer']/button[@id='vendorsTab']";
        this.ADD_VENDOR_BTN = "//*[@id='vendorsTab-form']//button[.='add']";
        this.VENDORS_INPUT = "//*[@id='VendorsGrid']//tr[2]//input";
        this.PRICING_TAB =
            "//*[@id='scrollContainer']/button[@id='pricingTab']";
        this.SELL_PRICE_GRID_CELL =
            "//*[@aria-describedby='invenItemPricingGrid_priceValue0']";
        this.BASE_PRICE_GRID_CELL =
            "//*[@data-bind='cellSpan:_data()[0].priceValue1']";
        this.SELL_PRICE_ALL_STYLE = "//*[contains(text(), 'Sell Price')]/div";
        this.BASE_PRICE_ALL_STYLE = "//*[contains(text(), 'Base Price')]/div";
        this.INPUT_PRICE_ALL_STYLE =
            "//span[contains(text(), 'price:')]/../../div[@class='value']//input";
        this.APPLY_BTN = "//button[.='apply']";
        this.SERVICE_ITEM_CLASSIFICATION_BTN = "//span[.='normal']/..//button";
        this.WALLET_TYPE_BTN = "//span[.='wallet type:']/../..//button";
        this.INVENTORY_EDIT_POPUP = "//*[@id='invenStyleEditPopup']";
        this.SEARCH_RESULTS_QTY = "//*[@class='find']/sub";
        this.PLU_VALUE = '//*[.="PLU:"]/..//div[@class = "value"]';
        this.INVENTORY_TAB = '//*[@datahover="inventory"]';
        this.CATALOG_TAB =
            '//button[.="                 catalog             "]';
        this.DROP_SHIP_FROM_VENDOR_VALUE =
            '//span[.="drop ship from vendor:"]/../..//button';
        this.DROP_SHIP_FROM_VENDOR_DROPDOWN =
            '//div[contains(@class, "selectBoxListWrapper")][contains(@style, "display: block")]//ul//li';
        this.SAVE_BTN_SELECTOR = "//button[.='save']";
        this.CANCEL_BTN = "//button[.='cancel']";
        this.OK_POPUP_BTN = "//button/span[.='ok']";
    }
}

module.exports = new CatalogLoc();
