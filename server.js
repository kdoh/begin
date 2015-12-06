var webpack = require('webpack')
var webPackDevServer = require('webpack-dev-server')
var portfinder = require('portfinder')
var config = require('./webpack.config')

portfinder.basePort = 4000
portfinder.getPort(function(err, port) {
  return new webPackDevServer(webpack(config(port)), {
    hot: true
  }).listen(port, function () {
      console.log('Development server + hotreloading now avaliable on port ' + port)
  })
})
