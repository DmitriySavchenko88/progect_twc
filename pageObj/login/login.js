const Base = require('../Base');
const loginLoc = require('./loginLoc');
const url = require('../../cypress/support/Url');

class Login extends Base {
    loginToSystem(loginData) {
        const { server, userName, password } = loginData;
        url._createDynamicUrl(server);
        this.openPage(url.urlLogin);
        this.typeTextXpath(loginLoc.INPUT_USERNAME_FIELD, userName);
        this.typeTextXpath(loginLoc.INPUT_PASSWORD_FIELD, password);
        this.clickOnElementXpath(loginLoc.SUBMIT_LOG_IN_BTN);
        this.longWait5c();
        this.tryIfElementExist(
            '#errorsBlock',
            () => {},
            () => {
                this.getElemByXpath(loginLoc.INPUT_USERNAME_FIELD)
                    .clear()
                    .type('root'),
                    this.typeTextXpath(loginLoc.INPUT_PASSWORD_FIELD, 12345),
                    this.clickOnElementXpath(loginLoc.SUBMIT_LOG_IN_BTN);
            },
        );
    }

    loginToSystemKeepSession(
        userName = 'root',
        password = '12345',
        loginUrl = 'https://tw-dev05-eu-chq.teamworkinsight.com/#/Settings',
        pageUrl = 'https://tw-dev05-eu-chq.teamworkinsight.com/#/Settings',
    ) {
        cy.session('login', () => {
            this.openPage(loginUrl);
            this.typeTextXpath(loginLoc.INPUT_USERNAME_FIELD, userName, {
                log: false,
            });
            this.typeTextXpath(loginLoc.INPUT_PASSWORD_FIELD, password, {
                log: false,
            });
            this.clickOnElementXpath(loginLoc.SUBMIT_LOG_IN_BTN);
            this.longWait5c();
        });
        this.openPage(pageUrl);
    }

    logOut() {
        this.clickOnElementXpath(loginLoc.LOG_OUT_BTN);
    }
}

module.exports = new Login();
