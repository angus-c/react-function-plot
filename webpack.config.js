module.exports = {
  entry: './src/plot.jsx',
  output: {
    path: 'dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        // es6 JavaScript
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ],
    watch: true
  }
};
