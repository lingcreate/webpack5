const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 引入 json模块
const toml = require('toml');
const yaml = require('yaml')
const json5 = require('json5')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        // 自定义生成的资源文件的路径
        // assetModuleFilename: 'images/[contenthash][ext]'
    },

    plugins: [
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

    optimization: {
        minimizer: [
            // 实例化css压缩插件
            new CssMinimizerPlugin()
        ]
    },
    // 压缩需要将mode从development改为production
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },

    module: {
        rules: [
            {
                test: /\.(png)$/,
                type: 'asset/resource',
                // generator的优先级高于output中的assetModuleFilename
                generator: {
                    filename: 'images/test.png'
                }
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
        ]
    },
}