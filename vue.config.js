const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')

const resolve = url => path.resolve(__dirname, url)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
}
