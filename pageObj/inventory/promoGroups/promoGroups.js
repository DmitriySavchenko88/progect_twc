const Base = require('../../Base');
const promoGroupsLoc = require('./promoGroupsLoc');

class PromoGroups extends Base {
    goToInventoryTab() {
        this.clickOnElementXpath(promoGroupsLoc.INVENTORY_TAB);
    }

    goToPromoGroupsTab() {
        this.getElemByXpath(promoGroupsLoc.PROMO_GROUPS_TAB).click();
    }

    clickOnNewPromoGroupBtn() {
        this.waitSec();
        this.getElemByXpath(promoGroupsLoc.NEW_PROMO_GROUP_BTN).click();
    }

    choosePromoGroupType(promoType) {
        this.clickOnDropdownChooseContains(
            promoGroupsLoc.PROMO_TYPE_FIELD,
            promoType,
        );
    }

    clickOnOkButton() {
        this.getElemByXpath(promoGroupsLoc.OK_BTN_POPUP).click();
    }

    clickOnCancelButton() {
        this.getElemByXpath(promoGroupsLoc.CANCEL_BTN_POPUP).click();
    }

    typeGroupName(groupName) {
        this.getElemByXpath(promoGroupsLoc.GROUP_NAME_INPUT_FIELD).type(
            groupName,
        );
    }
    selectDcssCode() {
        this.getElemByXpath(promoGroupsLoc.EDIT_BUTTON).click({ force: true });
        this.getElemByXpath(promoGroupsLoc.SELLECT_ALL_BUTTON).click();
        this.getElemByXpath(promoGroupsLoc.SELECT_BUTTON).click();
    }

    addItemToPromo(productIdentifier) {
        this.waitSec();
        this.getElemByXpath(promoGroupsLoc.LIST_WITH_PRODUCT_IDENTIFIER).click({
            force: true,
        });
        this.getElemByXpath(promoGroupsLoc.PRODUCT_IDENTIFIER).click({
            force: true,
        });
        this.getElemByXpath(promoGroupsLoc.SEARCH_TO_ADD_INPUT).type(
            `${productIdentifier}{enter}`,
        );
        this.waitSec();
    }

    clickOnCloseBtn() {
        this.getElemByXpath(promoGroupsLoc.CLOSE_BUTTON).click();
    }

    checkPromoByGroupName(groupName) {
        this.searchGroupByName(groupName);
        this.checkTextEqualContains(groupName);
    }
    searchGroupByName(groupName) {
        this.typeTextXpath(promoGroupsLoc.PROMO_NAME_SEARCH_FIELD, groupName);
        this.waitSec();
        this.clickOnElementXpath(promoGroupsLoc.MAGNIFY_ICON_FILTERS);
    }

    removeNewPromoGroup(groupName) {
        this.searchGroupByName(groupName);
        this.waitSec();
        this.getElemByXpath(promoGroupsLoc.REMOVE_BUTTON).click({
            force: true,
        });
        this.getElemByXpath(promoGroupsLoc.CONFIRM_REMOVING_BUTTON).click();
        this.checkTextNotEqualContains(groupName);
    }
}

module.exports = new PromoGroups();
