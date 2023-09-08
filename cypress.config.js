const { defineConfig } = require('cypress')
const { cypressConfig } = require('@axe-core/watcher')

// Get your configuration from environment variables.
const {
  API_KEY = 'f7a57bb0-6aec-4e9a-98cf-d716724cbce4',
  SERVER_URL = 'http://localhost:3000'
} = process.env

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: API_KEY,
      serverURL: SERVER_URL,
      takeScreenshots: true
    },
    defaultCommandTimeout: 10000,
    video: false
  })
)
