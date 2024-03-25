class CustomersLoc {
    constructor() {
        this.SALES_TAB = "//button[.='sales']";
        this.NEW_BUTTON = "//button[.='new']";
        this.CUSTOMERS_TAB =
            "//button[.='                 customers             ']";
        this.FIRST_NAME_FIELD = "//input[@data-bind='value: FirstName']";
        this.LAST_NAME_FIELD = "//input[@data-bind='value: LastName']";
        this.SAVE_BTN = "//button[.='save']";
        this.CANCEL_BTN =
            "//button[contains(@data-bind,'customerEditPopup.Cancel')]";
        this.NAME_FIELD_IN_FILTER =
            "//input[contains(@data-bind, 'FirstName')]";
        this.LAST_NAME_FIELD_IN_FILTER =
            "//input[contains(@data-bind, 'LastName')]";
        this.MAGNIFY_ICON_FILTERS = '//li[@class="find"]/span[@class="spy"]';
        this.MEMBERSHIP_TAB = "//button[@id = 'membership']";
        this.MEMBER_CODE_INPUT_FIELD =
            "//input[@data-bind='value: MembershipCode']";
        this.SEARCH_FIELD_MEMBER_CODE =
            "//input[contains(@data-bind, 'MembershipCode')]";
        this.GENDERS_INPUT = "//input[@title='Unknown']";
        this.PRIMARY_EMAIL_FIELD = "//span[.='primary email:']/../..//input";
        this.SHIP_TO_TAB = "//button[@id = 'shipToAddresses']";
        this.NEW_SHIP_ADDRESS_BTN =
            "//div[@id = 'shipToAddresses-form']//button[.='new']";
        this.ADDRESS_NAME_FIELD = "//span[.='address name:']/../..//input";
        this.DROPDOWN =
            "//ul[contains(@class, 'ui-autocomplete')][contains(@style, 'display: block')]";
        this.COUNTRY_FIELD =
            "//div[@id='editShipToAddressPopup']//span[.='country:']/../..//input";
        this.POSTAL_CODE_FIELD =
            "//div[@id='editShipToAddressPopup']//span[.='postal code:']/../..//input";
        this.ADDRESS1_FIELD =
            "//div[@id='editShipToAddressPopup']//span[.='address 1:']/../..//input";
        this.DEFAULT_CHECKBOX =
            "//div[@id='editShipToAddressPopup']//span[.='default:']/../..//input";
        this.SHIP_ADDRESS_SAVE_BTN =
            "//div[@id='editShipToAddressPopup']//button[.='save']";
    }
}

module.exports = new CustomersLoc();
