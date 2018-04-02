var { After, Before, setDefaultTimeout } = require('cucumber');


// Synchronous
Before(function () {
    browser.ignoreSynchronization = true;
    setDefaultTimeout(60 * 1000);
    console.log("test");
});

// Asynchronous Callback
Before(function (testCase, callback) {
    callback();
});

// Asynchronous Promise
After(function () {

});