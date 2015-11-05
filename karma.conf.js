module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      'tests/*.spec.js'
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'src/**/*.jsx': ['webpack'],
      'tests/*.spec.js': ['webpack']
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    reporters: ['dots'],
    singleRun: false,
    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=0&optional=runtime' },
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
