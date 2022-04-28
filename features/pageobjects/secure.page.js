

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('div.error-message-container');
    }

    get productsTitle () {
        return $('.title=Products');
    }
}

module.exports = new SecurePage();
