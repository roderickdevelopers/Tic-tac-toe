var path = require('path')

module.exports = {
  // plugin omitted
  css: {
    requireModuleExtension: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    }
  },
  lintOnSave: false
}
