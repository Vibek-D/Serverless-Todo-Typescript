// module.exports = {
//     target: 'node',
//     mode: 'production',
//     // entry: 'app.js',
//     // output: {
//     //     filename: './dist/app.bundle.js'
//     // }
// };

const path = require('path');
const slsw = require('serverless-webpack');
import { resolve } from 'path';

module.exports = {
//   mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
//   entry: slsw.lib.entries,
  entry: { functions: './src/functions.ts'},
  output: {
    filename: '[name].js',
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