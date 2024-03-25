import { testDataGeneration as tData } from '../support/credentials';
import { randomNumber } from '../support/randomData';
import giftCards from '../../pageObj/sales/giftCards/giftCards';

const taxCategory = require('../../pageObj/settings/company_settings/taxCategory');
const department = require('../../pageObj/settings/inventory_catalog/department');
const departmentClassification = require('../../pageObj/settings/inventory_catalog/departmentClassification');
const vendor = require('../../pageObj/purchaising/vendors/vendors');
const attribute = require('../../pageObj/settings/inventory_catalog/attribute');
const taxArea = require('../../pageObj/settings/company_settings/taxArea');
const location = require('../../pageObj/settings/location_settings/location');
const catalog = require('../../pageObj/inventory/catalog/catalog');
const fiscalZone = require('../../pageObj/settings/company_settings/fiscalZone');
const paymentMethod = require('../../pageObj/settings/sales_settings/paymentMethod');
const catalogDesigner = require('../../pageObj/settings/inventory_catalog/catalogDesigner');
const fee = require('../../pageObj/settings/sales_settings/fee');
const discountReason = require('../../pageObj/settings/sales_settings/discountReason');
const customer = require('../../pageObj/sales/customers/customers');
const transferLocations = require('../../pageObj/settings/transfers/transferLocations');
const user = require('../../pageObj/settings/security/user');

