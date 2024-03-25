class TransferLocationLoc {
    constructor() {
        this.TRANSFERS_TAB = '//button[.="transfers"]';
        this.TRANSFER_LOCATIONS_TAB = '//button[.="transfer locations"]';
        this.SEARCH_LOCATION_INPUT =
            '//div[@class="settingsHeader"]//input[@class="mark_search"]';
        this.SPY_ICON_BTN =
            '//*[@id="locationMatrix"]//span[@class="spyglass"]';
        this.SELECT_ALL_LOCATION_BTN =
            '//*[@id="locationMatrix"]//button[.="select all"]';
        this.SAVE_LOCATIONS_BTN = '//*[@id="locationMatrix"]//button[.="save"]';
    }
}

module.exports = new TransferLocationLoc();
