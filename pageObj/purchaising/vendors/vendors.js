const Base = require('../../Base');
const purchasingLoc = require('./vendorsLoc');

class Vendors extends Base {
    goToPurchasingTab() {
        this.waitSec();
        this.clickOnElementXpath(purchasingLoc.purchasingTab);
    }

    createNewVendor(vendorName) {
        this.waitSec();
        this.clickOnElementXpath(purchasingLoc.createNewVendorBtn);
        this.typeTextXpath(purchasingLoc.vendorNameInput, vendorName);
    }

    clickSave() {
        this.clickOnElementXpath(purchasingLoc.SAVE_VENDOR_BTN).should('exist');
        this.waitSec();
    }

    clickCancelBtn() {
        this.clickOnElementXpath(purchasingLoc.CANCEL_VENDOR_BTN).should(
            'exist',
        );
        this.clickOnElementXpath(purchasingLoc.OK_POPUP_BTN);
    }

    searchVendorByName(vendorName) {
        this.typeTextXpath(purchasingLoc.searchField, vendorName);
        this.waitSec();
        this.clickOnElementXpath(purchasingLoc.magnifyIcon);
    }

    checkVendorByNameExistVisible(vendorName) {
        this.searchVendorByName(vendorName);
        this.waitSec();
        this.checkTextEqualContains(vendorName);
    }

    checkNoVendor(vendorName, num) {
        this.typeTextXpath(purchasingLoc.searchField, vendorName);
        this.waitSec();
        this.checkTextEqualXpath(purchasingLoc.NUMBER_OF_VENDORS_FOUND, num);
    }
}

module.exports = new Vendors();
