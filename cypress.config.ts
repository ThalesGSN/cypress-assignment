import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 360,
  viewportHeight: 751,
  video: true,
  projectId: '59pzbg',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:1234',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
