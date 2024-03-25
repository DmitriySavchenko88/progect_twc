import { randomNumber, randomWord } from '../../support/randomData';
import { testDataGeneration as tData } from '../../support/credentials';

const catalog = require('../../../pageObj/inventory/catalog/catalog');
const catalogLoc = require('../../../pageObj/inventory/catalog/catalogLoc');
const walletType = ['physical gift card', 'credit memo', 'virtual gift card'];

describe('Smoke testing of catalog area', () => {
    beforeEach(() => {
        catalog.goToInventoryTab();
        catalog.clickNewItemBtn();
    });

    it('Check creating single item', () => {
        catalog.chooseProductType('single item');
        catalog.typeAndChooseFullDeptName(tData.fullDeptCode);
        catalog.chooseTaxCategory(tData.taxCategory);
        catalog.typeProductDescription(randomWord);
        catalog.getProductCode().then((val) => {
            catalog.goToPricingTab();
            catalog.setSellPrice(randomNumber);
            catalog.setBasePrice(randomNumber);
            catalog.goToVendorsTab();
            catalog.addAndTypePrimaryVendor(tData.vendor);
            catalog.clickSave();
            catalog.checkItemByProductCode(val);
        });
    });

    it('Check creating style item', () => {
        catalog.chooseProductType('style/model');
        catalog.typeAndChooseFullDeptName(tData.fullDeptCode);
        catalog.chooseTaxCategory(tData.taxCategory);
        catalog.typeProductDescription(randomWord);
        catalog.typeAndChooseAttributes(tData.attribute1, tData.attribute2);
        catalog.getProductCode().then((val) => {
            catalog.waitSec();
            catalog.goToItemsTab();
            catalog.addAllItems();
            catalog.waitSec();
            catalog.goToPricingTab();
            catalog.setSellPriceForAllStyle(randomNumber);
            catalog.setBasePriceForAllStyle(randomNumber);
            catalog.goToVendorsTab();
            catalog.addAndTypePrimaryVendor(tData.vendor);
            catalog.clickSave();
            catalog.checkItemByProductCode(val);
        });
    });

    describe('Check creating service item with different parameters', () => {
        beforeEach(() => {
            catalog.chooseProductType('service item');
            catalog.typeAndChooseFullDeptName(tData.fullDeptCode);
            catalog.chooseTaxCategory(tData.taxCategory);
            catalog.typeProductDescription(randomWord);
        });
        afterEach(() => {
            catalog.getProductCode().then((val) => {
                catalog.waitSec();
                catalog.goToPricingTab();
                catalog.setSellPrice(randomNumber);
                catalog.setBasePrice(randomNumber);
                catalog.goToVendorsTab();
                catalog.addAndTypePrimaryVendor(tData.vendor);
                catalog.clickSave();
                catalog.checkItemByProductCode(val);
            });
        });

        it('Check creating service item with item classification = normal', () => {
            catalog.chooseServiceItemClassification('normal');
        });

        walletType.forEach((walletType) => {
            it(`Check creating service item with item classification = wallet, wallet type = ${walletType}`, () => {
                catalog.chooseServiceItemClassification('wallet');
                catalog.chooseWalletType(walletType);
            });
        });
    });

    it('Check cancel new item creation', () => {
        catalog.chooseProductType('service item');
        catalog.typeAndChooseFullDeptName(tData.fullDeptCode);
        catalog.chooseTaxCategory(tData.taxCategory);
        catalog.typeProductDescription(randomWord);
        catalog.chooseServiceItemClassification('wallet');
        catalog.chooseWalletType('credit memo');
        catalog.getProductCode().then((val) => {
            catalog.waitSec();
            catalog.goToPricingTab();
            catalog.setSellPrice(randomNumber);
            catalog.setBasePrice(randomNumber);
            catalog.goToVendorsTab();
            catalog.addAndTypePrimaryVendor(tData.vendor);
            catalog.clickCancelBtn();
            catalog.elementNotExist(catalogLoc.INVENTORY_EDIT_POPUP);
            catalog.searchItemByProductCode(val);
            catalog.checkTextEqualXpath(catalogLoc.SEARCH_RESULTS_QTY, '0');
        });
    });
});
