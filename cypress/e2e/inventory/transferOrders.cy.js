import { tr } from '@faker-js/faker';

const transferOrders = require('../../../pageObj/inventory/transferOrders/transferOrders');
import { testDataGeneration as tData } from '../../support/credentials';

const transferOrdersLoc = require('../../../pageObj/inventory/transferOrders/transferOrdersLoc');
const transferMemos = require('../../../pageObj/inventory/transferMemos/transferMemos');

describe('Smoke testing of transfer orders area', () => {
    beforeEach(() => {
        transferOrders.goToInventoryTab();
        transferOrders.goToTransferOrdersTab();
        transferOrders.waitSec();
        transferOrders.createNewTransferOrder();
    });

    it('Check hold new transfer order', () => {
        transferOrders.getUniversalOrderNum().then((universalNum) => {
            transferOrders.holdTransferOrder();
            transferOrders.searchTorderCheckStatus(universalNum.trim(), 'held');
        });
    });

    it('Check release new transfer order', () => {
        transferOrders.chooseSourceLocation(tData.location1);
        transferOrders.waitSec();
        transferOrders.chooseTargetLocation(tData.location2);
        transferOrders.getUniversalOrderNum().then((universalNum) => {
            transferOrders.goToItemsTab();
            transferOrders.addItemsByOptions(
                'all info',
                tData.productDescription,
                '3',
            );
            transferOrders.releaseTransferOrder();
            transferOrders.releaseSufficient();
            transferOrders.searchTorderCheckStatus(
                universalNum.trim(),
                'released',
            );
        });
    });

    it('Check quick transfer of transfer order', () => {
        const sourceLoc = tData.location1;
        const targetLoc = tData.location2;
        const qty = '3';

        transferOrders.chooseSourceLocation(sourceLoc);
        transferOrders.waitSec();
        transferOrders.chooseTargetLocation(targetLoc);
        transferOrders.getUniversalOrderNum().then((universalNum) => {
            transferOrders.goToItemsTab();
            transferOrders.addItemsByOptions(
                'all info',
                tData.productDescription,
                qty,
            );
            transferOrders.getPlu().then((plu) => {
                transferOrders.quickTransfer();
                transferOrders.waitSec();
                transferOrders.listView();
                transferOrdersLoc._createComplexSelector(universalNum.trim());
                const expectedStatus = 'released';
                transferOrders.longWait5c();
                cy.reload();
                transferOrders
                    .waitForStatus(
                        expectedStatus,
                        transferOrdersLoc.STATUS_OF_ORDER,
                    )
                    .then((elapsedTime) => {
                        cy.log(
                            `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                        );
                    });
                transferOrders.goHome();
                transferMemos.goToTransferMemosTab();
                transferMemos.searchTmemoCheckStatus(
                    universalNum.trim(),
                    'posted',
                );
                transferMemos.viewMemo();
                transferMemos.checkSourceAndTargetLocations(
                    sourceLoc,
                    targetLoc,
                );
                transferMemos.goToItemsTab();
                transferMemos.checkItemPluAndQty(plu, qty);
            });
        });
    });

    it('Check hold after discard new transfer order', () => {
        transferOrders.chooseSourceLocation(tData.location1);
        transferOrders.waitSec();
        transferOrders.chooseTargetLocation(tData.location2);
        transferOrders.getUniversalOrderNum().then((universalNum) => {
            transferOrders.goToItemsTab();
            transferOrders.addItemsByOptions(
                'all info',
                tData.productDescription,
                '3',
            );
            transferOrders.holdTransferOrderAfterDiscard();
            transferOrders.searchTorderCheckStatus(universalNum.trim(), 'held');
        });
    });

    it('Check discard new transfer order', () => {
        transferOrders.chooseSourceLocation(tData.location1);
        transferOrders.waitSec();
        transferOrders.chooseTargetLocation(tData.location2);
        transferOrders.getUniversalOrderNum().then((universalNum) => {
            transferOrders.goToItemsTab();
            transferOrders.addItemsByOptions(
                'all info',
                tData.productDescription,
                '3',
            );
            transferOrders.discardTransferOrder();
            transferOrders.checkTransferOrderNotExists(universalNum.trim());
        });
    });
});
