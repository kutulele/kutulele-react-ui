var path = require('path')
var webpack = require('webpack')

const HtmlWebPackPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})


module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.less$/,
          use: [{
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }]
        },
      ]
    },
    plugins: [htmlPlugin],
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true
    },
  };