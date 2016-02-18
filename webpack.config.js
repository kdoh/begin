var webpack = require('webpack');
function config(port) {
  return {
    devtool: 'eval-source-map',
    entry: [
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/only-dev-server',
      './index'
    ],
    output:  {
      path: __dirname,
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loaders: ['babel'],
          exclude: /node_modules/,
        },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
  }
}
module.exports = config
