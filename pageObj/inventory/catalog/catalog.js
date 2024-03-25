const Base = require('../../Base');
const catalogLoc = require('./catalogLoc');
const taxCategoryLoc = require('../../settings/company_settings/taxCategoryLoc');

class Catalog extends Base {
    goToInventoryTab() {
        this.clickOnElementXpath(catalogLoc.INVENTORY_TAB);
    }
    clickNewItemBtn() {
        this.clickOnElementXpath(catalogLoc.CREATE_NEW_PRODUCT_BTN).should(
            'be.visible',
        );
    }

    chooseProductType(type) {
        switch (type) {
            case 'single item':
                this.clickOnSingleType();
                break;
            case 'style/model':
                this.clickOnStyleType();
                break;
            case 'service item':
                this.clickOnServiceType();
                break;
            default:
        }
        this.clickOnElementXpath(catalogLoc.OK_BTN);
    }

    clickOnSingleType() {
        this.clickOnElementXpath(catalogLoc.SINGLE_ITEM_RADIO_BTN);
    }

    clickOnStyleType() {
        this.clickOnElementXpath(catalogLoc.STYLE_ITEM_RADIO_BTN);
    }

    clickOnServiceType() {
        this.clickOnElementXpath(catalogLoc.SERVICE_ITEM_RADIO_BTN);
    }

    typeAndChooseFullDeptName(deptName) {
        this.typeTextAndChooseFromDropdownXpath(
            catalogLoc.FULL_DEPT_NAME,
            deptName,
            catalogLoc.LIST_WITH_DROPDOWN_TO_CHOOSE,
        );
    }

    chooseTaxCategory(category) {
        this.typeTextAndChooseFromDropdownXpath(
            catalogLoc.TAX_CATEGORY_INPUT,
            category,
            catalogLoc.LIST_WITH_DROPDOWN_TO_CHOOSE,
        );
    }

    goToVendorsTab() {
        this.clickOnElementXpath(catalogLoc.VENDORS_TAB);
    }

    goToPricingTab() {
        this.clickOnElementXpath(catalogLoc.PRICING_TAB);
    }

    addAndTypePrimaryVendor(vendorName) {
        this.clickOnElementXpath(catalogLoc.ADD_VENDOR_BTN);
        this.typeTextAndChooseFromDropdownXpath(
            catalogLoc.VENDORS_INPUT,
            vendorName,
            catalogLoc.LIST_WITH_DROPDOWN_TO_CHOOSE,
        );
    }

    setBasePrice(number) {
        this.typeTextXpath(catalogLoc.BASE_PRICE_GRID_CELL, number);
    }

    setSellPrice(number) {
        this.typeTextXpath(catalogLoc.SELL_PRICE_GRID_CELL, number);
    }

    setBasePriceForAllStyle(price) {
        this.clickOnElementXpath(catalogLoc.BASE_PRICE_ALL_STYLE);
        this.typeTextXpath(catalogLoc.INPUT_PRICE_ALL_STYLE, price);
        this.clickOnElementXpath(catalogLoc.APPLY_BTN);
    }

    setSellPriceForAllStyle(price) {
        this.clickOnElementXpath(catalogLoc.SELL_PRICE_ALL_STYLE);
        this.typeTextXpath(catalogLoc.INPUT_PRICE_ALL_STYLE, price);
        this.clickOnElementXpath(catalogLoc.APPLY_BTN);
    }

    typeProductDescription(productName) {
        this.typeTextXpath(catalogLoc.PRODUCT_DESCRIPTION_INPUT, productName);
        this.waitSec();
    }

    getProductCode() {
        return this.getValueToVariable(catalogLoc.PRODUCT_CODE_VALUE);
    }

    searchItemByDescription(productDescription) {
        this.typeTextXpath(catalogLoc.SEARCH_FIELD, productDescription);
        this.clickOnElementXpath(catalogLoc.MAGNIFY_ICON);
        this.waitSec();
    }

    searchItemByProductCode(productCode) {
        this.typeTextXpath(catalogLoc.PRODUCT_CODE_INPUT_SEARCH, productCode);
        this.clickOnElementXpath(catalogLoc.MAGNIFY_ICON_FILTERS);
        this.waitSec();
    }

    checkItemByDescrExistVisible(productDescription) {
        this.searchItemByDescription(productDescription);
        this.checkTextEqualContains(productDescription);
    }

    checkItemByProductCode(productCode) {
        this.searchItemByProductCode(productCode);
        this.checkTextEqualContains(productCode);
    }

    typeAndChooseAttributes(vAttr1, vAttr2) {
        this.typeTextAndChooseFromDropdownXpath(
            catalogLoc.V_ATTR1_INPUT,
            vAttr1,
            catalogLoc.LIST_WITH_DROPDOWN_TO_CHOOSE,
        );
        this.typeTextAndChooseFromDropdownXpath(
            catalogLoc.V_ATTR2_INPUT,
            vAttr2,
            catalogLoc.LIST_WITH_DROPDOWN_TO_CHOOSE,
        );
    }

    goToItemsTab() {
        this.clickOnElementXpath(catalogLoc.ITEMS_TAB);
    }

    addAllItems() {
        this.clickOnElementXpath(catalogLoc.ADD_BTN);
        this.clickOnElementXpath(catalogLoc.SELECT_ALL_BTN);
        this.clickOnElementXpath(catalogLoc.SAVE_BTN2);
    }

    chooseServiceItemClassification(classification) {
        this.clickOnDropdownChooseContains(
            catalogLoc.SERVICE_ITEM_CLASSIFICATION_BTN,
            classification,
        );
    }

    chooseWalletType(walletType) {
        this.clickOnDropdownChooseContains(
            catalogLoc.WALLET_TYPE_BTN,
            walletType,
        );
    }

    elementNotExist(xpath) {
        this.getElemByXpath(xpath).should('not.exist');
    }

    getPlu() {
        return this.getValueToVariable(catalogLoc.PLU_VALUE);
    }

    goToCatalog() {
        this.clickOnElementXpath(catalogLoc.INVENTORY_TAB);
        this.clickOnElementXpath(catalogLoc.CATALOG_TAB);
    }

    fillDropShipFromVendorField(value) {
        this.clickOnElementXpath(catalogLoc.DROP_SHIP_FROM_VENDOR_VALUE).wait(
            500,
        );
        cy.xpath(catalogLoc.DROP_SHIP_FROM_VENDOR_DROPDOWN).each(
            ($el, index, $list) => {
                if ($el.text() === value) {
                    $list.eq(index).click();
                    return false;
                } else {
                    cy.log('Element not found in the list');
                }
            },
        );
    }
    clickSave() {
        this.clickOnElementXpath(catalogLoc.SAVE_BTN_SELECTOR);
    }
    clickCancelBtn() {
        this.clickOnElementXpath(catalogLoc.CANCEL_BTN).should('exist');
        this.clickOnElementXpath(catalogLoc.OK_POPUP_BTN);
    }
}

module.exports = new Catalog();
