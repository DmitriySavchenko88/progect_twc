class SalesReceipsLoc {
    constructor() {
        this.SALES_RECEIPS_TAB =
            '//button[.="                 sales receipts             "]';
        this.SEARCH_RECEIPT_BY_SO_NUM_INPUT =
            '//label[.="sales order #"]/../input';
        this.SPY_BTN = '//li[@class="find"]/span[2]';
        this.TRANS_TYPE_VALUE = null;
        this.LOCATION_VALUE = null;
    }

    _createComplexSelector(qty) {
        this.TRANS_TYPE_VALUE = `//td[@aria-describedby="SalesReceiptGrid_TotalQty"]/xmp[.="${qty}"]/../..//td[@aria-describedby="SalesReceiptGrid_TransactionType"]/xmp`;
        this.LOCATION_VALUE = `//td[@aria-describedby="SalesReceiptGrid_TotalQty"]/xmp[.="${qty}"]/../..//td[@aria-describedby="SalesReceiptGrid_LocationId"]/xmp`;
    }
}

module.exports = new SalesReceipsLoc();
