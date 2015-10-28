module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
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
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
    watch: true
  }
};
