

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class sortItemPage extends Page {
    /**
     * define selectors using getter methods
     */
    get sortMenu () {
        return $('.select_container');
    }

    get sortLow () {
        return $('//option[contains(text(),"Price (low to high)")]');
    }

    get sortHigh () {
        return $('//option[contains(text(),"Price (high to low)")]');
    }

    async sortMenuLow () {
        await this.sortMenu.click();
        await browser.pause(2000);
        await this.sortLow.click();
    }

    async sortMenuHigh () {
        await this.sortMenu.click();
        await browser.pause(2000);
        await this.sortHigh.click();
    }



}

module.exports = new sortItemPage();
