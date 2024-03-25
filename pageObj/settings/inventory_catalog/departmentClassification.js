const Base = require('../../Base');
const departmentClassificationLoc = require('./departmentClassificationLoc');

class DepartmentClassification extends Base {
    goToDepartmentClassificationSettings() {
        this.clickOnElementXpath(
            departmentClassificationLoc.INVENTORY_CATALOG_SECTION,
        );
        this.clickOnElementXpath(
            departmentClassificationLoc.DEPARTMENT_CLASSIFICATIONS_SECTION,
        );
        this.clickOnElementXpath(
            departmentClassificationLoc.DEPARTMENT_CLASSIFICATIONS_TAB,
        );
    }

    clickNewBtn() {
        this.clickOnElementXpath(departmentClassificationLoc.NEW_BTN);
    }

    fillFullDeptCodeField(code) {
        this.typeTextXpath(
            departmentClassificationLoc.FULL_DEPT_CODE_FIELD,
            code,
        );
    }

    fillDepartmentField(departmentName) {
        this.typeTextAndChooseFromDropdownXpath(
            departmentClassificationLoc.DEPARTMENT_FIELD,
            departmentName,
            departmentClassificationLoc.DROPDOWN,
        );
    }

    clickSave() {
        this.clickOnElementXpath(departmentClassificationLoc.SAVE_BTN_SELECTOR);
    }

    checkThatRecordExist(code) {
        this.typeTextAndPressEnter(
            departmentClassificationLoc.SEARCH_FIELD,
            code,
        );
        this.checkTextEqualContains(code);
    }
}

module.exports = new DepartmentClassification();
