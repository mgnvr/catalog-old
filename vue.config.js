// const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  devServer: {
        proxy: 'http://localhost:3000/',
    },

    publicPath: 'catalog-old',

  //   configureWebpack: {
  //   plugins: [
  //     new ImageminPlugin()
  //   ]
  // }

}
