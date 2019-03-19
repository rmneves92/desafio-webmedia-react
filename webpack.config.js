const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 3030,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules' 
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
            }, {
                test: /\.(css|scss|sass)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.woff|.woff2|.otf|.ttf|.eot|.svg*.*$/,
                loader: 'file'
            }, {
                test: /\.json$/, 
                exclude: /(node_modules)/, 
                loader: 'json-loader' 
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                exclude: /(node_modules)/, 
                loader: 'file-loader'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}