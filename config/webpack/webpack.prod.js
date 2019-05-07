process.myGlobalObj = {
    dev: false,
};
const path = require('path');
const {smart} = require('webpack-merge');
const base = require('./webpack.base.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
module.exports = smart(base, {
    mode: 'production',
    // watch: true,
    // watchOptions: {
    //     poll: 100,//表示1秒内查看100次文件看有没有修改
    //     aggregateTimeout: 666,//表示防抖毫秒数，在666毫秒内只响应最后一次变化
    //     ignored: /node_modules/ //不需要进行监控的文件
    // },
    optimization: {
        //实现多页面打包的公共代码
        splitChunks: {//分割代码块
            cacheGroups: {//缓存组
                common: {//公共模块
                    chunks: 'initial',
                    minChunks: 2,
                    minSize: 0,
                },
                vendor: {
                    priority: 1,
                    test: '/node_modules/',
                    chunks: 'initial',
                    minChunks: 2,
                    minSize: 0,
                },
                styles: {
                    name: 'styles',  // 提取出来的文件命名
                    test: '/\.css$/',
                    chunks: 'initial', // initial表示提取入口文件的公共css及js部分,all 提取所有文件的公共部分
                    minChunks: 2, // 表示提取公共部分最少的文件数
                    minSize: 0,  // 表示提取公共部分最小的大小
                    enforce: true
                }
            }
        },
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin()
        ],
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../../', 'dist', 'manifest.json'),
        }),
    ]
});