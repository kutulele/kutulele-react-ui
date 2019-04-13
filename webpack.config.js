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
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "less-loader"
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    plugins: [htmlPlugin],
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true
    },
    // entry: './src/Main.js',
    // output: {
    //   path: path.resolve(__dirname, './dist'),
    //   publicPath: '/dist/',
    //   filename: 'build.js'
    // },
  };