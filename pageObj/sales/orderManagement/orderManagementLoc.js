class OrderManagementLoc {
    constructor() {
        this.SALES_TAB = '//*[@datahover="sales"]';
        this.CREATE_NEW_SO_BTN = '//button[.="new"]';
        this.CREATED_AT_LOC_INPUT = '//*[@class="value autocomplete"]';
        this.OK_BTN = '//div[@class="footer"]//button[.="ok"]';
        this.SEARCH_TO_ADD_CUSTOMER =
            '//*[@id="customerSearchSelectbox"]/../div/input';
        this.CHANGE_ADDRESS_BTN = '//button[.="change address"]';
        this.POSTAL_ADDRESS_OPTION =
            '//div[@class="shipToAddressItem"]/div/span[.="postal"]/..';
        this.SAVE_BTN_SHIP_TO = '(//button[.="save"])[2]';
        this.SAVE_BTN_SO = '//button[.="save"]';
        this.ITEM_TAB = '//*[@id="items"]';
        this.SEARCH_ITEM_INPUT =
            '//div[@class="input_wrapper"]//input[@class="markFind"]';
        this.ITEM_TYPE_DROPDOWN =
            '(//*[@title="product code"]/../div[@class="autocompleteArrow"])[1]';
        this.SPY_GLASS =
            '//input[@class="markFind"]/../span[@class="spyglass"]';
        this.PAYMENTS_TAB = '//button[.="payments"]';
        this.ADD_PAYMENT_BTN = '//button[.="add payment"]';
        this.INPUT_PAYMENT_OPTION = '//p[.="Select payment option:"]/..//input';
        this.LIST_OF_PAYMENTS = '//li[@class="highlighted ui-menu-item"]/a';
        this.GIFT_CARD_NUM_INPUT = '//*[@id="giftCardNumber"]';
        this.SAVE_PAYMENT_BTN = '((//div[@class="right"])[7]/button[.="save"])';
        this.DUE_DATE_CALCULATION_INPUT =
            '//input[@data-bind="value: editPayment.dueDate"]';
        this.ADD_PAYMENT_OK_POPUP_BTN =
            '//*[@id="addSoPaymentPopup"]//button[.="ok"]';
        this.PLACE_ORDER_BTN = '//button[.="place order"]';
        this.YES_BTN_PLACE_ORDER = '//span[.="yes"]';
        this.OK_BTN_ORDER_HAS_BEEN_PLACED = '//span[.="ok"]';
        this.SALE_ORDER_NUM = '//span[contains(.,"sales order - send sale #")]';
        this.DO_NOT_WAIT_CHECK_BOX =
            '//input[@data-bind="checked: doNotWaitCopy"]';
        this.CLOSE_BTN_DOCUMENT_PROCESSING = '(//button[.="close"])[1]';
        this.DOCUMENT_PROCESSING_POPUP = '//span[.="document processing"]';
        this.CREATE_SM_BTN = '(//button[.="create SM"])[2]';
        this.SUSPEND_SO_BTN_IN_SO_DIALOG = '(//button[.="suspend"])[2]';
        this.CANCEL_SO_BTN_IN_SO_DIALOG =
            '(//span[@data-bind="text: getTitle()"]/../../..//button[.="cancel"])[2]';
        this.STATUS_SO_VIEW_PROCESS_DIALOG =
            '//td[@aria-describedby="SOItemsGrid_Status"]/span';
        this.YES_BTN_CANCEL_ORDER = '//button[.="yes"]';
        this.CREDIT_CARD_NUM_INPUT = '//input[@id="card-number"]';
        this.END_MONTH_SELECT = '//select[@id="edMonth"]';
        this.END_YEAR_SELECT = '//select[@id="edYear"]';
        this.CARD_HOLDER_INPUT = '//input[@id="holderName"]';
        this.SECURITY_CODE_INPUT = '//input[@id="cvv"]';
        this.PAY_BTN = '//button[.="pay"]';
        this.LOADING_PANEL_ADYEN = '(//div[@id="popupLoadingPanel"])[2]';
        this.HOLD_SO_BTN = '//button[contains(text(),"hold")]';
        this.SHIPMENTS_TAB = '//button[@id="shipments"]';
        this.SHIP_MEMO_NUM = '//td[@aria-describedby="SSOGrid_OrderNo"]/span';
        this.UNIVERSAL_SEARCH_INPUT =
            '(//*[@class="scrollContainer rightScrollShift"]/div/div/input)[1]';
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.LIST_VIEW = '//*[@class="list"]';
        this.STATUS_OF_SO_ORDER = null;
        this.CHQ_HOME = '//button[.="CLOUDS_WORK"]';
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.ACTION_BUTTON = '//button[.="actions"]';
        this.CHANGE_DELIVERY_METHOD_BUTTON =
            '//button[.="change delivery method"]';
        this.DELIVERY_METHODS_DPD_BUTTON =
            '//span[.="delivery method:"]/../..//*[@class="autocompleteArrow"]';
        this.PLACE_ORDER_ATS_SHORT_DIALOG =
            '//*[@class="ui-dialog-buttonset"]/button[.="place order"]';
        this.LIST_DELIVERY_METHIDS =
            '//ul[@class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all"]/li/a';
        this.OK_BTN_CHANGE_DELIVERY_METHOD =
            '//*[@id="changeDeliveryMethodDialog"]/div[3]/div/button[1]';
        this.PAYMENT_AMOUNT =
            '//input[@data-bind="currencyValue: editPayment.paymentAmount"]';
        this.SO_ROW = null;
        this.VIEW_PROCESS_BTN = '//button[.="view/process"]';
        this.TRANSFER_LOC_DPD =
            '//span[.="transfer source location:"]/../..//div[@class="autocompleteArrow"]';
        this.OK_BTN_CREATE_SM_FOR_LOCAT =
            '//*[@id="CreateSmSoItemPopup"]/div[3]/div/button[1]';
        this.DROP_SHIP_FROM_VENDOR_BTN = '//button[.="drop ship from vendor"]';
        this.OK_DROP_SHIP_BTN =
            '//*[@id="ShipFromVendorPopup"]/div[3]/div/button[1]';
        this.VIEW_PO_BTN = '//span[.="view PO"]';
        this.STATUS_OF_PO =
            '//table[@id="viewpo-grid"]//*[@aria-describedby="viewpo-grid_PurchaseOrder.IsHeld"]/xmp';
        this.EDIT_ITEM_DETAILS_BTN = '//*[@id="items-form"]//button[.="edit"]';
        this.LINE_DISCOUNT_BTN = '//button[@id="discount"]';
        this.DISCOUNT_LINE_REASON_INPUT = '//*[@id="discount-form"]//input';
        this.LINE_DISCOUNT_LIST = '//li[@class="highlighted ui-menu-item"]';
        this.LINE_FEES_TAB = '//button[@id="fees"]';
        this.NEW_LINE_FEE_BTN = '//*[@id="fees-form"]//button[.="new"]';
        this.LINE_FEE_CODE_INTUT =
            '//*[@id="editSalesOrderFeePopup"]//span[@role="status"]/../input';
        this.LINE_FEE_LIST = '//li[@class="highlighted ui-menu-item"]';
        this.SAVE_LINE_FEE_BTN =
            '//*[@id="editSalesOrderFeePopup"]//button[.="save"]';
        this.SAVE_EDIT_ITEM_POPUP_BTN =
            '//*[@id="salesOrderItemEditPopup"]//button[.="save"]';
        this.EDIT_ITEM_DIALOG_GENERAL_TAB = '//button[@id="general"]';
        this.ITEM_TOTAL_VALUE =
            '//*[@id="general-form"]//span[.="item total:"]/../../div[2]/span';
        this.GLOBAL_DISCOUNT_TAB = '//button[@id="globalDiscount"]';
        this.GLOBAL_DISCOUNT_REASON_INPUT =
            '//*[@id="globalDiscount-form"]//input';
        this.GLOBAL_DISCOUNT_LIST = '//li[@class="highlighted ui-menu-item"]';
        this.GLOBAL_FEES_TAB = '//button[@id="globalFees"]';
        this.GLOBAL_FEES_NEW_BUTTON =
            '//*[@id="globalFees-form"]//button[.="new"]';
        this.GLOBAL_FEE_CODE_INPUT =
            '//*[@id="editSalesOrderFeePopup"]//span[.="fee code:"]/../..//input';
        this.GLOBAL_FEE_LIST = '//li[@class="highlighted ui-menu-item"]';
        this.SAVE_GLOBAL_FEE_BTN =
            '//*[@id="editSalesOrderFeePopup"]//button[.="save"]';
        this.TAX_EXEMPT_CHECKBOX =
            '//span[.="tax exempt:"]/../..//div[@class="checkbox"]';
        this.YES_TAX_EXEMPTION_BTN =
            '//span[.="tax exempt"]/../..//button[.="yes"]';
        this.ORDER_TAB = '//button[.="order"]';
        this.ORDER_MANAGEMENT_TAB =
            '//button[.="                 order management             "]';
    }

    _createComplexSelector(universalNum) {
        this.STATUS_OF_SO_ORDER = `//td[@aria-describedby="OMSListGrid_SalesOrderNo"]/span[.="${universalNum}"]/../../td[@aria-describedby="OMSListGrid_Status"]/span`;
        this.SO_ROW = `//td[@aria-describedby="OMSListGrid_SalesOrderNo"]/span[.="${universalNum}"]/../..`;
    }
}

module.exports = new OrderManagementLoc();
