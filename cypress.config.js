const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/1-getting-started/**/*.cy.{js,jsx,ts,tsx}',
    //defaultCommandTimeout: 10000

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },

    chromeWebSecurity: false
  }
});
