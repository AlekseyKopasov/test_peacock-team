const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/': {
        target: 'https://oauth.vk.com/authorize',
        pathRewrite: { '^/': '' },
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
