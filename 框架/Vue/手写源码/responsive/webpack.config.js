
module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'xfk',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: 'www'
  }
}