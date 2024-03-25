import { testDataGeneration as tData } from '../../support/credentials';
import { randomNumber } from '../../support/randomData';

const orderManagement = require('../../../pageObj/sales/orderManagement/orderManagement');
const orderManagementLoc = require('../../../pageObj/sales/orderManagement/orderManagementLoc');
const shipMemos = require('../../../pageObj/sales/shipMemos/shipMemos');
const salesReceipts = require('../../../pageObj/sales/salesReceipts/salesReceipts');
const salesReceiptsLoc = require('../../../pageObj/sales/salesReceipts/salesReceipsLoc');

const paymentType = [tData.termsPM, tData.giftCardPM]; //'Adyen API' could be implemented later
const deliveryMethodAndStatus = [
    {
        method: 'ship to customer',
        status: 'prepare shipment',
    },
    {
        method: 'ship to store',
        status: 'transfer/prepare',
    },
    {
        method: 'store pick up',
        status: 'prepare pick up',
    },
    {
        method: 'same day delivery',
        status: 'prepare pick up',
    },
];

describe('Smoke testing of order management area', () => {
    beforeEach(() => {
        orderManagement.goToSalesTab();
        orderManagement.clickNewSoBtn();
        orderManagement.selectLocation(tData.location1);
        orderManagement.searchToAddCustomer(tData.customerFirstName);
        orderManagement.setCustPostalAddress();
        orderManagement.goToItemsTab();
        orderManagement.addItemsByOptions(
            'all info',
            tData.productDescription2,
        );
        orderManagement.goToOrderTab();
        orderManagement.clickTaxExemptTru();
    });

    it(`Create SO and check sales receipts`, () => {
        orderManagement.goToItemsTab();
        orderManagement.setDeliveryMethod('ship to customer');
        orderManagement.goToPaymentsTab();
        orderManagement.addPayment(tData.termsPM, 1);
        orderManagement.clickPlaceSalesOrder();
        orderManagement.clickYesPlaceSalesOrder();
        orderManagement.atsShortConfirm(); //?
        orderManagement.getSalesOrderNum().then((num) => {
            const soNum = num.replace(/\D/g, '');
            cy.log(soNum);
            orderManagement.clickOkSoHasBeenPlaced();
            orderManagement.searchSorder(soNum);
            const expectedStatus = 'accepted';
            orderManagementLoc._createComplexSelector(soNum);
            orderManagement
                .waitForStatus(
                    expectedStatus,
                    orderManagementLoc.STATUS_OF_SO_ORDER,
                )
                .then((elapsedTime) => {
                    cy.log(
                        `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                    );
                    orderManagement.checkOrderStatus(expectedStatus);
                    orderManagement.createSM('ship to customer', '');
                    orderManagement
                        .waitForStatus(
                            'delivery pending',
                            orderManagementLoc.STATUS_OF_SO_ORDER,
                        )
                        .then((elapsedTime) => {
                            cy.log(
                                `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                            );
                        });
                    orderManagement.clickOnChqHome();
                    orderManagement.openSalesOrder(soNum);
                    orderManagement.goToShipmentsTab();
                    orderManagement.getShipMemoNum().then((smNum) => {
                        cy.log(smNum);
                        orderManagement.clickSaveBtnOnSalesOrder();
                        shipMemos.goToShipMemosTab();
                        // shipMemos.chooseLocation(tData.location1)
                        shipMemos.searchSmBySoNumCheckStatus(
                            soNum,
                            smNum,
                            'prepare shipment',
                        );
                        shipMemos.shipSm();
                        shipMemos.setShippingMethodAndTrackingNum(
                            tData.shippingMethod,
                            randomNumber,
                        );
                        shipMemos.shipConfirm();
                        orderManagement.clickOnChqHome();
                        orderManagement.goToOrderManagementTab();
                        orderManagement.searchSorder(soNum);
                        orderManagement
                            .waitForStatus(
                                'completed',
                                orderManagementLoc.STATUS_OF_SO_ORDER,
                                700000,
                            )
                            .then(() => {
                                orderManagement.clickOnChqHome();
                                salesReceipts.goToSalesReceiptsTab();
                                salesReceiptsLoc._createComplexSelector(0);
                                salesReceipts.findReceiptBySalesOrderNum(soNum);
                                salesReceipts.checkSalesReceiptTransTypeLocation(
                                    'deposit',
                                    tData.location1,
                                );
                                salesReceiptsLoc._createComplexSelector(1);
                                salesReceipts.checkSalesReceiptTransTypeLocation(
                                    'sale',
                                    tData.location1,
                                );
                            });
                    });
                });
        });
    });

    it('Check hold Sale Order', () => {
        orderManagement.clickHoldSo();
        orderManagement.getSalesOrderNum().then((num) => {
            const soNum = num.replace(/\D/g, '');
            cy.log(soNum);
            orderManagement.searchSorder(soNum);
            const expectedStatus = 'held';
            orderManagementLoc._createComplexSelector(soNum);
            orderManagement
                .waitForStatus(
                    expectedStatus,
                    orderManagementLoc.STATUS_OF_SO_ORDER,
                )
                .then((elapsedTime) => {
                    cy.log(
                        `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                    );
                });
            orderManagement.checkOrderStatus(expectedStatus);
        });
    });

    paymentType.forEach((paymentType) => {
        it(`Check place Sale Order pay with ${paymentType}`, () => {
            orderManagement.goToPaymentsTab();
            orderManagement.addPayment(
                paymentType,
                1,
                tData.giftCardNum,
                '',
                '',
                '',
                '',
                '',
            );
            orderManagement.clickPlaceSalesOrder();
            orderManagement.clickYesPlaceSalesOrder();
            orderManagement.atsShortConfirm(); //?
            orderManagement.getSalesOrderNum().then((num) => {
                const soNum = num.replace(/\D/g, '');
                cy.log(soNum);

                orderManagement.clickOkSoHasBeenPlaced();
                orderManagement.searchSorder(soNum);
                const expectedStatus = 'accepted';
                orderManagementLoc._createComplexSelector(soNum);
                orderManagement
                    .waitForStatus(
                        expectedStatus,
                        orderManagementLoc.STATUS_OF_SO_ORDER,
                    )
                    .then((elapsedTime) => {
                        cy.log(
                            `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                        );
                    });
                orderManagement.checkOrderStatus(expectedStatus);
            });
        });
    });

    it(`Check place Sale Order pay with multiple payments`, () => {
        orderManagement.goToPaymentsTab();
        orderManagement.addMultiplyPayments(
            paymentType[0],
            paymentType[1],
            1,
            1,
            tData.giftCardNum,
        );
        orderManagement.clickPlaceSalesOrder();
        orderManagement.clickYesPlaceSalesOrder();
        orderManagement.atsShortConfirm(); //?
        orderManagement.getSalesOrderNum().then((num) => {
            const soNum = num.replace(/\D/g, '');
            cy.log(soNum);
            orderManagement.clickOkSoHasBeenPlaced();
            orderManagement.searchSorder(soNum);
            const expectedStatus = 'accepted';
            orderManagementLoc._createComplexSelector(soNum);
            orderManagement
                .waitForStatus(
                    expectedStatus,
                    orderManagementLoc.STATUS_OF_SO_ORDER,
                )
                .then((elapsedTime) => {
                    cy.log(
                        `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                    );
                });
            orderManagement.checkOrderStatus(expectedStatus);
        });
    });

    it('Check suspending accepted SO', () => {
        orderManagement.goToPaymentsTab();
        orderManagement.addPayment(tData.termsPM, 1);
        orderManagement.clickPlaceSalesOrder();
        orderManagement.clickYesPlaceSalesOrder();
        orderManagement.atsShortConfirm(); //?
        orderManagement.getSalesOrderNum().then((num) => {
            const soNum = num.replace(/\D/g, '');
            cy.log(soNum);
            orderManagement.clickOkSoHasBeenPlaced();
            orderManagement.searchSorder(soNum);
            const expectedStatus = 'accepted';
            orderManagementLoc._createComplexSelector(soNum);
            orderManagement
                .waitForStatus(
                    expectedStatus,
                    orderManagementLoc.STATUS_OF_SO_ORDER,
                )
                .then((elapsedTime) => {
                    cy.log(
                        `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                    );
                    orderManagement.checkOrderStatus(expectedStatus);
                    orderManagement.suspendSo();
                    orderManagement
                        .waitForStatus(
                            'suspended',
                            orderManagementLoc.STATUS_OF_SO_ORDER,
                        )

                        .then((elapsedTime) => {
                            cy.log(
                                `Time taken for the status to become canceled: ${elapsedTime.elapsedTime} ms`,
                            );
                        });
                });
        });
    });

    it('Check canceling accepted SO', () => {
        orderManagement.goToPaymentsTab();
        orderManagement.addPayment(tData.termsPM, 1);
        orderManagement.clickPlaceSalesOrder();
        orderManagement.clickYesPlaceSalesOrder();
        orderManagement.atsShortConfirm(); //?
        orderManagement.getSalesOrderNum().then((num) => {
            const soNum = num.replace(/\D/g, '');
            cy.log(soNum);
            orderManagement.clickOkSoHasBeenPlaced();
            orderManagement.searchSorder(soNum);
            const expectedStatus = 'accepted';
            orderManagementLoc._createComplexSelector(soNum);
            orderManagement
                .waitForStatus(
                    expectedStatus,
                    orderManagementLoc.STATUS_OF_SO_ORDER,
                )
                .then((elapsedTime) => {
                    cy.log(
                        `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                    );
                    orderManagement.checkOrderStatus(expectedStatus);
                    orderManagement.cancelSo();
                });
        });
    });

    it('Check creating SO with drop ship from vendor, check PO', () => {
        orderManagement.goToPaymentsTab();
        orderManagement.addPayment(tData.termsPM, 1);
        orderManagement.clickPlaceSalesOrder();
        orderManagement.clickYesPlaceSalesOrder();
        orderManagement.atsShortConfirm(); //?
        orderManagement.getSalesOrderNum().then((num) => {
            const soNum = num.replace(/\D/g, '');
            cy.log(soNum);
            orderManagement.clickOkSoHasBeenPlaced();
            orderManagement.searchSorder(soNum);
            const expectedStatus = 'accepted';
            orderManagementLoc._createComplexSelector(soNum);
            orderManagement
                .waitForStatus(
                    expectedStatus,
                    orderManagementLoc.STATUS_OF_SO_ORDER,
                )
                .then((elapsedTime) => {
                    cy.log(
                        `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                    );
                    orderManagement.checkOrderStatus(expectedStatus);
                    orderManagement.dropShipFromVendor();
                    orderManagement
                        .waitForStatus(
                            'delivery pending',
                            orderManagementLoc.STATUS_OF_SO_ORDER,
                        )
                        .then((elapsedTime) => {
                            cy.log(
                                `Time taken for the status to become released: ${elapsedTime.elapsedTime} ms`,
                            );
                            orderManagement.viewPo();
                            orderManagement.checkPoStatus('released');
                        });
                });
        });
    });

    deliveryMethodAndStatus.forEach((deliveryMethodAndStatus) => {
        it(`Check creating SO with Delivery method ${deliveryMethodAndStatus.method} - create and check SM with status ${deliveryMethodAndStatus.status}`, () => {
            orderManagement.goToItemsTab();
            orderManagement.setDeliveryMethod(deliveryMethodAndStatus.method);
            orderManagement.goToPaymentsTab();
            orderManagement.addPayment(tData.termsPM, 1);
            orderManagement.clickPlaceSalesOrder();
            orderManagement.clickYesPlaceSalesOrder();
            orderManagement.atsShortConfirm(); //?
            orderManagement.getSalesOrderNum().then((num) => {
                const soNum = num.replace(/\D/g, '');
                cy.log(soNum);
                orderManagement.clickOkSoHasBeenPlaced();
                orderManagement.searchSorder(soNum);
                const expectedStatus = 'accepted';
                orderManagementLoc._createComplexSelector(soNum);
                orderManagement
                    .waitForStatus(
                        expectedStatus,
                        orderManagementLoc.STATUS_OF_SO_ORDER,
                    )
                    .then((elapsedTime) => {
                        cy.log(
                            `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                        );
                        orderManagement.checkOrderStatus(expectedStatus);
                        orderManagement.createSM(
                            deliveryMethodAndStatus.method,
                            tData.location2,
                        );
                        orderManagement
                            .waitForStatus(
                                'delivery pending',
                                orderManagementLoc.STATUS_OF_SO_ORDER,
                            )
                            .then((elapsedTime) => {
                                cy.log(
                                    `Time taken for the status to become ${expectedStatus}: ${elapsedTime.elapsedTime} ms`,
                                );
                            });
                        orderManagement.clickOnChqHome();
                        orderManagement.openSalesOrder(soNum);
                        orderManagement.goToShipmentsTab();
                        orderManagement.getShipMemoNum().then((smNum) => {
                            cy.log(smNum);
                            orderManagement.clickSaveBtnOnSalesOrder();
                            shipMemos.goToShipMemosTab();
                            shipMemos.chooseLocation(tData.location1);
                            shipMemos.searchSmBySoNumCheckStatus(
                                soNum,
                                smNum,
                                deliveryMethodAndStatus.status,
                            );
                        });
                    });
            });
        });
    });

    it('Check creating SO with line discount and fee', () => {
        orderManagement.goToItemsTab();
        orderManagement.clickEditItemDetails();
        orderManagement.goToLineDiscountTab();
        orderManagement.chooseLineDiscount(tData.discountCode);
        orderManagement.goToLineFeesTab();
        orderManagement.addNewLineFee(tData.feeCode);
        orderManagement.saveEditItem();
    });

    it('Check creating SO with global discount and fee', () => {
        orderManagement.goToItemsTab();
        orderManagement.goToGlobalDiscountTab();
        orderManagement.addGlobalDiscount(tData.discountCode);
        orderManagement.goToGlobalFeesTab();
        orderManagement.addGlobalFee(tData.feeCode);
    });

    ///
});
