const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const packageJson = require(path.resolve(__dirname, "./package.json"));

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].[hash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    require("autoprefixer"),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: packageJson.name,
      template: "public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    port: 8080,
    hot: true,
    open: true,
  },
};
