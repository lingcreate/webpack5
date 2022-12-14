const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: "body"
        })
    ],

    // mode选项
    mode: 'development',
    // 在控制台，显示应用文件的源代码，而不是打包后的文件
    devtool: 'inline-source-map',
    // 使用webpack-dev-server
    devServer: {
        static: './dist'
    },
}