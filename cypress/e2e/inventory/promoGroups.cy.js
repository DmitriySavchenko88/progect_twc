import { faker } from '@faker-js/faker';
import { testDataGeneration as tData } from '../../support/credentials';

const promoGroups = require('../../../pageObj/inventory/promoGroups/promoGroups');
const promoType = ['item', 'style', 'DCSS'];

describe('Smoke testing of promo groups area', () => {
    describe('Check Promo Groups creation', () => {
        beforeEach(() => {
            promoGroups.goToInventoryTab();
            promoGroups.goToPromoGroupsTab();
            promoGroups.clickOnNewPromoGroupBtn();
        });
        promoType.forEach((promoType) => {
            it(`Create new promo group with type ${promoType}`, () => {
                const groupName = faker.string.nanoid();
                promoGroups.choosePromoGroupType(promoType);
                promoGroups.clickOnOkButton();
                promoGroups.typeGroupName(groupName);
                if (promoType === 'DCSS') {
                    promoGroups.selectDcssCode();
                } else cy.log('not needed');
                promoGroups.addItemToPromo(tData.productDescription);
                promoGroups.clickOnCloseBtn();
                promoGroups.checkPromoByGroupName(groupName);
            });
        });
        it('Remove new Promo', () => {
            const groupName = faker.string.nanoid();
            promoGroups.choosePromoGroupType('item');
            promoGroups.clickOnOkButton();
            promoGroups.typeGroupName(groupName);
            promoGroups.addItemToPromo(tData.productDescription);
            promoGroups.clickOnCloseBtn();
            promoGroups.removeNewPromoGroup(groupName);
        });
    });
});
