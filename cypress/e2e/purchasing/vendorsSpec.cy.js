const purchasing = require('../../../pageObj/purchaising/vendors/vendors');
const { faker } = require('@faker-js/faker');

describe('Smoke testing of venors area', () => {
    describe('Check creating customer/vendor', () => {
        beforeEach(() => {
            purchasing.goToPurchasingTab();
        });
        it('Check creating vendor', () => {
            const vendorName = faker.string.nanoid();
            purchasing.createNewVendor(vendorName);
            purchasing.clickSave();
            purchasing.checkVendorByNameExistVisible(vendorName);
        });
        it('Check cancel creating new vendor', () => {
            const vendorName2 = faker.string.nanoid();
            purchasing.createNewVendor(vendorName2);
            purchasing.clickCancelBtn();
            purchasing.checkNoVendor(vendorName2, '0');
        });
    });
});
