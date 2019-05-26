module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: 'http://api:3000'
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}
