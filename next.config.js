const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withImages = require("next-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImages: true,
      optimizeImagesInDev: true,
      optipng: {
        optimizationLevel: 3,
      },
      handleImages: ["jpeg", "png", "svg"],
    },
  ],
  [
    {
      // Target must be serverless
      target: "serverless",
    },
  ],
  withImages(),
  // your other plugins here
]);
