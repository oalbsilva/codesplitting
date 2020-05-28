const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};