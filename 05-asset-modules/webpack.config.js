const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        // 自定义出口文件名字以及路径, contenthash webpack自带功能表示自动生成文件名， ext表示文件扩展名
        assetModuleFilename: 'images/[contenthash][ext]'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: "body"
        })
    ],

    mode: 'development',
    // 在控制台中，显示源代码，而不是打包编译后的文件
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },

    // 配置模块
    module: {
        rules: [
            {
                test: /\.png$/,
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
                // 小于8k使用inline生成base64，大于8k使用resource
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // 将临界值设置成4M
                        maxSize: 4 * 1024 * 1024
                    }
                }
            },
        ]
    },
}