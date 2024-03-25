const Base = require('../../Base');
const attributeLoc = require('./attributeLoc');

class Attribute extends Base {
    goToAttributesSettings() {
        this.clickOnElementXpath(attributeLoc.INVENTORY_CATALOG_SECTION);
        this.clickOnElementXpath(attributeLoc.ATTRIBUTES_TAB);
    }

    clickNewBtn() {
        this.clickOnElementXpath(attributeLoc.NEW_ATTRIBUTE_BTN);
    }

    fillCodeField(attributeCode) {
        this.typeTextXpath(attributeLoc.CODE_FIELD, attributeCode);
    }

    goToValuesTab() {
        this.clickOnElementXpath(attributeLoc.VALUES_TAB);
    }

    createNewAttributeValue(valueName) {
        this.clickOnElementXpath(attributeLoc.NEW_VALUE_BTN);
        this.typeTextXpath(attributeLoc.VALUE_FIELD, valueName);
        this.clickOnElementXpath(attributeLoc.SAVE_VALUE_BTN);
    }

    selectAttributePosition(position) {
        this.clickOnElementXpath(attributeLoc.POSITION_FIELD, position);
        this.getElemByXpath(attributeLoc.DROPDOWN).contains(position).click();
    }

    clickSave() {
        this.clickOnElementXpath(attributeLoc.SAVE_BTN_SELECTOR).wait(150);
    }

    checkThatRecordExist(attributeCode) {
        this.typeTextAndPressEnter(attributeLoc.SEARCH_FIELD, attributeCode);
        this.checkTextEqualContains(attributeCode);
    }
}

module.exports = new Attribute();
