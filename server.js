var webpack = require('webpack')
var webPackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new webPackDevServer(webpack(config), {
  hot: true
}).listen(3000, function () {
    console.log('Development server + hotreloading now avaliable on port 3000')
})
