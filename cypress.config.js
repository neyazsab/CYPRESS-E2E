const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    pageLoadTimeout: 180000,       // 2 minutes for page load
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'}
});
