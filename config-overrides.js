/* config-overrides.js */
const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@domains': path.resolve(__dirname, "src/domains"),
      '@services': path.resolve(__dirname, "src/services"),
      '@components': path.resolve(__dirname, "src/components"),
      '@di': path.resolve(__dirname, "src/di"),
      '@adapters': path.resolve(__dirname, "src/adapters"),
    },
  };
  return config;
};
