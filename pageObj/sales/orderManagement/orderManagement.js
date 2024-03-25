import { testDataGeneration as tData } from '../../../cypress/support/credentials';
import 'cypress-real-events/support';

const Base = require('../../Base');
const orderManagementLoc = require('./orderManagementLoc');

class OrderManagement extends Base {
    goToSalesTab() {
        this.clickOnElementXpath(orderManagementLoc.SALES_TAB);
        this.waitSec();
    }

    clickNewSoBtn() {
        this.clickOnElementXpath(orderManagementLoc.CREATE_NEW_SO_BTN).should(
            'be.visible',
        );
    }

    selectLocation(location) {
        this.typeTextAndChooseFromDropdownXpath(
            orderManagementLoc.CREATED_AT_LOC_INPUT,
            location,
            orderManagementLoc.CREATED_AT_LOC_INPUT,
        );
        this.clickOnElementXpath(orderManagementLoc.OK_BTN).wait(350);
    }

    searchToAddCustomer(name) {
        this.typeTextXpath(
            orderManagementLoc.SEARCH_TO_ADD_CUSTOMER,
            name,
        ).realPress('{enter}');
    }

    setCustPostalAddress() {
        this.clickOnElementXpath(orderManagementLoc.CHANGE_ADDRESS_BTN);
        this.clickOnElementXpath(orderManagementLoc.POSTAL_ADDRESS_OPTION);
        this.clickOnElementXpath(orderManagementLoc.SAVE_BTN_SHIP_TO);
    }

    goToItemsTab() {
        this.clickOnElementXpath(orderManagementLoc.ITEM_TAB);
    }

    addItemsByOptions(itemIdentifier, item) {
        this.getElemByXpath(orderManagementLoc.ITEM_TYPE_DROPDOWN).click({
            force: true,
        });
        this.getElemByXpath('//ul/li/xmp/..')
            .contains(itemIdentifier)
            .click({ force: true });
        this.waitSec();
        this.typeTextXpath(orderManagementLoc.SEARCH_ITEM_INPUT, item).wait(
            250,
        );
        this.clickOnElementXpath(orderManagementLoc.SPY_GLASS)
            .wait(250)
            .realPress('{enter}')
            .wait(350);
    }

    goToOrderTab() {
        this.clickOnElementXpath(orderManagementLoc.ORDER_TAB);
    }

    clickTaxExemptTru() {
        this.clickOnElementXpath(orderManagementLoc.TAX_EXEMPT_CHECKBOX);
        this.wait(500);
        this.tryIfElementExist(
            '.ui-dialog-title',
            () => {},
            () => {
                this.clickOnElementXpath(
                    orderManagementLoc.YES_TAX_EXEMPTION_BTN,
                );
            },
        );
    }

    goToPaymentsTab() {
        this.clickOnElementXpath(orderManagementLoc.PAYMENTS_TAB);
    }

    addPayment(
        payment,
        dueDateDays,
        gcNum,
        cCNum,
        exMonth,
        expYear,
        cardHolderName,
        securityCode,
    ) {
        this.wait(500);
        this.clickOnElementXpath(orderManagementLoc.ADD_PAYMENT_BTN);
        this.typeTextAndChooseFromDropdownXpath(
            orderManagementLoc.INPUT_PAYMENT_OPTION,
            payment,
            orderManagementLoc.LIST_OF_PAYMENTS,
        );
        this.clickOnElementXpath(orderManagementLoc.ADD_PAYMENT_OK_POPUP_BTN);
        if (payment === tData.termsPM) {
            this.typeTextXpath(
                orderManagementLoc.DUE_DATE_CALCULATION_INPUT,
                dueDateDays,
            )
                .wait(100)
                .tab();
            this.clickOnElementXpath(orderManagementLoc.SAVE_PAYMENT_BTN);
        } else if (payment === tData.giftCardPM) {
            this.typeTextXpath(orderManagementLoc.GIFT_CARD_NUM_INPUT, gcNum)
                .wait(350)
                .tab();
            this.wait(500);
            this.clickOnXpathElemMultiplyTimes(
                1,
                orderManagementLoc.SAVE_PAYMENT_BTN,
            );
        } else if (payment === tData.adyenCCPM) {
            this.typeTextXpath(orderManagementLoc.CREDIT_CARD_NUM_INPUT, cCNum);
            this.getElemByXpath(orderManagementLoc.END_MONTH_SELECT).select(
                exMonth,
            );
            this.getElemByXpath(orderManagementLoc.END_YEAR_SELECT).select(
                expYear,
            );
            this.typeTextXpath(
                orderManagementLoc.CARD_HOLDER_INPUT,
                cardHolderName,
            );
            this.typeTextXpath(
                orderManagementLoc.SECURITY_CODE_INPUT,
                securityCode,
            );
            this.clickOnElementXpath(orderManagementLoc.PAY_BTN).wait(1500);
        } else {
            cy.log('Unknown payment type');
        }
    }

