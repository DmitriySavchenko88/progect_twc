const Base = require('../../Base');
const shipMemosLoc = require('./shipMemosLoc');

class ShipMemos extends Base {
    goToShipMemosTab() {
        this.tryIfElementExist(
            '.ui-dialog-title',
            () => {
                this.clickOnElementXpath(shipMemosLoc.SHIP_MEMOS_TAB);
            },
            () => {
                this.getElemByXpath(shipMemosLoc.WARNING_OK_BTN).click({
                    force: true,
                });
                this.clickOnElementXpath(shipMemosLoc.SHIP_MEMOS_TAB);
            },
        );
        this.wait(650);
    }

    chooseLocation(location) {
        this.longWait3c();
        this.tryIfElementExist(
            'button.transit.withSubText',
            () => {
                cy.contains(location).click();
                this.clickOnElementXpath(shipMemosLoc.SELECT_BTN);
            },
            () => {
                cy.log('Location selected for SM');
            },
        );
    }

    searchSmBySoNumCheckStatus(orderNumber, smNum, status) {
        this.typeTextXpath(shipMemosLoc.SALES_ORDER_NUM_INPUT, orderNumber);
        this.clickMagnifierFiltersBtn();
        this.checkSmExists(smNum);
        this.checkSmStatus(status);
    }

    clickMagnifierFiltersBtn() {
        this.clickOnElementXpath(shipMemosLoc.MAGNIFY_ICON_FILTERS);
        this.waitSec();
    }

    checkSmExists(smNum) {
        this.checkTextEqualContains(smNum);
    }

    checkSmStatus(status) {
        cy.contains(status)
            .should('exist')
            .invoke('text')
            .then((actualTxt) => {
                expect(actualTxt).to.eq(status);
            });
    }

    viewSm() {
        this.clickOnElementXpath(shipMemosLoc.VIEW_BTN_ON_LOST_VIEW).wait(359);
    }

    goToItemsTabShipMemoDialog() {
        this.clickOnXpathElemMultiplyTimes('2', shipMemosLoc.ITEMS_TAB);
    }
    pickUpSm() {
        this.clickOnElementXpath(shipMemosLoc.PICK_UP_BTN);
    }
    shipSm() {
        this.clickOnElementXpath(shipMemosLoc.SHIP_SM_BTN);
    }
    setShippingMethodAndTrackingNum(method, num) {
        this.clickAndChooseFromDropdownXpath(
            shipMemosLoc.SHIPPING_METHOD_BTN,
            method,
            shipMemosLoc.LIST_OF_SHIPPING_METHODS,
        );
        this.typeTextXpath(shipMemosLoc.TRACKING_NUM_INPUT, num);
    }
    saveSm() {
        this.clickOnElementXpath(shipMemosLoc.SAVE_SM_BTN);
    }
    shipConfirm() {
        this.clickOnElementXpath(shipMemosLoc.SHIP_CONFIRM_ON_LIST_VIEW).wait(
            550,
        );
    }
}

module.exports = new ShipMemos();
