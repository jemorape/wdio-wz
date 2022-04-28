

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class cartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get cartTshirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get cartOnesie () {
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get clickCart () {
        return $('#shopping_cart_container');
    }

    get verifyBackpack () {
        return $('//div[contains(text(),"Sauce Labs Backpack")]');
    }

    get verifyTshirt () {
        return $('//div[contains(text(),"Sauce Labs Bolt T-Shirt")]');
    }

    get verifyOnesie () {
        return $('//div[contains(text(),"Sauce Labs Onesie")]');
    }

    async addCart () {
        await this.cartBackpack.click();
        await this.cartTshirt.click();
        await this.cartOnesie.click();
        await browser.pause(1000);
    }

    async specificProduct () {
        await this.cartOnesie.click();
        await browser.pause(1000);
    }

    async verifyCart () {
        await this.clickCart.click();
        await browser.pause(1000);
    }



}

module.exports = new cartPage();
