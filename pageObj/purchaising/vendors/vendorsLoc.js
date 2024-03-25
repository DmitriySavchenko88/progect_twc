class VendorsLoc {
    constructor() {
        this.purchasingTab = "//*[@datahover='purchasing']";
        this.createNewVendorBtn = "//button[.='new']";
        this.vendorNameInput = "//span[.='vendor name:']/../..//input";
        this.searchField =
            '//div[@id="vendorDetailedSearchContainer"]//label[.="vendor name"]/../input';
        this.magnifyIcon =
            '//*[@id="vendorDetailedSearchContainer"]//span[contains(@class, "spy ")]/..';
        this.CANCEL_VENDOR_BTN = "//button[.='cancel']";
        this.SAVE_VENDOR_BTN = "//button[.='save']";
        this.OK_POPUP_BTN = "//button/span[.='ok']";
        this.NUMBER_OF_VENDORS_FOUND =
            '//*[@id="vendorDetailedSearchContainer"]//sub';
    }
}

module.exports = new VendorsLoc();
