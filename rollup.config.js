// const rollupFileManager = require('fii');
// const Path = require('path');
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import copy from 'rollup-plugin-copy';

export default [
    {
        input: [{'rules': './src/index.ts'}, {'webpack-example': './src/webpack-example.ts'}],
        output: {
            format: 'es',
            dir: 'dist',
        },
        plugins: [
            scss({
                output: 'bundle.css',
                include: ['/**/*.scss', '/**/*.css', '/**/*.sass'],
                failOnError: true
            }),
            typescript({
                module: 'esnext',
                compilerOptions: {
                    lib: ['es5', 'es6', 'dom'],
                    target: 'es5'
                },
                sourceMap: false,
                exclude: ["build"]
            }),
            multiInput(),
            copy({
                targets: [{
                    src: 'dist/rules.js',
                    dest: 'docs/'
                }, {
                    src: 'dist/webpack-example.js',
                    dest: 'docs/'
                }],
                hook: 'closeBundle'
            })
        ]
    }
];
