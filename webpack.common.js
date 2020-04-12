const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: "./example/index.js",
    stylecraft: "./src/index.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: ["file-loader"],
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: ["file-loader"],
      // },
      {
        test: /\.(svg)$/,
        use: {
          loader: "svg-url-loader",
        },
      },
    ],
  },
};