    addMultiplyPayments(payment1, payment2, amount, dueDateDays, gcNum) {
        this.clickOnElementXpath(orderManagementLoc.ADD_PAYMENT_BTN);
        this.typeTextAndChooseFromDropdownXpath(
            orderManagementLoc.INPUT_PAYMENT_OPTION,
            payment1,
            orderManagementLoc.LIST_OF_PAYMENTS,
        );
        this.clickOnElementXpath(orderManagementLoc.ADD_PAYMENT_OK_POPUP_BTN);
        this.typeTextXpath(orderManagementLoc.PAYMENT_AMOUNT, amount);
        this.typeTextXpath(
            orderManagementLoc.DUE_DATE_CALCULATION_INPUT,
            dueDateDays,
        )
            .wait(100)
            .tab();
        this.clickOnElementXpath(orderManagementLoc.SAVE_PAYMENT_BTN);
        this.clickOnElementXpath(orderManagementLoc.ADD_PAYMENT_BTN);
        this.typeTextAndChooseFromDropdownXpath(
            orderManagementLoc.INPUT_PAYMENT_OPTION,
            payment2,
            orderManagementLoc.LIST_OF_PAYMENTS,
        );
        this.clickOnElementXpath(orderManagementLoc.ADD_PAYMENT_OK_POPUP_BTN);
        this.typeTextXpath(orderManagementLoc.GIFT_CARD_NUM_INPUT, gcNum);
        this.clickOnXpathElemMultiplyTimes(
            2,
            orderManagementLoc.SAVE_PAYMENT_BTN,
        );
    }

    clickPlaceSalesOrder() {
        this.clickOnElementXpath(orderManagementLoc.PLACE_ORDER_BTN).wait(900);
    }

    clickYesPlaceSalesOrder() {
        this.clickOnElementXpath(orderManagementLoc.YES_BTN_PLACE_ORDER);
        cy.wait(500);
    }

    clickOkSoHasBeenPlaced() {
        this.waitPlaceSoMessage();
        this.clickOnElementXpath(
            orderManagementLoc.OK_BTN_ORDER_HAS_BEEN_PLACED,
        ).wait(250);
    }

    waitPlaceSoMessage() {
        this.recursiveWait('info', '//span[@class="ui-dialog-title"]');
    }

    getSalesOrderNum() {
        return this.getTextToVariable(orderManagementLoc.SALE_ORDER_NUM);
    }

    doNotWaitPlaceOrder() {
        const documentProcessingPopup = this.getElemByXpath(
            orderManagementLoc.DOCUMENT_PROCESSING_POPUP,
        ).should('not.exist');

        if (documentProcessingPopup) {
            cy.log('Sales Order has been placed.');
        } else {
            this.clickOnElementXpath(orderManagementLoc.DO_NOT_WAIT_CHECK_BOX);
            this.clickOnElementXpath(
                orderManagementLoc.CLOSE_BTN_DOCUMENT_PROCESSING,
            );
        }
    }

    listView() {
        this.clickOnElementXpath(orderManagementLoc.LIST_VIEW);
    }

