const Base = require('../../Base');
const giftCardsLoc = require('./giftCardsLoc');

class GiftCards extends Base {
    goToSalesTab() {
        this.waitSec();
        this.clickOnElementXpath(giftCardsLoc.SALES_TAB).click();
    }

    goToGiftCardsTab() {
        this.waitSec();
        this.clickOnElementXpath(giftCardsLoc.GIFT_CARDS_TAB);
    }

    clickOnNewButton() {
        this.waitSec();
        this.getElemByXpath(giftCardsLoc.NEW_BUTTON).click();
    }

    enterGiftCardNumber(giftCardNumber) {
        this.getElemByXpath(giftCardsLoc.GIFT_CARD_NUMBER_FIELD).type(
            giftCardNumber,
        );
    }

    enterFiscalZone(fiscalZone) {
        this.getElemByXpath(giftCardsLoc.FISCAL_ZONE_INPUT).type(fiscalZone);
    }

    enterAmount(amount) {
        this.getElemByXpath(giftCardsLoc.AMOUNT_INPUT).type(amount);
    }

    clickOnSaveButton() {
        this.getElemByXpath(giftCardsLoc.SAVE_BUTTON).click();
    }

    clickOnCancelButton() {
        this.getElemByXpath(giftCardsLoc.CANCEL_BUTTON).click();
        this.waitSec();
        this.getElemByXpath(giftCardsLoc.YES_POP_UP_BUTTON).click();
    }

    checkGiftCardByNum(giftCardNumber) {
        this.getElemByXpath(giftCardsLoc.INPUT_SEARCH_FIELD).type(
            `${giftCardNumber}{enter}`,
        );
        this.getElemByXpath(giftCardsLoc.GIFT_CARD_TITLE).should(
            'contain.text',
            giftCardNumber,
        );
    }

    checkGiftCardIsNotCreated(giftCardNumber) {
        this.getElemByXpath(giftCardsLoc.INPUT_SEARCH_FIELD).type(
            `${giftCardNumber}{enter}`,
        );
        this.getElemByXpath(giftCardsLoc.GIFT_CARD_TITLE).should('not.exist');
    }
}

module.exports = new GiftCards();
