const Base = require('../../Base');
const departmentLoc = require('./departmentLoc');

class Department extends Base {
    goToDepartmentsSettings() {
        this.clickOnElementXpath(departmentLoc.INVENTORY_CATALOG_SECTION);
        this.clickOnElementXpath(
            departmentLoc.DEPARTMENT_CLASSIFICATIONS_SECTION,
        );
        this.clickOnElementXpath(departmentLoc.DEPARTMENTS_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(departmentLoc.NEW_BTN).wait(350);
    }

    fillCodeField(code) {
        this.typeTextXpath(departmentLoc.CODE_FIELD, code);
    }

    fillNameField(name) {
        this.typeTextXpath(departmentLoc.NAME_FIELD, name);
    }

    clickSave() {
        this.clickOnElementXpath(departmentLoc.SAVE_BTN_SELECTOR).wait(300);
    }

    checkThatRecordExist(code) {
        this.typeTextAndPressEnter(departmentLoc.SEARCH_FIELD, code);
        this.checkTextEqualContains(code);
    }
}

module.exports = new Department();
