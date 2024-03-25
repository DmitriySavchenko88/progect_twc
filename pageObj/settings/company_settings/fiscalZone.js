const Base = require('../../Base');
const fiscalZoneLoc = require('./fiscalZoneLoc');

class FiscalZone extends Base {
    goToFiscalZoneSettings() {
        this.clickOnElementXpath(fiscalZoneLoc.COMPANY_SETTINGS_SECTION);
        this.clickOnElementXpath(fiscalZoneLoc.CREDIT_AND_REWARD_SUBSECTION);
        this.clickOnElementXpath(fiscalZoneLoc.FISCAL_ZONES_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(fiscalZoneLoc.NEW_BTN);
    }

    fillFiscalZoneNameField(name) {
        this.typeTextXpath(fiscalZoneLoc.FISCAL_ZONE_NAME_FIELD, name);
    }

    fillCurrencyField(currency) {
        this.typeTextAndChooseFromDropdownXpath(
            fiscalZoneLoc.CURRENCY_FIELD,
            currency,
            fiscalZoneLoc.DROPDOWN,
        );
    }

    goToLocationsTab() {
        this.clickOnElementXpath(fiscalZoneLoc.LOCATION_TAB);
    }

    selectFiscalZoneLocation(location) {
        this.typeTextXpath(
            fiscalZoneLoc.LOCATIONS_TAB_SEARCH_FIELD,
            location.substring(0, location.length - 3),
        );
        this.clickOnElementXpath(fiscalZoneLoc.LOCATIONS_TAB_SPY_GLASS);
        this.getElemByXpath(fiscalZoneLoc.LOCATION_TABLE)
            .contains('tr', location, { matchCase: false })
            .then((tableRow) => {
                cy.wrap(tableRow).find('.checkField').check();
            });
    }

    goToGiftCardsTab() {
        this.clickOnElementXpath(fiscalZoneLoc.GIFT_CARDS_TAB);
    }

    checkEnableGiftCardsCheckbox() {
        this.checkCheckboxXpath(fiscalZoneLoc.ENABLE_GIFT_CARDS_CHECKBOX);
    }

    clickSave() {
        this.clickOnElementXpath(fiscalZoneLoc.SAVE_BTN_SELECTOR);
    }

    checkThatRecordExist(name) {
        this.typeTextAndPressEnter(fiscalZoneLoc.SEARCH_FIELD, name);
        this.checkTextEqualContains(name);
    }
}

module.exports = new FiscalZone();
