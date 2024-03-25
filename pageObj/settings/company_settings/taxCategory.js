const Base = require('../../Base');
const taxCategoryLoc = require('./taxCategoryLoc');

class TaxCategory extends Base {
    goToTaxCategoriesSettings() {
        this.clickOnElementXpath(taxCategoryLoc.COMPANY_SETTINGS_SECTION);
        this.clickOnElementXpath(taxCategoryLoc.TAXES_SUBSECTION);
        this.clickOnElementXpath(taxCategoryLoc.TAX_CATEGORIES_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(taxCategoryLoc.NEW_BTN);
    }

    fillCodeField(code) {
        this.typeTextXpath(taxCategoryLoc.TAX_CODE_FIELD, code);
    }

    clickSave() {
        this.clickOnElementXpath(taxCategoryLoc.SAVE_BTN_SELECTOR);
    }

    checkThatRecordExist(code) {
        this.typeTextAndPressEnter(taxCategoryLoc.SEARCH_FIELD, code);
        this.checkTextEqualContains(code);
    }
}

module.exports = new TaxCategory();
