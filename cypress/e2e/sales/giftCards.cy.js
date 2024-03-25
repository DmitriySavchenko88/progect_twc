import { faker } from '@faker-js/faker';
import { testDataGeneration as tData } from '../../support/credentials';

const giftCards = require('../../../pageObj/sales/giftCards/giftCards');
const giftCardNumber1 = faker.string.nanoid(15);
const giftCardNumber2 = faker.string.nanoid(15);

describe('Smoke testing of gift cards area', () => {
    describe('Check gift card creation', () => {
        beforeEach(() => {
            giftCards.goToSalesTab();
            giftCards.goToGiftCardsTab();
            giftCards.clickOnNewButton();
        });
        it('Create new gift card', () => {
            giftCards.enterGiftCardNumber(giftCardNumber1);
            giftCards.enterFiscalZone(tData.fiscalZone);
            giftCards.enterAmount(100);
            giftCards.clickOnSaveButton();
            giftCards.checkGiftCardByNum(giftCardNumber1);
        });

        it('Check canceling creation new gift card', () => {
            giftCards.enterGiftCardNumber(giftCardNumber2);
            giftCards.enterFiscalZone(tData.fiscalZone);
            giftCards.enterAmount(100);
            giftCards.clickOnCancelButton();
            giftCards.checkGiftCardIsNotCreated(giftCardNumber2);
        });
    });
});
