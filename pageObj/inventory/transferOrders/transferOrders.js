const Base = require('../../Base');
const transferOrdersLoc = require('./transferOrdersLoc');

class TransferOrders extends Base {
    goToInventoryTab() {
        this.clickOnElementXpath(transferOrdersLoc.INVENTORY_TAB);
    }

    goToTransferOrdersTab() {
        this.clickOnElementXpath(transferOrdersLoc.TRANSFER_ORDERS_TAB);
    }

    createNewTransferOrder() {
        this.waitSec();
        this.clickOnElementXpath(transferOrdersLoc.CREATE_NEW_TO_BTN);
    }

    holdTransferOrder() {
        this.clickOnElementXpath(transferOrdersLoc.HOLD_TO_BTN);
    }

    holdTransferOrderAfterDiscard() {
        this.clickOnElementXpath(transferOrdersLoc.DISCARD_TO_BTN);
        this.clickOnElementXpath(transferOrdersLoc.HOLD_TO_POPUP_BTN);
    }

    discardTransferOrder() {
        this.clickOnElementXpath(transferOrdersLoc.DISCARD_TO_BTN);
        this.clickOnElementXpath(transferOrdersLoc.DISCARD_TO_POPUP_BTN);
    }

    getUniversalOrderNum() {
        return this.getTextToVariable(transferOrdersLoc.UNIVERSAL_ORDER_NUM);
    }

    checkTransferOrderNotExists(universalNumber) {
        this.typeTextXpath(
            transferOrdersLoc.UNIVERSAL_SEARCH_INPUT,
            universalNumber,
        );
        this.clickMagnifierFiltersBtn();
        this.checkTextEqualXpath(transferOrdersLoc.SEARCH_RESULTS_QTY, '0');
    }

    searchTorderCheckStatus(universalNumber, status) {
        this.typeTextXpath(
            transferOrdersLoc.UNIVERSAL_SEARCH_INPUT,
            universalNumber,
        );
        this.clickMagnifierFiltersBtn();
        this.checkTransferOrderExists(universalNumber);
        this.checkOrderStatus(status);
    }

    clickMagnifierFiltersBtn() {
        this.clickOnElementXpath(transferOrdersLoc.MAGNIFY_ICON_FILTERS);
        this.waitSec();
    }

    checkTransferOrderExists(universalNum) {
        this.checkTextEqualContains(universalNum);
    }

    checkOrderStatus(status) {
        this.checkTextEqualContains(status);
    }

    chooseSourceLocation(location) {
        this.typeTextAndChooseFromDropdownXpath(
            transferOrdersLoc.SOURCE_LOC_INPUT,
            location,
            '//*[@class="v-list-item__content"]//span',
        );
    }

    chooseTargetLocation(location) {
        this.typeTextAndChooseFromDropdownXpath(
            transferOrdersLoc.TARGET_LOC_INPUT,
            location,
            '//*[@class="v-list-item__content"]//span',
        );
    }

    goToItemsTab() {
        this.clickOnElementXpath(transferOrdersLoc.ITEMS_TAB);
        this.waitSec();
    }

    addItemsByOptions(itemIdentifier, item, qty) {
        this.clickAndChooseFromDropdownXpath(
            transferOrdersLoc.ITEM_TYPE_DROPDOWN,
            itemIdentifier,
            transferOrdersLoc.LIST_OF_ITEMS_IDENTIFIRE,
        );
        this.typeTextXpath(transferOrdersLoc.ITEMS_QTY, qty);
        this.typeTextXpath(transferOrdersLoc.SEARCH_ITEM_INPUT, item);
        this.clickOnElementXpath(transferOrdersLoc.SPY_GLASS);
    }

    getPlu() {
        return this.getTextToVariable(transferOrdersLoc.PLU_GRID_CELL);
    }

    releaseTransferOrder() {
        this.clickOnElementXpath(transferOrdersLoc.RELEASE_BTN);
    }

    releaseSufficient() {
        this.clickOnElementXpath(transferOrdersLoc.RELEASE_SUFFICIENT);
    }

    quickTransfer() {
        this.clickOnElementXpath(transferOrdersLoc.QUICK_TRANSFER_BTN);
        this.clickOnElementXpath(transferOrdersLoc.OK_BTN);
    }

    listView() {
        this.clickOnElementXpath(transferOrdersLoc.LIST_VIEW);
    }

    goHome() {
        this.clickOnElementXpath(transferOrdersLoc.CHQ_HOME);
        this.waitSec();
    }
}

module.exports = new TransferOrders();
