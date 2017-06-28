var path = require('path');
const autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./lib/index",
    devtool: 'source-map',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js?$/, loader: "babel-loader", exclude: /node_modules/
            },
            {
                test: /\.s?css$/, 
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?-autoprefixer!sass-loader"
                })
            }
        ]    
    },
    externals: {
        "react": 'React',
        '_': 'lodash',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}