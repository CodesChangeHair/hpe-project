const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    proxy: {
      '/upload': {
        target: 'http://localhost:3000', // 代理到后端 API
        changeOrigin: true,
      },
    },
  },
};
