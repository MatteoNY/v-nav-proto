module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        data: `@import "@/_config/scss/variables.scss";`
      }
    }
  },
  outputDir: 'dist/vnavdemo',
  publicPath: 'dist/vnavdemo'
  // filenameHashing: true,
  
}