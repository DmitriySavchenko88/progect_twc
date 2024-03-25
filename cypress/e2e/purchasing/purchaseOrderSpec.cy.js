const purchaseOrder = require('../../../pageObj/purchaising/purchaseOrder/purchaseOrder');
import { testDataGeneration as tData } from '../../support/credentials';

const purchaseOrderLoc = require('../../../pageObj/purchaising/purchaseOrder/purchaseOrderLoc');

describe('Smoke testing of purchase orders area', () => {
    beforeEach('The next steps will be done before each test execution', () => {
        purchaseOrder.goToPurchasingTab();
        purchaseOrder.goToPurchaseOrderTab();
        purchaseOrder.clickNewPurchaseOrderBtn();
        purchaseOrder.fillVendorField(tData.vendor);
    });

    it('Hold new PO', () => {
        purchaseOrder.fillDistributionTypeField('single location');
        purchaseOrder.fillShipToLocationFieldFromDropdown(tData.location1);
        purchaseOrder.fillOrderDateIfEmpty();
        purchaseOrder.fillShipDateIfEmpty();
        purchaseOrder.fillArrivalDateIfEmpty();
        purchaseOrder.fillCancelDateIfEmpty();
        purchaseOrder.getPurchaseOrderUniversalNumber().then((val) => {
            purchaseOrder.goToItemsTab();
            purchaseOrder.addItemsByOptions(
                'all info',
                tData.productDescription,
                '1',
            );
            purchaseOrder.holdPurchaseOrder();
            purchaseOrder.checkPurchaseOrderByUniversalNumber(
                val.trim(),
                'held',
            );
        });
    });

    it('Release new PO with distribution type = "Single location"', () => {
        purchaseOrder.fillDistributionTypeField('single location');
        purchaseOrder.fillShipToLocationFieldFromDropdown(tData.location1);
        purchaseOrder.fillOrderDateIfEmpty();
        purchaseOrder.fillShipDateIfEmpty();
        purchaseOrder.fillArrivalDateIfEmpty();
        purchaseOrder.fillCancelDateIfEmpty();
        purchaseOrder.getPurchaseOrderUniversalNumber().then((val) => {
            purchaseOrder.goToItemsTab();
            purchaseOrder.addItemsByOptions(
                'all info',
                tData.productDescription,
                '1',
            );
            purchaseOrder.releasePurchaseOrder();
            purchaseOrder.confirmZeroCost();
            purchaseOrder.checkPurchaseOrderByUniversalNumber(
                val.trim(),
                'released',
            );
        });
    });

    it('Release new PO with distribution type = "Allocation"', () => {
        purchaseOrder.fillDistributionTypeField('allocation');
        purchaseOrder.fillShipToLocationFieldFromDropdown(tData.location1);
        purchaseOrder.fillAllocationLocation(tData.location1, tData.location2); //this method should be reworked to accept only one location after bug fixing
        purchaseOrder.fillOrderDateIfEmpty();
        purchaseOrder.fillShipDateIfEmpty();
        purchaseOrder.fillArrivalDateIfEmpty();
        purchaseOrder.fillCancelDateIfEmpty();
        purchaseOrder.getPurchaseOrderUniversalNumber().then((val) => {
            purchaseOrder.goToItemsTab();
            purchaseOrder.addItemsByOptions(
                'all info',
                tData.productDescription,
                '1',
            );
            purchaseOrder.fillQtyForMultiLocation(
                tData.location1,
                tData.productDescription,
                '10',
            );
            purchaseOrder.fillQtyForMultiLocation(
                tData.location2,
                tData.productDescription,
                '5',
            );
            purchaseOrder.releasePurchaseOrder();
            purchaseOrder.confirmZeroCost();
            purchaseOrder.checkPurchaseOrderByUniversalNumber(
                val.trim(),
                'released',
            );
        });
    });

    it('Release new PO with distribution type = "Multi locacation"', () => {
        purchaseOrder.fillDistributionTypeField('multi location');
        purchaseOrder.fillfiscalZoneField(tData.fiscalZone);
        purchaseOrder.fillShipToLocationFieldFromDialog(tData.location1);
        purchaseOrder.fillShipToLocationFieldFromDialog(tData.location2);
        purchaseOrder.fillOrderDateIfEmpty();
        purchaseOrder.fillShipDateIfEmpty();
        purchaseOrder.fillArrivalDateIfEmpty();
        purchaseOrder.fillCancelDateIfEmpty();
        purchaseOrder.getPurchaseOrderUniversalNumber().then((val) => {
            purchaseOrder.goToItemsTab();
            purchaseOrder.addItemsByOptions(
                'all info',
                tData.productDescription,
                '1',
            );
            purchaseOrder.fillQtyForMultiLocation(
                tData.location1,
                tData.productDescription,
                '10',
            );
            purchaseOrder.fillQtyForMultiLocation(
                tData.location2,
                tData.productDescription,
                '5',
            );
            purchaseOrder.releasePurchaseOrder();
            purchaseOrder.confirmZeroCost();
            purchaseOrder.checkPurchaseOrderByUniversalNumber(
                val.trim(),
                'released',
            );
        });
    });

    it('Cancel new PO creation', () => {
        purchaseOrder.fillDistributionTypeField('single location');
        purchaseOrder.fillShipToLocationFieldFromDropdown(tData.location1);
        purchaseOrder.fillOrderDateIfEmpty();
        purchaseOrder.fillShipDateIfEmpty();
        purchaseOrder.fillArrivalDateIfEmpty();
        purchaseOrder.fillCancelDateIfEmpty();
        purchaseOrder.getPurchaseOrderUniversalNumber().then((val) => {
            purchaseOrder.goToItemsTab();
            purchaseOrder.addItemsByOptions(
                'all info',
                tData.productDescription,
                '1',
            );
            purchaseOrder.cancelPurchaseOrder();
            purchaseOrder.searchPurchaseOrderByUniversalNumber(val.trim());
            purchaseOrder.checkTextEqualXpath(
                purchaseOrderLoc.SEARCH_RESULTS_QTY,
                '0',
            );
        });
    });
});
