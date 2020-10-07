const path = require('path')

const resolve = url => path.resolve(__dirname, url)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dpzs' : '/',
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-eval-source-map',
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
}
