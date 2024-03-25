const Base = require('../../Base');
const purchaseOrderLoc = require('./purchaseOrderLoc');

class PurchaseOrder extends Base {
    goToPurchasingTab() {
        this.clickOnElementXpath(purchaseOrderLoc.PURCHASING_TAB);
    }

    goToPurchaseOrderTab() {
        this.clickOnElementXpath(purchaseOrderLoc.PURCHASE_ORDER_TAB);
    }

    clickNewPurchaseOrderBtn() {
        this.waitSec();
        this.clickOnElementXpath(purchaseOrderLoc.CREATE_NEW_PO_BTN).should(
            'be.visible',
        );
    }

    fillVendorField(vendorName) {
        this.typeTextAndChooseFromDropdownXpath(
            purchaseOrderLoc.VENDOR_FIELD,
            vendorName,
            purchaseOrderLoc.OPENED_DROPDOWM,
        );
    }

    fillDistributionTypeField(contains) {
        this.getElemByXpath(purchaseOrderLoc.DISTRIBUTION_TYPE).click();
        return this.getElemByXpath(
            '//div[@id = "applicationHost"]//div[contains(@class, "v-select-list")]',
        )
            .contains(contains)
            .click({ force: true });
    }

    fillShipToLocationFieldFromDropdown(shipToLocation) {
        this.typeTextAndChooseFromDropdownXpath(
            purchaseOrderLoc.SHIP_TO_LOCATION_FIELD,
            shipToLocation,
            purchaseOrderLoc.OPENED_DROPDOWN_ITEM,
        );
    }

    goToItemsTab() {
        this.clickOnElementXpath(purchaseOrderLoc.PURCHASE_ORDER_ITEMS_TAB);
    }

    addItemsByOptions(itemIdentifier, item, qty) {
        this.clickAndChooseFromDropdownXpath(
            purchaseOrderLoc.ITEM_TYPE_DROPDOWN,
            itemIdentifier,
            purchaseOrderLoc.LIST_OF_ITEMS_IDENTIFIRE,
        );
        this.typeTextXpath(purchaseOrderLoc.ITEMS_QTY, qty);
        cy.wait(350);
        this.typeTextXpath(purchaseOrderLoc.SEARCH_ITEM_INPUT, item);
        this.clickOnElementXpath(purchaseOrderLoc.SPY_GLASS);
    }

    holdPurchaseOrder() {
        this.clickOnElementXpath(purchaseOrderLoc.HOLD_BTN);
    }

    releasePurchaseOrder() {
        this.clickOnElementXpath(purchaseOrderLoc.RELEASE_BTN);
    }

    getPurchaseOrderUniversalNumber() {
        return this.getTextToVariable(
            purchaseOrderLoc.PURCHASE_ORDER_UNIVERSAL_NUMBER,
        );
    }

    searchPurchaseOrderByUniversalNumber(universalNumber) {
        this.typeTextXpath(
            purchaseOrderLoc.UNIVERSAL_ORDER_SEARCH_FIELD,
            universalNumber,
        );
        this.clickOnElementXpath(purchaseOrderLoc.MAGNIFIER_ICON);
        this.waitSec();
    }

    checkPurchaseOrderByUniversalNumber(universalNumber, status) {
        this.searchPurchaseOrderByUniversalNumber(universalNumber);
        this.checkTextEqualContains(universalNumber);
        this.checkTextEqualXpath(purchaseOrderLoc.STATUS_COLUMN_VALUE, status);
    }

    fillOrderDateIfEmpty() {
        this.fillDateFieldIfEmpty(
            purchaseOrderLoc.ORDER_DATE_FIELD,
            purchaseOrderLoc.ORDER_DATE_PICKER_BTN,
            purchaseOrderLoc.TODAY_DATE,
        );
    }

    fillShipDateIfEmpty() {
        this.fillDateFieldIfEmpty(
            purchaseOrderLoc.SHIP_DATE_FIELD,
            purchaseOrderLoc.SHIP_DATE_PICKER_BTN,
            purchaseOrderLoc.TODAY_DATE,
        );
    }

    fillArrivalDateIfEmpty() {
        this.fillDateFieldIfEmpty(
            purchaseOrderLoc.ARRIVAL_DATE_FIELD,
            purchaseOrderLoc.ARRIVAL_DATE_PICKER_BTN,
            purchaseOrderLoc.TODAY_DATE,
        );
    }

