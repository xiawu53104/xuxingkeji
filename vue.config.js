const path = require('path')

const resolve = url => path.resolve(__dirname, url)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
}
