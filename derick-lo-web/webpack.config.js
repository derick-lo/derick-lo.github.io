const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ErudaPlugin = require('eruda-webpack-plugin');
const packageJson = require(path.resolve(__dirname, './package.json'));

module.exports = {
  mode: 'development',
  entry: './src/main',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      files: ['src/**/*.js', 'src/**/*.jsx'],
      emitWarning: false,
      emitError: true,
    }),
    require('autoprefixer'),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: packageJson.name,
      template: 'public/index.html',
      filename: 'index.html',
    }),
    new ErudaPlugin(),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
