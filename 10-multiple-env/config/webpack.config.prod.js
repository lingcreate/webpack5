const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// 引入 json模块
const toml = require('toml');
const yaml = require('yaml')
const json5 = require('json5');
const TerserPlugin = require('terser-webpack-plugin');

module.exports =
{
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
    },
    output: {
        // 1.9.1 修改输出文件的文件名,并将其放置同一个文件夹下(缓存)
        filename: 'scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        // 自定义生成的资源文件的路径
        assetModuleFilename: 'images/[contenthash][ext]',
        // 1.10.1 公共路径
        publicPath: "http://localhost:8080/",
    },

    plugins: [
        // 自动引入资源
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: "body"
        }),
        // 实例化 生成css文件的插件
        new MiniCssExtractPlugin(
            // 定义生成的css文件路径
            {
                filename: 'styles/[contenthash].css'
            }
        )
    ],

    // 优化配置
    optimization: {
        minimizer: [
            // css压缩插件,使用了这个插件后其他js没有被压缩，需要另外单独进行配置
            new CssMinimizerPlugin(),
            // 1.10.2 js压缩插件（单独配置）
            new TerserPlugin()
        ],
        splitChunks: {
            // 防止重复，自动抽离
            // chunks: 'all',

            // 1.9.2 缓存指定文件 将node_modules下面的第三方库进行缓存
            cacheGroups: {
                vendor: {
                    // 将文件名带有node_modules的文件整合起来
                    test: /[\\/]node_modules[\\/]/,
                    // 并保存在名为vendors的文件下面
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
    // development
    // 1.10.2 环境配置，使用环境变量控制开发模式
    // npx webpack --env production
    // mode: env.production ? 'production' : 'development',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png)$/,
                type: 'asset/resource',
                // generator的优先级高于output中的assetModuleFilename
                // generator: {
                //     filename: 'images/test.png'
                // }
            },

            {
                test: /\.svg$/,
                type: 'asset/inline',
            },

            {
                test: /\.txt$/,
                type: 'asset/source',
            },

            {
                test: /\.jpg$/,
                // 默认小于8k使用inline生成base64，大于8k使用resource
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // 将临界值设置成4M
                        maxSize: 4 * 1024 * 1024
                    }
                }
            },

            // loader加载css文件
            {
                test: /\.(css|less)$/,
                // 在style中生成css代码
                // use: ['style-loader', 'css-loader', 'less-loader'],

                // 抽离css, 生成独立的css文件
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },

            // 加载fonts字体文件
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },

            // 加载数据 csv，tsv，
            {
                test: /\.(csv|tsv)$/,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            },
            // 自定义JSON模块
            {
                test: /\.toml$/,
                type: 'json',
                parser: {
                    parse: toml.parse
                }
            },
            {
                test: /\.yaml$/,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.json5$/,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            },

            // 对js进行babel编译
            {
                test: /\.js$/,
                // 默认会编译本地js以及node_modules中的js，因此使用exclude将其忽略
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    // 1.10.4 
    performance: {
        // 关闭生产环境下，文件大小相关的警告
        hints: false,
    }
}
