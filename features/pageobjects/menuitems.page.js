

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MenuitemsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuPrincipal () {
        return $('#react-burger-menu-btn');
    }

    get logoutButton () {
        return $('//a[@id="logout_sidebar_link"]');
    }

    async menuPrincipal1 () {
        await this.menuPrincipal.click();
        await browser.pause(3000);
        await this.logoutButton.click();
    }

     /**
     * overwrite specific options to adapt it to page object
     */
    //   open () {
    //     return super.open('menuPrincipal');
    // }

}

module.exports = new MenuitemsPage();
