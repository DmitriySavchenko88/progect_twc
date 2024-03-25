class Url {
    constructor() {
        this.protocol = 'https';
        this.rootDomain = `-eu-chq.teamworkinsight`;
        this.tLd = '.com/#/';
    }

    _createDynamicUrl(server) {
        this.urlLogin = `${this.protocol}://tw-${server}${this.rootDomain}${this.tLd}`;
    }
}

module.exports = new Url();
