class GiftCardsLoc {
    constructor() {
        this.SALES_TAB = "//button[.='sales']";
        this.GIFT_CARDS_TAB = "//button[contains(text(),'gift cards')]";
        this.NEW_BUTTON = "//button[contains(text(),'new')]";
        this.GIFT_CARD_NUMBER_FIELD =
            "//input[@data-bind='value: GiftCardNumber']";
        this.FISCAL_ZONE_INPUT =
            "//div[contains(@class,'svsZoneAutocomplete')]//input[contains(@data-bind,'isEnabled')]";
        this.AMOUNT_INPUT = "//input[contains(@data-bind,'balance')]";
        this.SAVE_BUTTON = "//*[contains(text(),'save')]";
        this.CANCEL_BUTTON =
            "//button[contains(@data-bind,'onCancelClick,visible')]";
        this.YES_POP_UP_BUTTON = "//*[contains(text(),'yes')]";
        this.GIFT_CARD_TITLE = "//span[contains(text(),'active')]";
        this.INPUT_SEARCH_FIELD =
            "//input[starts-with(@data-bind,'                            value:GiftCardNumber')]";
    }
}

module.exports = new GiftCardsLoc();
