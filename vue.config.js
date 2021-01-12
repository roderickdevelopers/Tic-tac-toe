var path = require('path')

module.exports = {
  // plugin omitted
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        additionalData: `
        @import '@/styles/global/variables';
        @import '@/styles/global/breakpoints';
        `
      }
    }
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
