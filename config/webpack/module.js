const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaderUse = [
    //想看多个css并且不压缩用这个
    (process.myGlobalObj.dev ? {loader: 'style-loader'} : {
        loader: MiniCssExtractPlugin.loader,
        options: {
            //模块热更新
            hmr: true,
            //强制模块热更新
            reloadAll: true,
        }
    }),
    {
        loader: 'css-loader',
        options: {
            modules: true,//启用模块化
            //将模块化后的类名转变为，注意要用模块化必须:class="$style.类名";
            localIdentName: '[path][name]_[local]_[hash:base64:0]',
        },
    },
    {
        loader: 'postcss-loader'
    },
    {
        loader: 'px2rem-loader',
        options: {
            remUni: 75,
            remPrecision: 8
        },
    }
];

module.exports = {
    //优化打包1
    noParse: /jquery/,//不去解析jquery中的依赖库
    rules: [
        {
            test: /\.css$/,
            use: [cssLoaderUse[0],'css-loader',cssLoaderUse[2]],
            include: path.resolve('./node_modules/vuetify/dist/'),
        },
        {
            test: /\.css$/,
            use: cssLoaderUse,
            include: path.resolve('app'),
            exclude: /node_modules/,
        },
        {
            test: /\.scss$/,
            use: cssLoaderUse.concat(['sass-loader']),
            include: path.resolve('app'),
            exclude: /node_modules/,
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
            include: path.resolve('app'),
            exclude: /node_modules/,
        },
        {
            //vue里面的template不能有lang=html不然这个loader解析不了
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10 << 10,//10 * 1024,
                    name: "static/img/[name].[hash:7].[ext]",
                    //将生成的目录修改为/img
                    outputPath: "/img",
                    //在每个图片上加入cdn的前缀
                    publicPath: "http://elite-cheng.nat300.top:63689/cdn/"
                }
            },
            include: path.resolve('app'),
            exclude: /node_modules/,
        },
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        //将ES6 ==> ES5，let ==> var,还有箭头函数
                        '@babel/preset-env',
                    ],
                    plugins: [
                        //转换组件懒加载import语法
                        "@babel/plugin-syntax-dynamic-import",
                        //转换装饰器[@log]的插件一定要在class插件的上面
                        ["@babel/plugin-proposal-decorators", {"legacy": true}],
                        //转换class的插件
                        ['@babel/plugin-proposal-class-properties', {"loose": true}],
                        "@babel/plugin-transform-runtime",
                    ]
                }
            },
            include: path.resolve(__dirname, '../../app'),
            exclude: /node_modules/
        },
        // {   //做语法校验
        //     test: /\.js$/,
        //     use: {
        //         loader: 'eslint-loader',
        //         options: {
        //             enforce: 'pre'//调换一下执行顺序，强制这个loader先执行,这个参数如果不写就是normals
        //         }
        //     },
        // },
    ]
};