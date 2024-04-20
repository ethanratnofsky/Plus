const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'doa/hulu/index': './src/dynamicOrientationAdapter/hulu/index.ts',
    'dim/pinterest/index': './src/dynamicIlluminationMode/pinterest/index.ts',
  },
  devtool: 'inline-source-map',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
     new CopyPlugin({
        patterns: [{from: ".", to: ".", context: "public"}]
     }),
  ],
};
