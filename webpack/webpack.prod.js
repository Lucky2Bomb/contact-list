const { DefinePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 128000,
    maxAssetSize: 128000,
  },
  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),
    new BundleAnalyzerPlugin(),
  ],
}
