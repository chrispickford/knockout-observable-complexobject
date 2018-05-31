const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "awesome-typescript-loader",
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: "raw-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(["dist"], { root: path.resolve(__dirname), beforeEmit: true })
  ],

  entry: "./src/main",

  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },

  resolve: {
    extensions: [".ts", ".js", ".json"]
  },

  mode: "development"
}