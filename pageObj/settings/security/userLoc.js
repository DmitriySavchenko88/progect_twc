class SecurityLoc {
    constructor() {
        this.SECURITY_TAB = '//button[.="security"]';
        this.USERS_TAB = '//button/span[.="users"]';
        this.NEW_BTN = '//button[.="new"]';
        this.FIRST_NAME_INPUT = '//input[@data-bind="value: FirstName"]';
        this.LAST_NAME_INPUT = '//input[@data-bind="value: LastName"]';
        this.LOGIN_INPUT = '//input[@data-bind="value: LoginName"]';
        this.PASSWORD_INPUT =
            '//input[@type="password" and @placeholder="enter new password"]';
        this.PASSWORD_CONFIRM_INPUT =
            '//input[@type="password" and @placeholder="confirm new password"]';
        this.LOCATIONS_TAB = '//button[@id="locations"]';
        this.SEARCH_INPUT_LOCATION =
            '//div[@id="locations-form"]//label[.="search"]/../input';
        this.SEARCH_INPUT_ROLE =
            '//div[@id="roles-form"]//label[.="search"]/../input';
        this.ROLE_TAB = '//button[@id="roles"]';
        this.SPY_ICON = '//div[@id="roles-form"]//span[@class="spyglass"]/..';
        this.SAVE_USER_BTN = '//*[@id="userEdit"]//span[.="save"]';
        this.LOCATIONS_TABLE = '//table[@id="locationsGrid"]';
        this.ROLES_TABLE = '//table[@id="rolesGrid"]';
        this.SEARCH_FIELD =
            '//div[@class="list settingsList usersList"]//input[@placeholder ="search"]';
    }
}

module.exports = new SecurityLoc();
