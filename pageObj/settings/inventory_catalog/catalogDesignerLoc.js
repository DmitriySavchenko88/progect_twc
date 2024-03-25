class CatalogDesignerLoc {
    constructor() {
        this.INVENTORY_CATALOG_AREA =
            "//span[contains(text(),'inventory / catalog')]";
        this.CATALOG_DESIGNER = "//a[contains(text(),'catalog designer')]";
        this.GENERAL_SERVICE_ITEM =
            "//*[contains(text(),'general service item')]";
        this.GENERAL_SINGLE_ITEM =
            "//*[contains(text(),'general single item')]";
        this.DESIGN_BUTTON = "//button[contains(text(),'design')]";
        this.INPUT_SEARCH_DESIGNER =
            "//input[contains (@data-bind, 'executeOnEnter: search.onSearchClick')]";
        this.SAVE_BUTTON = "//button[contains(text(),'save')]";
        //_____________CSS________________//////////
        this.SERVICE_ITEM_CLASSIFICATION_FIELD =
            "span:contains('service item classification')";
        this.WALLET_TYPE_FIELD = "span:contains('wallet type')";
        this.DROP_SHIP_FROM_VENDOR_FIELD =
            "span:contains('drop ship from vendor')";
        this.PRODUCT_DESCRIPTION_FIELD = "span:contains('product description')";
    }
}

module.exports = new CatalogDesignerLoc();
