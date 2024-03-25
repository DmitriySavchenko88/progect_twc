const Base = require('../../Base');
const adjustmentMemosLoc = require('./adjustmentMemosLoc');

class AdjustmentMemos extends Base {
    goToInventoryTab() {
        this.clickOnElementXpath(adjustmentMemosLoc.INVENTORY_TAB);
    }

    goToAdjustmentMemosTab() {
        this.waitSec();
        this.clickOnElementXpath(adjustmentMemosLoc.ADJUSTMENT_MEMOS_TAB);
    }

    clickOnNewAdjustmentMemoBtn() {
        this.waitSec();
        this.clickOnElementXpath(adjustmentMemosLoc.CREATE_NEW_TO_BTN);
    }

    chooseLocation(location) {
        this.waitSec();
        this.typeTextXpath(adjustmentMemosLoc.LOCAT_INPUT_POPUP, location);
        this.clickOnElementXpath(
            adjustmentMemosLoc.LOCATION_FROM_DROPDOWN,
        ).click({ force: true });
        this.getElemByXpath(adjustmentMemosLoc.OK_BTN_POPUP).click();
    }

    clickOnHoldBtn() {
        this.clickOnElementXpath(adjustmentMemosLoc.HOLD_TO_BTN);
    }

    clickOnFinalizeBtn() {
        this.clickOnElementXpath(adjustmentMemosLoc.FINALIZE_BTN).wait(700);
    }

    clickOnContinueWithZeroCostBtn() {
        this.clickOnElementXpath(
            adjustmentMemosLoc.CONTINUE_WITH_ZERO_COST_BTN,
        );
    }

    clickYesFinalize() {
        this.clickOnElementXpath(adjustmentMemosLoc.YES_FINALIZE_BTN);
    }

    clickOnDiscardBtn() {
        this.clickOnElementXpath(adjustmentMemosLoc.DISCARD_BTN);
        this.waitSec();
        this.clickOnElementXpath(adjustmentMemosLoc.DISCARD_FROM_POPUP);
    }

    getUniversalAdjMemoNum() {
        return this.getTextToVariable(
            adjustmentMemosLoc.UNIVERSAL_ADJUSTMENT_NUM,
        );
    }

    searchAdjMemoCheckStatus(adjNum, status) {
        this.typeTextXpath(adjustmentMemosLoc.UNIVERSAL_SEARCH_INPUT, adjNum);
        this.clickOnMagnifierFiltersBtn();
        this.checkAdjMemoExists(adjNum);
        this.checkAdjustmentMemoStatus(status);
    }

    searchForANonExistentMemo(adjNum, expectedText) {
        this.typeTextXpath(adjustmentMemosLoc.UNIVERSAL_SEARCH_INPUT, adjNum);
        this.clickOnMagnifierFiltersBtn();
        this.checkTextEqualXpath(
            adjustmentMemosLoc.NUMBER_OF_MEMOS_FOUND,
            expectedText,
        );
    }

    clickOnMagnifierFiltersBtn() {
        this.clickOnElementXpath(adjustmentMemosLoc.MAGNIFY_ICON_FILTERS);
        this.waitSec();
    }

    checkAdjMemoExists(adjNum) {
        this.checkTextEqualContains(adjNum);
    }

    checkAdjustmentMemoStatus(status) {
        this.checkTextEqualContains(status);
    }

    goToItemsTab() {
        this.clickOnElementXpath(adjustmentMemosLoc.ITEMS_TAB);
    }

    addItemsByOptions(itemIdentifier, item, qty) {
        this.waitSec();
        this.getElemByXpath(adjustmentMemosLoc.ITEM_TYPE_DROPDOWN).click({
            force: true,
        });
        this.getElemByXpath(adjustmentMemosLoc.INDICATOR_PRODUCT_CODE)
            .contains(itemIdentifier)
            .click({ force: true });
        this.typeTextXpath(adjustmentMemosLoc.SEARCH_ITEM_INPUT, item);
        this.clickOnElementXpath(adjustmentMemosLoc.SPY_GLASS);
        this.wait(350);
        this.getElemByXpath(adjustmentMemosLoc.ADJ_QTY).clear();
        this.typeTextXpath(adjustmentMemosLoc.ADJ_QTY, qty);
        this.waitSec();
    }
}

module.exports = new AdjustmentMemos();
