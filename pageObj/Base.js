import 'cypress-real-events/support';

require('cypress-xpath');
require('@4tw/cypress-drag-drop');

class Base {
    constructor() {
        this.CURRENT_VALUES = {};
    }

    waitForElement(xpath) {
        return cy.xpath(xpath).should('exist', { timeout: 15000 });
    }

    openPage(url) {
        cy.visit(url);
    }

    getElemByXpath(xpathSelector) {
        return cy.xpath(xpathSelector);
    }

    getElemByCss(cssSelector) {
        return cy.get(cssSelector);
    }

    getTextToVariable(xpath) {
        return cy.xpath(xpath).invoke('text');
    }

    getValueToVariable(xpath) {
        return cy.xpath(xpath).invoke('val');
    }

    checkTextEqualContains(expectedTxt) {
        cy.contains(expectedTxt)
            .should('exist')
            .should('be.visible')
            .invoke('text')
            .then((actualTxt) => {
                expect(actualTxt).to.eq(expectedTxt);
            });
    }

    checkTextEqualXpath(xpath, expected) {
        this.getElemByXpath(xpath)
            .invoke('text')
            .then((actualTxt) => {
                expect(actualTxt.trim()).to.eq(expected);
            });
    }

    typeTextXpath(xpath, text) {
        return cy.xpath(xpath).type(text);
    }

    typeTextAndPressEnter(xpath, text) {
        return cy.xpath(xpath).type(text).type('{enter}');
    }

    clickOnElementXpath(xpath) {
        this.waitForElement(xpath);
        return this.getElemByXpath(xpath).click();
    }

    typeTextAndChooseFromDropdownXpath(
        xpath,
        optionToChoose,
        xpathForListOfTheOptions,
    ) {
        this.typeTextXpath(xpath, optionToChoose).wait(750);
        cy.xpath(xpathForListOfTheOptions).each(($el, index, $list) => {
            if ($el.text() === optionToChoose) {
                cy.wrap($el).click();
                return false;
            } else {
                cy.log('Element not found in the list');
            }
        });
    }

    typeTextAndChoosePartialMatchXpath(
        xpath,
        optionToChoose,
        xpathForListOfTheOptions,
    ) {
        this.typeTextXpath(xpath, optionToChoose).wait(500);
        cy.xpath(xpathForListOfTheOptions).each(($el, index, $list) => {
            if ($el.text().includes(optionToChoose)) {
                cy.wrap($el).click();
                return false;
            } else {
                cy.log('Element not found in the list');
            }
        });
    }

    clickAndChooseFromDropdownXpath(
        xpath,
        optionToChoose,
        xpathForListOfTheOptions,
    ) {
        this.clickOnElementXpath(xpath).wait(500);
        cy.xpath(xpathForListOfTheOptions).each(($el, index, $list) => {
            if ($el.text() === optionToChoose) {
                cy.wrap($el).click();
                return false;
            } else {
                cy.log('Element not found in the list');
            }
        });
    }

    longWait3c() {
        return cy.wait(3000);
    }

    longWait5c() {
        return cy.wait(5000);
    }

    waitSec() {
        return cy.wait(1000);
    }

    wait(timeout = 1000) {
        return cy.wait(timeout);
    }

    clickOnDropdownChooseContains(xpath, contains) {
        this.getElemByXpath(xpath).click();
        return this.getElemByXpath('//ul/li/xmp/..')
            .contains(contains)
            .click({ force: true });
    }

    checkValue(xpath, expected) {
        this.getElemByXpath(xpath).should('have.value', expected);
    }

    checkTextNotEqualContains(expectedTxt) {
        cy.contains(expectedTxt).should('not.exist');
    }

    fillDateFieldIfEmpty(dateField, datePickerBtn, dateToPick) {
        const input = this.getElemByXpath(dateField);
        input.invoke('val').then((text) => {
            if (!text) {
                this.clickOnElementXpath(datePickerBtn);
                this.clickOnElementXpath(dateToPick);
            }
        });
    }

    getElement(xpath) {
        return cy.xpath(xpath);
    }

    waitForStatus(expectedStatus, xpath, timeout = 170000) {
        const startTime = new Date();
        const recursiveWait = () => {
            const currentTime = new Date();
            return this.getElement(xpath)
                .invoke('text')
                .then((currentStatus) => {
                    if (currentStatus === expectedStatus) {
                        // Status is released, calculate elapsed time and log it
                        const elapsedTime = currentTime - startTime;
                        // Return a Cypress command to ensure proper chaining
                        return cy.wrap({ currentStatus, elapsedTime });
                    }
                    if (currentTime - startTime > timeout) {
                        throw new Error('Getting status timed out');
                    }
                    if (currentTime - startTime === 50000) {
                        cy.log('Reload page');
                        cy.reload();
                    }
                    return cy.wait(2000).then(() => recursiveWait());
                });
        };
        return recursiveWait();
    }
    recursiveWait(expectedState, xpath, timeout = 170000) {
        const startTime = new Date();
        const recursiveWait = () => {
            const currentTime = new Date();
            return this.getElement(xpath)
                .invoke('text')
                .then((currentState) => {
                    if (currentState === expectedState) {
                        // Status is released, calculate elapsed time and log it
                        const elapsedTime = currentTime - startTime;
                        // Return a Cypress command to ensure proper chaining
                        return cy.wrap({ currentState, elapsedTime });
                    }
                    if (currentTime - startTime > timeout) {
                        throw new Error('Getting status timed out');
                    }
                    if (currentTime - startTime === 50000) {
                        cy.log('Reload page');
                        cy.reload();
                    }
                    return cy.wait(2000).then(() => recursiveWait());
                });
        };
        return recursiveWait();
    }

    checkTextContains(expectedTxt) {
        cy.contains(expectedTxt)
            .should('exist')
            .invoke('text')
            .then((actualTxt) => {
                expect(actualTxt).to.eq(expectedTxt);
            });
    }

    clickOnXpathElemMultiplyTimes(times, xpath, delayBetweenClicks = 500) {
        Cypress._.times(times, (index) => {
            this.clickOnElementXpath(xpath);
            if (index < times - 1) {
                // Wait for the specified delay between clicks
                cy.wait(delayBetweenClicks);
            }
        });
    }

    tryIfElementExist(cssSelector, noEl, existEl) {
        const selector = cssSelector;
        cy.then(() => {
            if (Cypress.$(selector).length <= 0) {
                cy.log('No element');
                noEl();
            } else {
                cy.log('Element exists');
                existEl();
            }
        });
    }

    checkCheckboxXpath(xpath) {
        return cy.xpath(xpath).check();
    }

    dragAndDropField(sourceEntityCss, targetEntityCss) {
        cy.get(sourceEntityCss)
            .drag(targetEntityCss, { force: true })
            .then((success) => {
                assert.isTrue(success);
            });
    }
}

module.exports = Base;
