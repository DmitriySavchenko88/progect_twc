const Base = require('../../Base');
const locationLoc = require('./locationLoc');

class Location extends Base {
    goToLocationSettings() {
        this.clickOnElementXpath(locationLoc.LOCATION_SETTINGS_SECTION);
        this.clickOnElementXpath(locationLoc.LOCATION_SETTINGS_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(locationLoc.NEW_BTN);
    }

    createBrandNewLocation() {
        this.getElemByXpath(locationLoc.CREATE_BRAND_NEW_RADIOBUTTON).check({
            force: true,
        });
        this.clickOnElementXpath(locationLoc.OK_BUTTON);
    }

    fillCodeField(locationCode) {
        this.typeTextXpath(locationLoc.CODE_FIELD, locationCode);
    }

    checkOpenCheckbox() {
        this.getElemByXpath(locationLoc.OPEN_CHECKBOX).check();
    }

    checkAvailableForSDDCheckbox() {
        this.getElemByXpath(locationLoc.AVAILABLE_FOR_SDD_CHECKBOX).check();
    }

    fillRegionalPriceLevelField(priceLevel) {
        this.typeTextAndChooseFromDropdownXpath(
            locationLoc.REGIONAL_PRICE_LEVEL_FIELD,
            priceLevel,
            locationLoc.DROPDOWN,
        );
    }

    fillLocationPriceLevelField(priceLevel) {
        this.typeTextAndChooseFromDropdownXpath(
            locationLoc.LOCATION_PRICE_LEVEL_FIELD,
            priceLevel,
            locationLoc.DROPDOWN,
        );
    }

    fillTaxAreaField(taxArea) {
        this.typeTextAndChooseFromDropdownXpath(
            locationLoc.TAX_AREA_FIELD,
            taxArea,
            locationLoc.DROPDOWN,
        );
    }

    fillBaseCurrencyField(currency) {
        this.typeTextAndChooseFromDropdownXpath(
            locationLoc.BASE_CURRENCY_FIELD,
            currency,
            locationLoc.DROPDOWN,
        );
    }

    fillCountryField(country) {
        this.typeTextAndChooseFromDropdownXpath(
            locationLoc.COUNTRY_FIELD,
            country,
            locationLoc.DROPDOWN,
        );
    }

    fillPostalCodeField(postalCode) {
        this.typeTextAndChoosePartialMatchXpath(
            locationLoc.POSTAL_CODE_FIELD,
            postalCode,
            locationLoc.DROPDOWN,
        );
    }

    fillAddress1Field(address1) {
        this.typeTextXpath(locationLoc.ADDRESS1_FIELD, address1);
    }

    goToLocationSalesTab() {
        this.clickOnElementXpath(locationLoc.SALES_TAB);
    }

    checkLocationForNewOrderCheckbox() {
        this.getElemByXpath(
            locationLoc.LOCATION_FOR_NEW_ORDERS_CHECKBOX,
        ).check();
    }

    clickCreateLocationBtn() {
        this.clickOnElementXpath(locationLoc.CREATE_LOCATION_BTN);
    }

    checkThatRecordExist(locationCode) {
        this.typeTextAndPressEnter(locationLoc.SEARCH_FIELD, locationCode);
        this.checkTextEqualContains(locationCode);
    }
}

module.exports = new Location();
