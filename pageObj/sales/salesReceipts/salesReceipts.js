const Base = require('../../Base');
const salesReceiptsLoc = require('../salesReceipts/salesReceipsLoc');

class SalesReceipts extends Base {
    goToSalesReceiptsTab() {
        this.clickOnElementXpath(salesReceiptsLoc.SALES_RECEIPS_TAB);
    }

    findReceiptBySalesOrderNum(soNum) {
        this.typeTextXpath(
            salesReceiptsLoc.SEARCH_RECEIPT_BY_SO_NUM_INPUT,
            soNum,
        );
        this.clickOnElementXpath(salesReceiptsLoc.SPY_BTN).wait(120);
    }

    checkSalesReceiptTransTypeLocation(transTypeValue, location) {
        this.checkTextEqualXpath(
            salesReceiptsLoc.TRANS_TYPE_VALUE,
            transTypeValue,
        );
        this.checkTextEqualXpath(salesReceiptsLoc.LOCATION_VALUE, location);
    }
}

module.exports = new SalesReceipts();
