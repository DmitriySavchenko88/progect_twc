const Base = require('../../Base');
const userLoc = require('./userLoc');

class Security extends Base {
    goToSecurityTab() {
        this.clickOnElementXpath(userLoc.SECURITY_TAB);
    }

    goUsersTab() {
        this.clickOnElementXpath(userLoc.USERS_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(userLoc.NEW_BTN);
    }

    setCredentials(name, secondName, login, password) {
        this.typeTextXpath(userLoc.FIRST_NAME_INPUT, name);
        this.typeTextXpath(userLoc.LAST_NAME_INPUT, secondName);
        this.typeTextXpath(userLoc.LOGIN_INPUT, login);
        this.typeTextXpath(userLoc.PASSWORD_INPUT, password);
        this.typeTextXpath(userLoc.PASSWORD_CONFIRM_INPUT, password);
    }

    goToLocationsTab() {
        this.clickOnElementXpath(userLoc.LOCATIONS_TAB);
    }

    goToRolesTab() {
        this.clickOnElementXpath(userLoc.ROLE_TAB);
        this.waitSec();
    }

    findLocationSetTrueCheckBox(location) {
        this.typeTextXpath(userLoc.SEARCH_INPUT_LOCATION, location)
            .realPress('{enter}')
            .wait(250);
        this.getElemByXpath(userLoc.LOCATIONS_TABLE)
            .contains('tr', location)
            .then((tableRow) => {
                cy.wrap(tableRow).find('.checkField').check();
            });
    }

    findRoleTrueCheckBox(role) {
        this.typeTextXpath(userLoc.SEARCH_INPUT_ROLE, role)
            .realPress('{enter}')
            .wait(250);
        this.getElemByXpath(userLoc.ROLES_TABLE)
            .contains('tr', role)
            .then((tableRow) => {
                cy.wrap(tableRow).find('.checkField').check();
            });
    }

    saveUser() {
        this.clickOnElementXpath(userLoc.SAVE_USER_BTN);
    }

    checkThatRecordExist(login) {
        this.typeTextAndPressEnter(userLoc.SEARCH_FIELD, login);
        this.checkTextEqualContains(login);
    }
}

module.exports = new Security();
