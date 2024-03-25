const Base = require('../../Base');
const transferLocationsLoc = require('../transfers/transferLocationLoc');

class TransferLocations extends Base {
    goToTransfersTab() {
        this.clickOnElementXpath(transferLocationsLoc.TRANSFERS_TAB);
    }

    goToTransferLocationsTab() {
        this.clickOnElementXpath(transferLocationsLoc.TRANSFER_LOCATIONS_TAB);
        this.wait(2000);
    }

    searchSourceLocation(location) {
        this.typeTextXpath(
            transferLocationsLoc.SEARCH_LOCATION_INPUT,
            location,
        ).wait(700);
        this.clickOnElementXpath(transferLocationsLoc.SPY_ICON_BTN);
        this.wait(700);
    }

    clickSelectAllLocationsBtn() {
        this.clickOnElementXpath(transferLocationsLoc.SELECT_ALL_LOCATION_BTN);
    }

    clickSaveLocationsBtn() {
        this.clickOnElementXpath(transferLocationsLoc.SAVE_LOCATIONS_BTN);
    }
}

module.exports = new TransferLocations();
