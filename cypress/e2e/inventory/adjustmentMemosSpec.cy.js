const adjustmentMemos = require('../../../pageObj/inventory/adjustmentMemos/adjustmentMemos');
import { testDataGeneration as tData } from '../../support/credentials';

describe('Smoke testing of adjustment memos', () => {
    describe('Check adjustment memos area', () => {
        beforeEach(() => {
            adjustmentMemos.goToInventoryTab();
            adjustmentMemos.goToAdjustmentMemosTab();
            adjustmentMemos.clickOnNewAdjustmentMemoBtn();
            adjustmentMemos.chooseLocation(tData.location1);
        });
        it('Check holding of the new Adjustment memo', () => {
            adjustmentMemos.getUniversalAdjMemoNum().then((adjNum) => {
                adjustmentMemos.goToItemsTab();
                adjustmentMemos.addItemsByOptions(
                    'all',
                    tData.productDescription,
                    '3',
                ); //?
                adjustmentMemos.clickOnHoldBtn();
                adjustmentMemos.searchAdjMemoCheckStatus(adjNum.trim(), 'held');
            });
        });
        it('Check finalizing of the new Adjustment memo', () => {
            adjustmentMemos.getUniversalAdjMemoNum().then((adjNum) => {
                adjustmentMemos.goToItemsTab();
                adjustmentMemos.addItemsByOptions(
                    'all',
                    tData.productDescription,
                    '3',
                );
                adjustmentMemos.clickOnFinalizeBtn();
                adjustmentMemos.clickYesFinalize(); //?
                // adjustmentMemos.clickOnContinueWithZeroCostBtn()//?
                adjustmentMemos.searchAdjMemoCheckStatus(
                    adjNum.trim(),
                    'posted',
                );
            });
        });
        it('Check discarding of the new Adjustment memo', () => {
            adjustmentMemos.getUniversalAdjMemoNum().then((adjNum) => {
                adjustmentMemos.clickOnDiscardBtn();
                adjustmentMemos.searchForANonExistentMemo(adjNum, '0');
            });
        });
    });
});
