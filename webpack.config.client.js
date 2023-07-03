const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const plugins = [
  new CleanWebpackPlugin(),
  new WebpackManifestPlugin(),
  new CopyPlugin({
    patterns: [
      {
        context: path.join(__dirname, "assets"),
        from: ".",
        to: "assets",
      },
    ],
  }),
  new Dotenv(),
];

module.exports = {
  name: 'client',
  entry: {
    client: path.resolve(__dirname, 'src/client/client.tsx'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname + '/dist/static'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      path: false,
      os: false,
      crypto: false,
    },
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  plugins,
};
