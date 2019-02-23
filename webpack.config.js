const Path = require('path');
const Webpack = require('webpack');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: Path.join(__dirname, 'dist/'),
        filename: 'rules.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: 'tslint-loader',
            },
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ],
    },
    resolve: { extensions: ['.js', '.ts'] },
    plugins: [
        new FileManagerPlugin({
            onEnd: {
                copy: [{
                    source: 'dist/rules.js',
                    destination: 'docs/rules.js',
                }],
            },
        }),
    ],
};
