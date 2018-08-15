const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 正式环境
        changeOrigin: true,
        autoRewrite: true,
        cookieDomainRewrite: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    },
    port: 8080
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/assets/style'))
  }
}
