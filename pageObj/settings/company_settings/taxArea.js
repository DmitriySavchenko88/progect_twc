const Base = require('../../Base');
const taxAreaLoc = require('./taxAreaLoc');

class TaxArea extends Base {
    goToTaxAreasSettings() {
        this.clickOnElementXpath(taxAreaLoc.COMPANY_SETTINGS_SECTION);
        this.clickOnElementXpath(taxAreaLoc.TAXES_SUBSECTION);
        this.clickOnElementXpath(taxAreaLoc.TAX_AREAS_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(taxAreaLoc.NEW_BTN);
    }

    fillCodeField(areaCode) {
        this.typeTextXpath(taxAreaLoc.TAX_AREA_CODE_FIELD, areaCode);
    }

    fillCountryField(country) {
        this.typeTextAndChooseFromDropdownXpath(
            taxAreaLoc.TAX_AREA_COUNTRY_FIELD,
            country,
            taxAreaLoc.DROPDOWN,
        );
    }

    fillTypeField(type) {
        this.getElemByXpath(taxAreaLoc.TAX_AREA_TYPE_DROPDOWN).click();
        return this.getElemByXpath(taxAreaLoc.DROPDOWN)
            .contains(type)
            .click({ force: true });
    }

    clickSave() {
        this.clickOnElementXpath(taxAreaLoc.SAVE_BTN_SELECTOR);
    }

    checkThatRecordExist(areaCode) {
        this.typeTextAndPressEnter(taxAreaLoc.SEARCH_FIELD, areaCode);
        this.checkTextEqualContains(areaCode);
    }
}

module.exports = new TaxArea();
