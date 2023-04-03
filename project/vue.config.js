const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
 
  devServer: {
    proxy: `https://retoolapi.dev/6ysODg/cart`,
    proxy:`https://artgallery-2a2a0-default-rtdb.firebaseio.com/InstituteImages.json`
    },
  transpileDependencies: true
})

