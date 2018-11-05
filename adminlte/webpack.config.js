var webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './login/resources/js/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'login/resources/dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /.(svg|ttf|otf|eot|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader?limit=10000',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../../resources/4.5.0.final/login/adminlte/dist/fonts/'
                    }
                }]
            },
            {
                test: /.(png|jpg|jpeg?)(\?[a-z0-9]+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',    // where the fonts will go
                    publicPath: '../../../resources/4.5.0.final/login/adminlte/dist/img/'
                  }
                }]
            },
       ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jquery": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
