const { defineConfig } = require("cypress");
const { cypressConfig } = require("@axe-core/watcher");

// Get your configuration from environment variables.
const { API_KEY, SERVER_URL } = process.env;

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: API_KEY,
      serverURL: SERVER_URL,
      takeScreenshots: true,
    },
    defaultCommandTimeout: 10000,
    video: false,
    e2e: {
      setupNodeEvents(on) {
        on("before:browser:launch", (_, launchOptions) => {
          launchOptions.args.push("--headless=new");
        });
      },
    },
  })
);
