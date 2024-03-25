import { faker } from '@faker-js/faker';

const customers = require('../../../pageObj/sales/customers/customers');
const randomName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const genders = ['Female', 'Male', 'Unknown'];

describe('Smoke testing of customers area', () => {
    describe('Check customers creation', () => {
        beforeEach(() => {
            customers.goToSalesTab();
            customers.goToCustomersTab();
            customers.clickOnNewButton();
            customers.wait(350);
        });
        genders.forEach((genders) => {
            it(`Create new customer with ${genders} gender`, () => {
                const memberCode = faker.finance.accountNumber(5);
                customers.typeFirstName(randomName);
                customers.typeLastName(randomLastName);
                customers.selectGenderFromDropDownList(genders);
                customers.gotoMemberShipTab();
                customers.enterMemberCodeToCustomer(memberCode);
                customers.clickOnSaveBtn();
                customers.typeFirstAndLastNameToTheFilter(
                    randomName,
                    randomLastName,
                );
                customers.checkCustomerByCode(memberCode);
            });
        });
        it('Cancel new customer creation', () => {
            const memberCode = faker.finance.accountNumber(5);
            customers.typeFirstName(randomName);
            customers.typeLastName(randomLastName);
            customers.gotoMemberShipTab();
            customers.enterMemberCodeToCustomer(memberCode);
            customers.clickOnCancelBtn();
            customers.typeFirstAndLastNameToTheFilter(
                randomName,
                randomLastName,
            );
            customers.checkCustomerByCode(memberCode); //should recheck after fixing
        });
    });
});
