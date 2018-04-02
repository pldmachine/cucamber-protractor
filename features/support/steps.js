const { Given, When, Then } = require('cucumber')
//const { } = require('Protractor');
const { expect } = require('chai')
const { By, until } = require('selenium-webdriver');

Given('given example', function () {

    return browser.get('/');
});

When('when example', function () {
    element(By.linkText('Computers')).click();
    element(By.linkText('Electronics')).click();
    return element(By.linkText('Apparel')).click();
    
});

Then('then example', function (next) {
    return browser.wait(until.titleIs('nopCommerce demo store. Computers'), 3000).Then(()=>{
        browser.quit();
    });
    
});