    searchSorder(orderNumber) {
        this.typeTextXpath(
            orderManagementLoc.UNIVERSAL_SEARCH_INPUT,
            orderNumber,
        );
        this.clickMagnifierFiltersBtn();
        this.checkSalesOrderExists(orderNumber);
    }

    clickMagnifierFiltersBtn() {
        this.clickOnElementXpath(orderManagementLoc.MAGNIFY_ICON_FILTERS);
        this.waitSec();
    }

    checkSalesOrderExists(orderNum) {
        this.checkTextEqualContains(orderNum);
    }

    checkOrderStatus(status) {
        this.checkTextEqualContains(status);
        this.wait(500);
    }

    createSM(delMethod, location) {
        this.clickOnElementXpath(orderManagementLoc.SO_ROW);
        this.clickOnElementXpath(orderManagementLoc.VIEW_PROCESS_BTN);
        this.goToItemsTab();
        this.clickOnElementXpath(orderManagementLoc.CREATE_SM_BTN);
        if (delMethod === 'ship to store') {
            this.clickAndChooseFromDropdownXpath(
                orderManagementLoc.TRANSFER_LOC_DPD,
                location,
                orderManagementLoc.LIST_DELIVERY_METHIDS,
            );
            this.clickOnElementXpath(
                orderManagementLoc.OK_BTN_CREATE_SM_FOR_LOCAT,
            );
            this.clickOnElementXpath(orderManagementLoc.SAVE_BTN_SO);
        } else {
            this.clickOnElementXpath(orderManagementLoc.SAVE_BTN_SO);
        }
    }

    suspendSo() {
        this.clickOnElementXpath(orderManagementLoc.SO_ROW);
        this.clickOnElementXpath(orderManagementLoc.VIEW_PROCESS_BTN);
        this.goToItemsTab();
        this.clickOnElementXpath(
            orderManagementLoc.SUSPEND_SO_BTN_IN_SO_DIALOG,
        );
        this.clickOnElementXpath(orderManagementLoc.SAVE_BTN_SO);
    }

    dropShipFromVendor() {
        this.clickOnElementXpath(orderManagementLoc.SO_ROW);
        this.clickOnElementXpath(orderManagementLoc.VIEW_PROCESS_BTN);
        this.goToItemsTab();
        this.clickOnElementXpath(orderManagementLoc.DROP_SHIP_FROM_VENDOR_BTN);
        this.clickOnElementXpath(orderManagementLoc.OK_DROP_SHIP_BTN);
    }

    viewPo() {
        this.clickOnElementXpath(orderManagementLoc.VIEW_PO_BTN);
    }

    checkPoStatus(status) {
        this.checkTextEqualXpath(orderManagementLoc.STATUS_OF_PO, status);
    }

    cancelSo() {
        this.clickOnElementXpath(orderManagementLoc.SO_ROW);
        this.clickOnElementXpath(orderManagementLoc.VIEW_PROCESS_BTN);
        this.goToItemsTab();
        this.clickOnElementXpath(orderManagementLoc.CANCEL_SO_BTN_IN_SO_DIALOG);
        this.clickOnElementXpath(orderManagementLoc.YES_BTN_CANCEL_ORDER);
        this.checkTextEqualXpath(
            orderManagementLoc.STATUS_SO_VIEW_PROCESS_DIALOG,
            'cancelled',
        );
        this.clickOnElementXpath(orderManagementLoc.SAVE_BTN_SO);
    }

    clickOnChqHome() {
        this.clickOnElementXpath(orderManagementLoc.CHQ_HOME);
    }

    clickHoldSo() {
        this.clickOnElementXpath(orderManagementLoc.HOLD_SO_BTN);
    }

    openSalesOrder(orderNumber) {
        this.typeTextXpath(
            orderManagementLoc.UNIVERSAL_SEARCH_INPUT,
            orderNumber,
        )
            .wait(500)
            .realPress('{enter}');
    }

    goToShipmentsTab() {
        this.clickOnElementXpath(orderManagementLoc.SHIPMENTS_TAB);
    }

