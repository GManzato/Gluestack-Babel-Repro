const gluestackStyleResolver = require("@gluestack-style/babel-plugin-styled-resolver");
const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        gluestackStyleResolver,
        {
          components: [
            "@gluestack-ui/themed", // import path of the components folder or library name
            path.resolve(__dirname, "./config/theme"), // file path of the components folder
          ],
        },
      ],
      "expo-router/babel",
    ],
  };
};
