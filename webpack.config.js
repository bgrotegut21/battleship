const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const json5 = require('json5');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    dom: './src/scripts/dom.js',
    gameboard: './src/scripts/gameboard.js',
    main: './src/scripts/main.js',
    position: './src/scripts/position.js',
    practical: './src/scripts/practical.js',
    ship: './src/scripts/ship.js',
    ui: './src/scripts/ui.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json5/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
