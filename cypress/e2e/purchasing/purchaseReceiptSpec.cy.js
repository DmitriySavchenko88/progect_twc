import { randomNumber } from '../../support/randomData';

const purchaseReceipt = require('../../../pageObj/purchaising/purchaseReceipt/purchaseReceipt');
const purchasing = require('../../../pageObj/purchaising/vendors/vendors');
import { testDataGeneration as tData } from '../../support/credentials';

describe('Smoke testing of purchase receipts area', () => {
    describe('Checking the creation of a purchase receipt', () => {
        beforeEach(() => {
            purchasing.goToPurchasingTab();
            purchaseReceipt.goToPurchaseReceiptSubTab();
            purchaseReceipt.clickOnNewButton();
            purchaseReceipt.selectVendor(tData.vendor);
            purchaseReceipt.selectLocation(tData.location1);
        });
        it('Checking the creation of a purchase receipt with status hold', () => {
            purchaseReceipt.goToItemTab();
            purchaseReceipt.addItemByOption(
                'all info',
                tData.productDescription,
                randomNumber,
            );
            purchaseReceipt.getPurchaseRecId().then((val) => {
                purchaseReceipt.clickOnHoldBtn();
                purchaseReceipt.CURRENT_VALUES.purchaseReceiptId = val;
                purchaseReceipt.checkPurchaseReceiptById(val);
            });
        });

        it('Checking the finalization of a purchase receipt', () => {
            purchaseReceipt.goToItemTab();
            purchaseReceipt.addItemByOption(
                'all info',
                tData.productDescription,
                randomNumber,
            );
            purchaseReceipt.getPurchaseRecId().then((text) => {
                purchaseReceipt.clickOnFinalizeBtn();
                purchaseReceipt.CURRENT_VALUES.purchaseReceiptId = text;
                purchaseReceipt.checkPurchaseReceiptById(text);
            });
        });
        it('Checking the creation of a purchase receipt linked to PO', () => {
            purchaseReceipt.selectPurchaseOrder();
            purchaseReceipt.goToItemTab();
            purchaseReceipt.addItemByOption(
                'all info',
                tData.productDescription,
                randomNumber,
            );
            purchaseReceipt.getPurchaseRecId().then((text) => {
                purchaseReceipt.clickOnFinalizeBtn();
                purchaseReceipt.CURRENT_VALUES.purchaseReceiptId = text;
                purchaseReceipt.checkPurchaseReceiptById(text);
            });
        });
        it('Checking the discarding of a new purchase receipt', () => {
            purchaseReceipt.goToItemTab();
            purchaseReceipt.addItemByOption(
                'all info',
                tData.productDescription,
                randomNumber,
            );
            purchaseReceipt.getPurchaseRecId().then((val) => {
                purchaseReceipt.clickOnDiscardBtn();
                purchaseReceipt.CURRENT_VALUES.purchaseReceiptId = val;
                purchaseReceipt.checkPurchaseReceiptIsNotCreated(val);
            });
        });
    });
});
