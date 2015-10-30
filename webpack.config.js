var path = require('path');

module.exports = {
  entry: './src/plot.jsx',
  output: {
    path: 'dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ],
    watch: true
  }
};
