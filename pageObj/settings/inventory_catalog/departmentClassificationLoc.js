class DepartmentClassificationLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.INVENTORY_CATALOG_SECTION = '//span[.="inventory / catalog"]';
        this.DEPARTMENT_CLASSIFICATIONS_SECTION =
            '(//li[@class = "rootNode"]//span[.="department classifications"])[1]';
        this.DEPARTMENT_CLASSIFICATIONS_TAB =
            '(//li[@class = "rootNode"]//span[.="department classifications"])[2]';
        this.NEW_BTN = '//button[.="new"]';
        this.FULL_DEPT_CODE_FIELD = '//span[.="full dept code:"]/../..//input';
        this.DEPARTMENT_FIELD = '//span[.="department:"]/../..//input';
        this.DROPDOWN = '//*[@id="applicationHost"]//*[@role="listbox"]';
        this.SAVE_BTN_SELECTOR = "//button[.='save']";
        this.SEARCH_FIELD =
            '//div[@class="list settingsList"]//input[@placeholder ="search"]';
    }
}

module.exports = new DepartmentClassificationLoc();
