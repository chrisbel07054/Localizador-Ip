const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js', // Ruta de tu archivo principal de JavaScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida para el bundle
    publicPath: '/',
    assetModuleFilename: 'images/[name][ext]'
},
mode: 'production',
performance: {
  hints: false,
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Si usas Babel para transpilar JavaScript
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/views/LocalizadorIP.html', // Ruta del archivo HTML de entrada
    }),
  ],
};