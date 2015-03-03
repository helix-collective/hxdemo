module.exports = {
  entry: './main.js',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass",
      }
    ],
  },
  output: {
    path: __dirname + '/build',
    filename: 'main.js',
    publicPath: 'http://localhost:5544/staticapp/',

    sourceMapFilename: '[file].map'
  }
};
