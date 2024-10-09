const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/origami-gallery/' // Change 'origami-gallery' to match your repo name
      : '/'
})
