const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],
  [
    {
      // Target must be serverless
      target: "serverless",
    },
  ],
  // your other plugins here
]);
