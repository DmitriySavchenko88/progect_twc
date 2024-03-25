const Base = require('../../Base');
const feeLoc = require('./feeLoc');

class Fee extends Base {
    goToFeesSettings() {
        this.clickOnElementXpath(feeLoc.SALES_SECTION);
        this.clickOnElementXpath(feeLoc.SALES_FEES_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(feeLoc.NEW_BTN);
    }

    fillCodeField(code) {
        this.typeTextXpath(feeLoc.CODE_FIELD, code);
    }

    fillDefaultAmountField(amount) {
        this.typeTextXpath(feeLoc.DEFAULT_AMOUNT_FIELD, amount);
    }

    checkLineFeeCheckbox() {
        this.checkCheckboxXpath(feeLoc.LINE_FEE_CHECKBOX);
    }

    checkGlobalFeeCheckbox() {
        this.checkCheckboxXpath(feeLoc.GLOBAL_FEE_CHECKBOX);
    }

    clickSaveBtn() {
        this.clickOnElementXpath(feeLoc.SAVE_BTN);
    }

    checkThatRecordExist(code) {
        this.typeTextAndPressEnter(feeLoc.SEARCH_FIELD, code);
        this.checkTextEqualContains(code);
    }
}

module.exports = new Fee();
