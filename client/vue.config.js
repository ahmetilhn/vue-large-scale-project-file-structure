const path = require("path");
module.exports = {
  //sourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.resolve("src"),
      },
    },
  },
  configureWebpack: (config) => {
    //Change configuration for the production environment ...
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // Package file size configuration
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
};
