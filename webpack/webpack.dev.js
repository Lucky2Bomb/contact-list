const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
    new ReactRefreshPlugin(),
  ],

  devServer: {
    hot: true,
    open: true,
  },
}
