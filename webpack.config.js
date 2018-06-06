var path = require('path');

var config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      components: path.resolve(__dirname ,'src/components'),
      '~': './'
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'public',
    publicPath: '/dist/',
    port: 3030
  }
}

module.exports = config;
