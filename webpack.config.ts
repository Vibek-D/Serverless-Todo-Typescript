const path = require('path');
const slsw = require('serverless-webpack');
import { Configuration } from 'webpack';
import { resolve } from 'path';

const config: Configuration = {
  // mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
  // entry: slsw.lib.entries,
    entry: { 
      dataPost: './src/dataPost.ts',
      dataGet: './src/dataGet.ts',
      dataDelete: './src/dataDelete.ts'},
    output: {
      filename: '[name].build.js',
      libraryTarget: 'commonjs2',
      path: resolve(__dirname, 'build'),
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.(tsx?)$/,
          loader: 'ts-loader',
          exclude: [
            [
              path.resolve(__dirname, 'node_modules'),
              path.resolve(__dirname, '.serverless'),
              path.resolve(__dirname, '.webpack'),
            ],
          ],
        },
      ],
    },
};

export default config;