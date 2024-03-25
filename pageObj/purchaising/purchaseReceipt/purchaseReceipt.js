const Base = require('../../Base');
const purchaseReceiptLoc = require('../purchaseReceipt/purchaseReceiptLoc');

class PurchaseReceipt extends Base {
    goToPurchaseReceiptSubTab() {
        this.waitSec();
        this.clickOnElementXpath(purchaseReceiptLoc.PURCHASE_RECEIPT_SUB_TAB);
    }

    clickOnNewButton() {
        this.waitSec();
        this.clickOnElementXpath(purchaseReceiptLoc.CREATE_NEW_PR_BTN);
    }

    selectVendor(vendor) {
        this.typeTextAndChooseFromDropdownXpath(
            purchaseReceiptLoc.VENDOR_SEARCH_FIELD,
            vendor,
            purchaseReceiptLoc.LIST_WITH_VENDORS,
        );
    }

    selectLocation(location) {
        this.typeTextAndChooseFromDropdownXpath(
            purchaseReceiptLoc.LOCATION_SEARCH_FIELD,
            location,
            purchaseReceiptLoc.LIST_WITH_LOCATIONS,
        );
    }

    goToItemTab() {
        this.clickOnElementXpath(purchaseReceiptLoc.ITEMS_SUB_TAB);
    }

    addItemByOption(itemIdentifier, productDesc, itemPrice) {
        this.getElemByXpath(purchaseReceiptLoc.ARROW_BUTTON).click({
            force: true,
        });
        this.getElemByXpath(
            purchaseReceiptLoc.LIST_WITH_TYPE_OF_ITEM_IDENTIFIERS,
        )
            .contains(itemIdentifier)
            .click({ force: true });
        this.waitSec();
        this.typeTextXpath(
            purchaseReceiptLoc.ITEMS_SEARCH_FIELD,
            productDesc,
        ).type('{enter}');
        this.getElemByXpath(purchaseReceiptLoc.UNIT_COST_PRICE_FIELD).click();
        this.getElemByXpath(purchaseReceiptLoc.ACTIVE_COST_PRICE_FIELD)
            .type(itemPrice)
            .type('{enter}');
    }

    selectPurchaseOrder() {
        this.clickOnElementXpath(purchaseReceiptLoc.SELECT_PO_BUTTON);
        this.clickOnElementXpath(purchaseReceiptLoc.SELECT_BUTTON);
        this.clickOnElementXpath(purchaseReceiptLoc.NO_BUTTON);
    }

    clickOnHoldBtn() {
        this.clickOnElementXpath(purchaseReceiptLoc.HOLD_PR_BTN);
    }

    clickOnFinalizeBtn() {
        this.clickOnElementXpath(purchaseReceiptLoc.FINALIZE_BUTTON);
    }

    clickOnDiscardBtn() {
        this.clickOnElementXpath(purchaseReceiptLoc.DISCARD_BUTTON);
        this.waitSec();
        this.clickOnElementXpath(purchaseReceiptLoc.DISCARD_IN_POPUP_BUTTON);
    }

    getPurchaseRecId() {
        return this.getTextToVariable(purchaseReceiptLoc.PURCHASE_RECEIPT_ID);
    }

    checkPurchaseReceiptById(purchaseReceiptId) {
        this.searchPurchaseReceiptById(purchaseReceiptId);
        this.checkTextEqualContains(purchaseReceiptId);
    }

    checkPurchaseReceiptIsNotCreated(purchaseReceiptId) {
        this.searchPurchaseReceiptById(purchaseReceiptId);
        this.wait(600);
        this.checkTextEqualXpath("//li[@class = 'find']/..//sub", '0');
        // this.checkTextNotEqualContains(purchaseReceiptId);
    }

    searchPurchaseReceiptById(purchaseReceiptId) {
        this.typeTextXpath(
            purchaseReceiptLoc.SEARCH_FIELD_RECEIPT_ID,
            purchaseReceiptId,
        );
        this.waitSec();
        this.clickOnElementXpath(purchaseReceiptLoc.MAGNIFIER_BTN);
    }
}

module.exports = new PurchaseReceipt();
