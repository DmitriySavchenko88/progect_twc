const Base = require('../../Base');
const paymentMethodLoc = require('./paymentMethodLoc');

class PaymentMethod extends Base {
    goToPaymentMethodSettings() {
        this.clickOnElementXpath(paymentMethodLoc.SALES_SECTION);
        this.clickOnElementXpath(paymentMethodLoc.PAYMENT_METHODS_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(paymentMethodLoc.NEW_BTN);
    }

    selectPaymentType(type) {
        this.typeTextAndChooseFromDropdownXpath(
            paymentMethodLoc.PAYMENT_TYPE_FIELD,
            type,
            paymentMethodLoc.DROPDOWN,
        );
        this.clickOnElementXpath(paymentMethodLoc.OK_BTN);
    }

    fillCodeField(code) {
        this.typeTextXpath(paymentMethodLoc.CODE_FIELD, code);
    }

    clickSaveBtn() {
        this.clickOnElementXpath(paymentMethodLoc.SAVE_BTN);
        this.waitSec();
    }

    checkThatRecordExist(code) {
        this.typeTextAndPressEnter(paymentMethodLoc.SEARCH_FIELD, code);
        this.checkTextEqualContains(code);
    }
}

module.exports = new PaymentMethod();
