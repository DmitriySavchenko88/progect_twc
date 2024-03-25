// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// require('cypress-delete-downloads-folder').addCustomCommand();

// Custom command to wait for a condition to be true

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const login = require('../../pageObj/login/login');
import { testDataGeneration as tData } from './credentials';

beforeEach(
    'The next steps will be done before each test execution, ' +
        'log in to the system on UI, wait for pages are downloaded.',
    () => {
        cy.log('Current spec:', Cypress.spec.name);
        cy.viewport(1920, 1080);

        if (Cypress.spec.name === 'testDataGeneration.cy.js') {
            login.loginToSystemKeepSession(
                tData.rootUserLogin,
                tData.rootPassword,
                tData.settingsUrlQ04Pro,
                tData.settingsUrlQ04Pro,
            );
            // login.loginToSystemKeepSession() //leave it empty for dev05
        } else {
            login.loginToSystemKeepSession(
                tData.userLogin,
                tData.userPassword,
                tData.settingsUrlQ04Pro,
                tData.settingsUrlQ04Pro,
            );
            // login.loginToSystemKeepSession(tData.userLogin, tData.userPassword, tData.settingsUrlDev05Pro, tData.settingsUrlDev05Pro)
        }
    },
);
