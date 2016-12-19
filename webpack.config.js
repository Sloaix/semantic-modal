const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'semantic-modal': './src/Main',
        'semantic-modal.min': './src/Main'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'SemanticModal',
        libraryTarget: 'umd' // Possible value - amd, commonjs, commonjs2, commonjs-module, this, var
    },
    resolve: {
        extensions: ['.ts']
    },
    externals: {
        jquery: 'jQuery',
        $: 'jQuery'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            include: /\.min\.js$/,
            minimize: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};