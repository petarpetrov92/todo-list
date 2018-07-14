const path = require('path');
// const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.join(__dirname, '..', '..', 'dist');
const SRC_DIR = path.join(__dirname, '..', '..', 'src');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          Object.assign(
            {
              fallback: require.resolve('style-loader'),
              use: [
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: true,
                  },
                },
              ],
            },
          ),
        ),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
};
