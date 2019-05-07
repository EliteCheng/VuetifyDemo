let path = require('path');
const webpack = require('webpack');
//用于清除缓存。
const CleanWebpackPlugin = require("clean-webpack-plugin");
/**
 * 使用动态加载库：
 * 1.在index.html中引用<script src="/_dll_vue.js"></script>
 * 2.通过webpack 打包webpack.dll.js
 * 3.通过webpack 打包webpack.prod.js
 */

module.exports = {
    mode: 'production',
    entry: {
        "vue": ['vue', 'vue-router'],
    },
    output: {
        filename: "_dll_[name].js",
        path: path.resolve(__dirname, '../dist'),
        library: '_dll_[name]',
        libraryTarget: 'var',//commonjs var this ....
    },
    plugins: [
        new webpack.DllPlugin({
            name: "_dll_[name]",
            path: path.resolve(__dirname, '../dist', 'manifest.json'),
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"]
        }),
    ]
};