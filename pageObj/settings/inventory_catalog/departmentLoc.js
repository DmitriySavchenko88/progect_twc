class DepartmentLoc {
    constructor() {
        this.SETTINGS_TAB = '//*[@datahover="settings"]';
        this.INVENTORY_CATALOG_SECTION = '//span[.="inventory / catalog"]';
        this.DEPARTMENT_CLASSIFICATIONS_SECTION =
            '(//li[@class = "rootNode"]//span[.="department classifications"])[1]';
        this.DEPARTMENTS_TAB = '//span[.="departments"]';
        this.NEW_BTN = '//button[.="new"]';
        this.CODE_FIELD = '//span[.="code:"]/../..//input';
        this.NAME_FIELD = '//span[.="name:"]/../..//input';
        this.SAVE_BTN_SELECTOR = "//button[.='save']";
        this.SEARCH_FIELD =
            '//div[@class="list settingsList"]//input[@placeholder ="search"]';
    }
}

module.exports = new DepartmentLoc();
