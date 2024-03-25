const Base = require('../../Base');
const transferMemosLoc = require('./transferMemosLoc');

class TransferMemos extends Base {
    goToTransferMemosTab() {
        this.clickOnElementXpath(transferMemosLoc.TRANSFER_MEMOS_TAB);
        this.longWait3c();
    }

    clickMagnifierFiltersBtn() {
        this.clickOnElementXpath(transferMemosLoc.MAGNIFY_ICON_FILTERS);
        this.waitSec();
    }

    checkTransferMemoExists(universalNum) {
        this.checkTextContains(universalNum);
    }

    checkMemoStatus(status) {
        this.checkTextContains(status);
    }

    searchTmemoCheckStatus(universalNumber, status) {
        this.typeTextXpath(
            transferMemosLoc.UNIVERSAL_SEARCH_INPUT,
            universalNumber,
        );
        this.clickMagnifierFiltersBtn();
        this.checkTransferMemoExists(universalNumber);
        this.checkMemoStatus(status);
    }

    viewMemo() {
        this.clickOnElementXpath(transferMemosLoc.VIEW_BTN);
    }

    checkSourceAndTargetLocations(expectedSourceLoc, expectedTargetLoc) {
        this.checkTextEqualXpath(
            transferMemosLoc.SOURCE_LOC_VALUE,
            expectedSourceLoc,
        );
        this.checkTextEqualXpath(
            transferMemosLoc.TARGET_LOC_VALUE,
            expectedTargetLoc,
        );
    }

    checkItemPluAndQty(expectedSourceLoc, expectedTargetLoc) {
        this.checkTextEqualXpath(
            transferMemosLoc.PLU_ITEM_GRID_CELL,
            expectedSourceLoc,
        );
        this.checkTextEqualXpath(
            transferMemosLoc.QTY_IN_GRID_CELL,
            expectedTargetLoc,
        );
    }

    goToItemsTab() {
        this.clickOnElementXpath(transferMemosLoc.ITEMS_TAB);
    }
}

module.exports = new TransferMemos();
