const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: "./app/views/index.html",
        filename: "index.html",
        minify: {
            removeAttributeQuotes: true,//删除双引号
            collapseWhitespace: !process.myGlobalObj.dev,//折叠空行
        },
        hash: true,
    }),
    new MiniCssExtractPlugin({
        filename: "css/[contenthash:6].css",
        chunkFilename: "[id].css",
    }),
    new webpack.ProvidePlugin({
        //在每个模块中都注入$
        $: "jquery"
    }),
    new CopyWebpackPlugin([
        {from: "./resource", to: "./resource"}
    ]),
];
module.exports = plugins;