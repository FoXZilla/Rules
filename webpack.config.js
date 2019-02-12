const Webpack = require('webpack');
const Path = require('path');

module.exports = (env, argv) => {
    return {
        entry: {
            'dist/rules': './src/index.ts',
            'example/demo1': './docs/demo1.ts',
        },
        output: {
            path: __dirname,
            filename: '[name].js',
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
            new Webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(argv.mode),
            }),
        ],
    }
};
