class PromoGroupsLoc {
    constructor() {
        this.INVENTORY_TAB = '//*[@id="menuTop"]//button[.="inventory"]';
        this.PROMO_GROUPS_TAB = "//*[contains(text(),'promo groups')]";
        this.NEW_PROMO_GROUP_BTN = "//li//*[contains(text(),'new')]";
        this.PROMO_TYPE_FIELD = "//button[contains(@class,'selectBoxBtn')]";
        this.OK_BTN_POPUP = "//button[contains(@data-bind,'ok')]";
        this.CANCEL_BTN_POPUP = "//button[contains(@data-bind,'cancel')]";
        this.GROUP_NAME_INPUT_FIELD =
            "//input[contains(@data-bind,'value: entity.Name')]";
        this.EDIT_BUTTON = "//a[contains(text(),'edit')]";
        this.SELLECT_ALL_BUTTON = "//button[.='select all']";
        this.SELECT_BUTTON = "//button[.='select']";
        this.LIST_WITH_PRODUCT_IDENTIFIER =
            "//div[@class='comboSearch pullLeft']//div[@class='autocompleteArrow']";
        this.PRODUCT_IDENTIFIER = '/html/body/div[4]/ul/li[3]';
        this.SEARCH_TO_ADD_INPUT = "//input[@class='markFind']";
        this.CLOSE_BUTTON = "//*[contains(text(),'close')]";
        this.PROMO_NAME_SEARCH_FIELD = "//input[contains(@data-bind,'Name')]";
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.REMOVE_BUTTON = "//button[contains(text(),'remove')]";
        this.CONFIRM_REMOVING_BUTTON = "//*[contains(text(),'yes')]";
    }
}

module.exports = new PromoGroupsLoc();
