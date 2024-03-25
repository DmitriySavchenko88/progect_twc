const Base = require('../../Base');
const customerLoc = require('./customersLoc');

class Customers extends Base {
    goToSalesTab() {
        this.waitSec();
        this.clickOnElementXpath(customerLoc.SALES_TAB).click();
    }

    clickOnNewButton() {
        this.waitSec();
        this.clickOnElementXpath(customerLoc.NEW_BUTTON);
    }

    goToCustomersTab() {
        this.waitSec();
        this.clickOnElementXpath(customerLoc.CUSTOMERS_TAB);
    }

    gotoMemberShipTab() {
        this.clickOnElementXpath(customerLoc.MEMBERSHIP_TAB);
    }

    typeFirstName(firstName) {
        this.waitSec();
        this.typeTextXpath(customerLoc.FIRST_NAME_FIELD, firstName);
    }

    typeLastName(lastName) {
        this.typeTextXpath(customerLoc.LAST_NAME_FIELD, lastName);
    }

    clickOnSaveBtn() {
        this.getElemByXpath(customerLoc.SAVE_BTN).click().wait(1000);
    }

    clickOnCancelBtn() {
        this.getElemByXpath(customerLoc.CANCEL_BTN)
            .click({ force: true })
            .wait(1000);
    }

    typeFirstAndLastNameToTheFilter(firstName, lastName) {
        this.typeTextXpath(customerLoc.NAME_FIELD_IN_FILTER, firstName);
        this.typeTextXpath(customerLoc.LAST_NAME_FIELD_IN_FILTER, lastName);
    }

    enterMemberCodeToCustomer(membershipCode) {
        this.typeTextXpath(customerLoc.MEMBER_CODE_INPUT_FIELD, membershipCode);
    }

    checkCustomerByCode(customerCode) {
        this.searchCustomerByCode(customerCode);
        this.checkTextNotEqualContains(customerCode);
    }

    searchCustomerByCode(customerCode) {
        this.typeTextXpath(customerLoc.SEARCH_FIELD_MEMBER_CODE, customerCode);
        this.waitSec();
        this.clickOnElementXpath(customerLoc.MAGNIFY_ICON_FILTERS);
    }

    selectGenderFromDropDownList(gender) {
        cy.xpath(customerLoc.GENDERS_INPUT).dblclick().type(gender);
    }

    fillPrimaryEmailField(email) {
        this.typeTextXpath(customerLoc.PRIMARY_EMAIL_FIELD, email);
    }

    createShipToAddress(name, country, postalCode, address1) {
        this.clickOnElementXpath(customerLoc.SHIP_TO_TAB);
        this.clickOnElementXpath(customerLoc.NEW_SHIP_ADDRESS_BTN);
        this.typeTextAndChooseFromDropdownXpath(
            customerLoc.ADDRESS_NAME_FIELD,
            name,
            customerLoc.DROPDOWN,
        );
        this.typeTextAndChooseFromDropdownXpath(
            customerLoc.COUNTRY_FIELD,
            country,
            customerLoc.DROPDOWN,
        );
        this.typeTextAndChoosePartialMatchXpath(
            customerLoc.POSTAL_CODE_FIELD,
            postalCode,
            customerLoc.DROPDOWN,
        );
        this.typeTextXpath(customerLoc.ADDRESS1_FIELD, address1);
        this.checkCheckboxXpath(customerLoc.DEFAULT_CHECKBOX);
        this.clickOnElementXpath(customerLoc.SHIP_ADDRESS_SAVE_BTN);
    }
}

module.exports = new Customers();
