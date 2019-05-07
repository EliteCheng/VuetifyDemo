process.myGlobalObj = {
    dev: true,
};
const path = require('path');
const {smart} = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require("webpack");
//用于清除缓存。
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = smart(base, {
    mode: 'development',
    //1.source-map源代码映射 会单独生成一个source.map文件 出错了 会表示当前报错的列和行，大 和 全
    //2.eval-source-map,不会产生单独的文件，但是可以显示行和列。
    //3.cheap-module-source-map不会产生列，但是是一个单独的映射文件，
    //4.cheap-module-eval-source-map不会产生文件，集成在打包后的文件中，也不会产生列。
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,//启用热更新
        //提供的静态文件位置
        contentBase: path.join(__dirname, "dist"),
        //开启gzip压缩
        compress: true,
        //服务占用的端口
        port: 966,
        //1.我们前端只想来模拟数据。
        // before(app){//提供的一个方法
        //     app.get('/api/user', (req, res) => {
        //         res.json({
        //             name:'express框架返回的数据'
        //         })
        //     });
        // },
        //2.重写的方式，把请求代理到http://localhost:3000服务器上。
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3000',//配置了一个http代理，实现跨域
        //         pathrRewrite: {'/api': ""},
        //     }
        //
        // },
        //3.有服务端，不想用代理,在服务端中启动webpack 端口用服务端端口,具体看NodeJs中的server.js
    },
    plugins: [
        //给全局js定义一个变量
        new webpack.DefinePlugin({
            DEV: JSON.stringify('dev'),//相当于const DEV='dev';
            FLAG: "true",//相当于const FLAG=true;
            ONE_DAY_TIME: '24*3600*1000',//相当于const ONE_DAY_TIME=24*3600*1000;
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"]
        }),
        new webpack.NamedModulesPlugin(),//打印更新的模块路径
        new webpack.HotModuleReplacementPlugin(),//热更新插件
    ],
    //表示我不使用import进来的jquery，
    // externals: {
    //     jquery: "$",
    // },
});