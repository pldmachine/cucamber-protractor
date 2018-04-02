exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "http://demo.nopcommerce.com/",
    capabilities: {
      'browserName': 'chrome'
      },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [ 'features/**/*.feature'],
    cucumberOpts: {
      defaultTimeoutInterval: 30000,
      require: [
        'features/support/**/*.steps.js',
        'features/support/**/*.hooks.js'
        
      ]
    }
  };