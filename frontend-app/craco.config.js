const cracoAlias = require("craco-alias");
const CracoLessPlugin = require("craco-less");

const path = require("path");

module.exports = {
  mode: 'development',
  // Adding Server
  devServer: {
    port: 3000,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  /*plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.base.json",
      }
    }
  ]*/
};