    getShipMemoNum() {
        return this.getTextToVariable(orderManagementLoc.SHIP_MEMO_NUM);
    }

    clickSaveBtnOnSalesOrder() {
        this.clickOnElementXpath(orderManagementLoc.SAVE_BTN_SO).wait(500);
    }

    atsShortConfirm() {
        this.clickOnElementXpath(
            orderManagementLoc.PLACE_ORDER_ATS_SHORT_DIALOG,
        );
    }

    setDeliveryMethod(deliveryMethod) {
        this.clickOnElementXpath(orderManagementLoc.ACTION_BUTTON);
        this.clickOnElementXpath(
            orderManagementLoc.CHANGE_DELIVERY_METHOD_BUTTON,
        );
        this.clickAndChooseFromDropdownXpath(
            orderManagementLoc.DELIVERY_METHODS_DPD_BUTTON,
            deliveryMethod,
            orderManagementLoc.LIST_DELIVERY_METHIDS,
        );
        this.clickOnElementXpath(
            orderManagementLoc.OK_BTN_CHANGE_DELIVERY_METHOD,
        );
    }

    clickEditItemDetails() {
        this.clickOnElementXpath(orderManagementLoc.EDIT_ITEM_DETAILS_BTN);
    }

    goToLineDiscountTab() {
        this.clickOnElementXpath(orderManagementLoc.LINE_DISCOUNT_BTN);
    }

    chooseLineDiscount(discountReason) {
        this.typeTextAndChooseFromDropdownXpath(
            orderManagementLoc.DISCOUNT_LINE_REASON_INPUT,
            discountReason,
            orderManagementLoc.LINE_DISCOUNT_LIST,
        );
    }

    goToLineFeesTab() {
        this.clickOnElementXpath(orderManagementLoc.LINE_FEES_TAB);
    }

    addNewLineFee(feeCode) {
        this.clickOnElementXpath(orderManagementLoc.NEW_LINE_FEE_BTN);
        this.typeTextAndChooseFromDropdownXpath(
            orderManagementLoc.LINE_FEE_CODE_INTUT,
            feeCode,
            orderManagementLoc.LINE_FEE_LIST,
        );
        this.clickOnElementXpath(orderManagementLoc.SAVE_LINE_FEE_BTN);
    }

    goToGeneralTabEditItemDialog() {
        this.clickOnElementXpath(
            orderManagementLoc.EDIT_ITEM_DIALOG_GENERAL_TAB,
        );
    }

    getItemTotalValue() {
        return this.getValueToVariable(orderManagementLoc.ITEM_TOTAL_VALUE);
    }

    saveEditItem() {
        this.clickOnElementXpath(orderManagementLoc.SAVE_EDIT_ITEM_POPUP_BTN);
    }

    goToGlobalDiscountTab() {
        this.clickOnElementXpath(orderManagementLoc.GLOBAL_DISCOUNT_TAB);
    }

    addGlobalDiscount(discountReason) {
        this.typeTextAndChooseFromDropdownXpath(
            orderManagementLoc.GLOBAL_DISCOUNT_REASON_INPUT,
            discountReason,
            orderManagementLoc.GLOBAL_DISCOUNT_LIST,
        );
    }

    goToGlobalFeesTab() {
        this.clickOnElementXpath(orderManagementLoc.GLOBAL_FEES_TAB);
    }

    addGlobalFee(feeCode) {
        this.clickOnElementXpath(orderManagementLoc.GLOBAL_FEES_NEW_BUTTON);
        this.typeTextAndChooseFromDropdownXpath(
            orderManagementLoc.GLOBAL_FEE_CODE_INPUT,
            feeCode,
            orderManagementLoc.GLOBAL_FEE_LIST,
        );
        this.clickOnElementXpath(orderManagementLoc.SAVE_GLOBAL_FEE_BTN);
    }

    goToOrderManagementTab() {
        this.clickOnElementXpath(orderManagementLoc.ORDER_MANAGEMENT_TAB).wait(
            500,
        );
    }
}

module.exports = new OrderManagement();