    fillCancelDateIfEmpty() {
        this.fillDateFieldIfEmpty(
            purchaseOrderLoc.CANCEL_DATE_FIELD,
            purchaseOrderLoc.CANCEL_DATE_PICKER_BTN,
            purchaseOrderLoc.TODAY_DATE,
        );
    }

    fillfiscalZoneField(fiscalZone) {
        this.longWait3c();
        this.typeTextAndChooseFromDropdownXpath(
            purchaseOrderLoc.FISCAL_ZONE_FIELD,
            fiscalZone,
            purchaseOrderLoc.OPENED_DROPDOWM,
        );
    }

    confirmZeroCost() {
        this.clickOnElementXpath(purchaseOrderLoc.ZERO_COST_YES_BTN);
    }

    fillShipToLocationFieldFromDialog(shipToLocation) {
        this.clickOnElementXpath(purchaseOrderLoc.EDIT_SHIP_TO_LOCATION_BTN);
        this.getElemByXpath(purchaseOrderLoc.PURCHASE_LOCATION_TABLE)
            .contains('tr', shipToLocation)
            .then((tableRow) => {
                cy.wrap(tableRow).find('.checkField').check();
            });
        this.clickOnElementXpath(
            purchaseOrderLoc.PURCHASE_LOCATION_TABLE_SELECT_BTN,
        );
    }

    fillQtyForMultiLocation(shipToLocation, addedItemPlu, qty) {
        this.getElemByXpath(purchaseOrderLoc.ITEMS_GRID)
            .contains('tr', addedItemPlu)
            .then((tableRow) => {
                cy.wait(2000);
                this.clickOnElementXpath(
                    purchaseOrderLoc.ITEMS_GRID_EXPAND_BTN,
                );
            });
        this.getElemByXpath(purchaseOrderLoc.ITEMS_GRID)
            .contains('tr', shipToLocation)
            .then((tableRow) => {
                cy.wrap(tableRow)
                    .find(
                        '[aria-describedby = "purchaseOrderItemsGrid_Ordered"]',
                    )
                    .click()
                    .type(qty);
            });
        this.getElemByXpath(purchaseOrderLoc.ITEMS_GRID)
            .contains('tr', addedItemPlu)
            .then((tableRow) => {
                this.clickOnElementXpath(
                    purchaseOrderLoc.ITEMS_GRID_EXPAND_BTN,
                );
            });
    }

    fillAllocationLocation(allocationLocation1, allocationLocation2) {
        this.clickOnElementXpath(
            purchaseOrderLoc.EDIT_ALLOCATION_LOCATIONS_BTN,
        );
        this.clickOnElementXpath(
            purchaseOrderLoc.PURCHASE_LOCATION_TABLE_UNSELECT_ALL,
        );
        this.typeTextXpath(
            purchaseOrderLoc.PURCHASE_LOCATION_TABLE_SEARCH_FIELD,
            allocationLocation1,
        );
        this.clickOnElementXpath(
            purchaseOrderLoc.PURCHASE_LOCATION_TABLE_SEARCH_ICON,
        );
        this.getElemByXpath(purchaseOrderLoc.PURCHASE_LOCATION_TABLE)
            .contains('tr', allocationLocation1)
            .then((tableRow) => {
                cy.wrap(tableRow).find('.checkField').check();
            });
        this.clickOnElementXpath(
            purchaseOrderLoc.PURCHASE_LOCATION_TABLE_CLEAR_ICON,
        );
        this.typeTextXpath(
            purchaseOrderLoc.PURCHASE_LOCATION_TABLE_SEARCH_FIELD,
            allocationLocation2,
        );
        this.clickOnElementXpath(
            purchaseOrderLoc.PURCHASE_LOCATION_TABLE_SEARCH_ICON,
        );
        this.getElemByXpath(purchaseOrderLoc.PURCHASE_LOCATION_TABLE)
            .contains('tr', allocationLocation2)
            .then((tableRow) => {
                cy.wrap(tableRow).find('.checkField').check();
            });
        this.clickOnElementXpath(
            purchaseOrderLoc.PURCHASE_LOCATION_TABLE_SELECT_BTN,
        );
    }

    cancelPurchaseOrder() {
        this.clickOnElementXpath(purchaseOrderLoc.CANCEL_BTN);
        this.clickOnElementXpath(purchaseOrderLoc.CONFIRM_CALCEL_BTN);
        this.waitSec();
    }
}

module.exports = new PurchaseOrder();
