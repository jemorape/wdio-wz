const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const menuitemsPage = require('../pageobjects/menuitems.page');
const sortItemPage = require('../pageobjects/sort.page');
const cartPage = require('../pageobjects/shoppingcart.page');




const pages = {
    login: LoginPage,
    menuPrincipal: menuitemsPage

}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with \"(.*)\" and \"(.*)\"$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I am on \"(.*)\" page$/, async (message) => {
    await expect(SecurePage.productsTitle).toBeExisting();
    await expect(SecurePage.productsTitle).toHaveTextContaining(message);
});

Then(/^I click on the menu button and click on logout button$/, async () => {
    await menuitemsPage.menuPrincipal1();
});

Then(/^I click on the filter menu and sort to low to high$/, async () => {
    await sortItemPage.sortMenuLow();
});

Then(/^I click on the filter menu and sort to high to low$/, async () => {
    await sortItemPage.sortMenuHigh();
});

Then(/^I added multiple products$/, async () => {
    await cartPage.addCart();
});

Then(/^I add a specific product$/, async () => {
    await cartPage.specificProduct();
});

Then(/^I verify the specific product on a cart$/, async () => {
    await cartPage.verifyCart();
    await expect(cartPage.verifyOnesie).toBeExisting();
});

Then(/^I verify the shopping cart$/, async () => {
    await cartPage.verifyCart();
    await expect(cartPage.verifyBackpack).toBeExisting();
    await expect(cartPage.verifyTshirt).toBeExisting();
    await expect(cartPage.verifyOnesie).toBeExisting();

});

Then(/^I should see a flash message saying \"(.*)\"$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});



