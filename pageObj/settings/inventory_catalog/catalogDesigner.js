const catalogDesignerLoc = require('/pageObj/settings/inventory_catalog/catalogDesignerLoc');
const Base = require('../../Base');

class CatalogDesigner extends Base {
    goToInventoryCatalogArea() {
        this.getElemByXpath(catalogDesignerLoc.INVENTORY_CATALOG_AREA).click();
    }

    goToCatalogDesigner() {
        this.getElemByXpath(catalogDesignerLoc.CATALOG_DESIGNER).click();
    }

    dragAndDropServiceItemClassificationField() {
        this.getElemByXpath(catalogDesignerLoc.GENERAL_SERVICE_ITEM).click();
        this.getElemByXpath(catalogDesignerLoc.DESIGN_BUTTON).click();
        this.getElemByXpath(catalogDesignerLoc.INPUT_SEARCH_DESIGNER)
            .type('service item classification')
            .type('{enter}');
        this.dragAndDropField(
            catalogDesignerLoc.SERVICE_ITEM_CLASSIFICATION_FIELD,
            catalogDesignerLoc.WALLET_TYPE_FIELD,
        );
    }

    dragAndDropDropShipFromVendorField() {
        this.getElemByXpath(catalogDesignerLoc.GENERAL_SINGLE_ITEM).click();
        this.getElemByXpath(catalogDesignerLoc.DESIGN_BUTTON).click();
        this.getElemByXpath(catalogDesignerLoc.INPUT_SEARCH_DESIGNER)
            .type('drop ship from vendor')
            .type('{enter}');
        this.dragAndDropField(
            catalogDesignerLoc.DROP_SHIP_FROM_VENDOR_FIELD,
            catalogDesignerLoc.PRODUCT_DESCRIPTION_FIELD,
        );
    }

    clickOnSaveButton() {
        this.getElemByXpath(catalogDesignerLoc.SAVE_BUTTON).click();
    }
}

module.exports = new CatalogDesigner();
