const Path = require('path');
const Webpack = require('webpack');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    entry: {
        'webpack-example': './src/webpack-example.ts',
        rules: './src/index.ts',
    },
    output: {
        path: Path.join(__dirname, 'dist/'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'Rules',
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    resolve: { extensions: ['.js', '.ts', '.d.ts'] },
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        {
                            source: 'dist/rules.js',
                            destination: 'docs/rules.js',
                        },
                    ],
                    delete: [
                        'docs/webpack-example.js',
                    ],
                    move: [
                        {
                            source: 'dist/webpack-example.js',
                            destination: 'docs/webpack-example.js',
                        },
                    ],
                },
            },
        }),
    ],
};
