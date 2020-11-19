const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 8080 // dev port

const isProduction = process.env.NODE_ENV === 'production'
const cdn = {
  css: [],
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.6.11',
    'https://cdn.jsdelivr.net/npm/vuex@3.4.0',
    'https://cdn.jsdelivr.net/npm/vue-router@3.1.6',
    'https://unpkg.com/axios@0.19.2/dist/axios.min.js',
  ]
}

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: './', // 设置打包文件相对路径

  devServer: { //开发服务器
    port: port,
    open: false, // 是否自动启动浏览器
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/client': {
        target: 'http://192.168.1.100:9910', // 本地调试
        // changeOrigin: true,
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return '/index.html';
          }
        },
      }
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      // 用cdn方式引入
      config.externals = {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'axios': 'axios',
      }
    }
    return {
      resolve: { // 配置解析别名
        alias: {
          'components': '@/components',
          'content': 'components/content',
          'common': 'components/common',
          'assets': '@/assets',
          'network': '@/network',
          'views': '@/views',
          'util': '@/util',
        }
      }
    }
  },
  chainWebpack: (config) => {
    // 生产环境配置
    if (isProduction) {
      // 删除预加载
      // config.plugins.delete('preload')
      // config.plugins.delete('prefetch')
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      })
      // 生产环境注入cdn
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn;
          return args;
        })
    }
  },
}