describe('Create test data if server is clean installed', () => {
    it('Create tax category', () => {
        taxCategory.goToTaxCategoriesSettings();
        taxCategory.clickNewBtn();
        taxCategory.fillCodeField(tData.taxCategory);
        taxCategory.clickSave();
        taxCategory.checkThatRecordExist(tData.taxCategory);
    });

    it('Create department', () => {
        department.goToDepartmentsSettings();
        department.clickNewBtn();
        department.fillCodeField(tData.deptCode);
        department.fillNameField(tData.deptName);
        department.clickSave();
        department.checkThatRecordExist(tData.deptCode);
    });

    it('Create department classification', () => {
        departmentClassification.goToDepartmentClassificationSettings();
        departmentClassification.clickNewBtn();
        departmentClassification.fillDepartmentField(tData.deptName);
        departmentClassification.fillFullDeptCodeField(tData.fullDeptCode);
        departmentClassification.clickSave();
        departmentClassification.checkThatRecordExist(tData.fullDeptCode);
    });

    it('Create vendor', () => {
        vendor.goToPurchasingTab();
        vendor.createNewVendor(tData.vendor);
        vendor.clickSave();
        vendor.checkVendorByNameExistVisible(tData.vendor);
    });

    const attributes = [
        {
            attr: tData.attribute1,
            position: 'attribute 1',
        },
        {
            attr: tData.attribute2,
            position: 'attribute 2',
        },
    ];

    attributes.forEach((attrAndPosition) => {
        it(`Create attribute: ${attrAndPosition.position}`, () => {
            attribute.goToAttributesSettings();
            attribute.clickNewBtn();
            attribute.fillCodeField(attrAndPosition.attr);
            attribute.selectAttributePosition(attrAndPosition.position);
            attribute.goToValuesTab();
            attribute.createNewAttributeValue(tData.attribute1Value1);
            attribute.createNewAttributeValue(tData.attribute1Value2);
            attribute.clickSave();
            attribute.checkThatRecordExist(attrAndPosition.attr);
        });
    });

    it('Create tax area', () => {
        taxArea.goToTaxAreasSettings();
        taxArea.clickNewBtn();
        taxArea.fillCodeField(tData.taxArea);
        taxArea.fillCountryField(tData.country);
        taxArea.fillTypeField('sales tax');
        taxArea.clickSave();
        taxArea.checkThatRecordExist(tData.taxArea);
    });

    const locations = [tData.location1, tData.location2];

    locations.forEach((loc) => {
        it(`Create location: ${loc}`, () => {
            location.goToLocationSettings();
            location.clickNewBtn();
            location.createBrandNewLocation();
            location.fillCodeField(loc);
            location.checkOpenCheckbox();
            location.checkAvailableForSDDCheckbox();
            location.fillRegionalPriceLevelField(tData.priceLevel);
            location.fillLocationPriceLevelField(tData.priceLevel);
            location.fillTaxAreaField(tData.taxArea);
            location.fillBaseCurrencyField(tData.currency);
            location.fillCountryField(tData.country);
            location.fillPostalCodeField(tData.postalCode);
            location.fillAddress1Field(tData.address1);
            location.goToLocationSalesTab();
            location.checkLocationForNewOrderCheckbox();
            location.clickCreateLocationBtn();
            location.checkThatRecordExist(loc);
        });
    });
    const loc = [tData.location1, tData.location2];
    loc.forEach((trans) => {
        it(`Set location1 and location2 as a source/target location ${trans}`, () => {
            transferLocations.goToTransfersTab();
            transferLocations.goToTransferLocationsTab();
            transferLocations.searchSourceLocation(trans);
            transferLocations.clickSelectAllLocationsBtn();
            transferLocations.clickSaveLocationsBtn();
        });
    });

    it('Adding service item classification to general service item in catalog designer', () => {
        catalogDesigner.goToInventoryCatalogArea();
        catalogDesigner.goToCatalogDesigner();
        catalogDesigner.dragAndDropServiceItemClassificationField();
        catalogDesigner.clickOnSaveButton();
    });

    it('Adding drop ship from vendor to single item in catalog designer', () => {
        catalogDesigner.goToInventoryCatalogArea();
        catalogDesigner.goToCatalogDesigner();
        catalogDesigner.dragAndDropDropShipFromVendorField();
        catalogDesigner.clickOnSaveButton();
    });

    const productDesc = [tData.productDescription, tData.productDescription2];
    productDesc.forEach((product) => {
        it(`Create single item ${product}`, () => {
            catalog.goToCatalog();
            catalog.clickNewItemBtn();
            catalog.chooseProductType('single item');
            catalog.typeAndChooseFullDeptName(tData.fullDeptCode);
            catalog.chooseTaxCategory(tData.taxCategory);
            catalog.typeProductDescription(product);
            catalog.fillDropShipFromVendorField('ok');
            catalog.getProductCode().then((val) => {
                catalog.goToPricingTab();
                catalog.setSellPrice(randomNumber);
                catalog.setBasePrice(randomNumber);
                catalog.goToVendorsTab();
                catalog.addAndTypePrimaryVendor(tData.vendor);
                catalog.clickSave();
                catalog.checkItemByProductCode(val);
            });
        });
    });

    it('Create fiscal zone', () => {
        fiscalZone.goToFiscalZoneSettings();
        fiscalZone.clickNewBtn();
        fiscalZone.fillFiscalZoneNameField(tData.fiscalZone);
        fiscalZone.fillCurrencyField(tData.currency);
        fiscalZone.goToLocationsTab();
        fiscalZone.selectFiscalZoneLocation(tData.location1);
        fiscalZone.selectFiscalZoneLocation(tData.location2);
        fiscalZone.goToGiftCardsTab();
        fiscalZone.checkEnableGiftCardsCheckbox();
        fiscalZone.clickSave();
        fiscalZone.checkThatRecordExist(tData.fiscalZone);
    });

    const paymentType = [
        {
            type: 'terms',
            code: tData.termsPM,
        },
        {
            type: 'gift card',
            code: tData.giftCardPM,
        },
    ];
    paymentType.forEach((payType) => {
        it(`Create ${payType.type} payment method`, () => {
            paymentMethod.goToPaymentMethodSettings();
            paymentMethod.clickNewBtn();
            paymentMethod.selectPaymentType(payType.type);
            paymentMethod.fillCodeField(payType.code);
            paymentMethod.clickSaveBtn();
            paymentMethod.checkThatRecordExist(payType.code);
        });
    });

    it('Create fee', () => {
        fee.goToFeesSettings();
        fee.clickNewBtn();
        fee.fillCodeField(tData.feeCode);
        fee.fillDefaultAmountField('20');
        fee.checkLineFeeCheckbox();
        fee.checkGlobalFeeCheckbox();
        fee.clickSaveBtn();
        fee.checkThatRecordExist(tData.feeCode);
    });

    it('Create discount', () => {
        discountReason.goToDiscountReasonsSettings();
        discountReason.clickNewBtn();
        discountReason.fillCodeField(tData.discountCode);
        discountReason.fillDefaultDiscountField('20');
        discountReason.fillUseDiscountAsField('line and global');
        discountReason.clickSaveBtn();
        discountReason.checkThatRecordExist(tData.discountCode);
    });

    it('Create customer with ship-to address', () => {
        customer.goToSalesTab();
        customer.goToCustomersTab();
        customer.clickOnNewButton();
        customer.typeFirstName(tData.customerFirstName);
        customer.typeLastName(tData.customerLastName);
        customer.fillPrimaryEmailField(tData.customerEmail);
        customer.createShipToAddress(
            'Home',
            tData.country,
            tData.postalCode,
            tData.postalCode,
        );
        customer.clickOnSaveBtn();
    });

    it('Create new gift card', () => {
        giftCards.goToSalesTab();
        giftCards.goToGiftCardsTab();
        giftCards.clickOnNewButton();
        giftCards.enterGiftCardNumber(tData.giftCardNum);
        giftCards.enterFiscalZone(tData.fiscalZone);
        giftCards.enterAmount(17000);
        giftCards.clickOnSaveButton();
        giftCards.checkGiftCardByNum(tData.giftCardNum);
    });

    it('Create new user', () => {
        user.goToSecurityTab();
        user.goUsersTab();
        user.clickNewBtn();
        user.setCredentials(
            tData.userName,
            tData.userSecondName,
            tData.userLogin,
            tData.userPassword,
        );
        user.goToLocationsTab();
        user.findLocationSetTrueCheckBox(tData.location1);
        user.goToRolesTab();
        user.findRoleTrueCheckBox('Administrator role');
        user.saveUser();
        user.checkThatRecordExist(tData.userLogin);
    });
});
