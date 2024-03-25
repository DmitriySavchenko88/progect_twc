const { defineConfig } = require('cypress');
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'REPORT',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        videoOnFailOnly: false,
    },

    e2e: {
        setupNodeEvents(on, config) {
            // allureWriter(on, config);
            on('task', { removeDirectory });
            require('cypress-mochawesome-reporter/plugin')(on);
            return config;
        },
        retries: 0,
        video: false,
        chromeWebSecurity: false,
        watchForFileChanges: false,
        history: true,
        requestTimeout: 20000,
        defaultCommandTimeout: 9000,
    },
});
