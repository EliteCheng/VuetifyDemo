const path = require('path');


module.exports = {
    entry: {
        main: ['./app/js/main.js'],
    },
    output: {
        //name其实就是entry参数中的main
        filename: '[name].min.js',
        path: path.resolve('./dist/'),//路径必须是一个绝对路径
    },
    resolve: {
        modules: [path.resolve('node_modules')],
        //这样配置就可以简写后缀名字了
        extensions: ['.vue', '.js', '.css', '.scss', '.json'],
        alias: {
            //vue文档中安装，运行时
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: require('./module'),
    plugins: require('./plugin'),
};