const Base = require('../../Base');
const discountReasonLoc = require('./discountReasonLoc');

class DiscountReason extends Base {
    goToDiscountReasonsSettings() {
        this.clickOnElementXpath(discountReasonLoc.SALES_SECTION);
        this.clickOnElementXpath(discountReasonLoc.DISCOUNT_REASONS_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(discountReasonLoc.NEW_BTN);
    }

    fillCodeField(code) {
        this.typeTextXpath(discountReasonLoc.CODE_FIELD, code);
    }

    fillDefaultDiscountField(discount) {
        this.typeTextXpath(discountReasonLoc.DEFAULT_DISCOUNT_FIELD, discount);
    }

    fillUseDiscountAsField(value) {
        this.clickOnElementXpath(discountReasonLoc.USE_DISCOUNT_AS_FIELD).wait(
            500,
        );
        cy.xpath(discountReasonLoc.USE_DISCOUNT_AS_DROPDOWN).each(
            ($el, index, $list) => {
                if ($el.text() === value) {
                    $list.eq(index).click();
                    return false;
                } else {
                    cy.log('Element not found in the list');
                }
            },
        );
    }

    clickSaveBtn() {
        this.clickOnElementXpath(discountReasonLoc.SAVE_BTN);
    }

    checkThatRecordExist(code) {
        this.typeTextAndPressEnter(discountReasonLoc.SEARCH_FIELD, code);
        this.waitSec();
        this.getElemByXpath(discountReasonLoc.GRID_FIRST_CELL)
            .invoke('attr', 'title')
            .then((attrTitle) => {
                expect(attrTitle.toLowerCase()).to.equal(code.toLowerCase());
            });
    }
}

module.exports = new DiscountReason();
