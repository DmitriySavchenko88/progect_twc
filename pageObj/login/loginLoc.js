class LoginLocators {
    constructor() {
        this.INPUT_USERNAME_FIELD = "//input[@name='Username']";
        this.INPUT_PASSWORD_FIELD = "//input[@name='Password']";
        this.SUBMIT_LOG_IN_BTN = "//button[@id='LoginButton']";
        this.LOG_OUT_BTN = '//button[.="logOut"]';
    }
}

module.exports = new LoginLocators();
