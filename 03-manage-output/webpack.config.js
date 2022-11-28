const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    mode: 'none',

    // 定义插件,生成html文件并自动引入资源文件
    plugins: [
        new HtmlWebpackPlugin({
            // 约定模板
            template: './index.html',
            // 生成的文件名
            filename: 'app.html',
            // 将script标签生成在body标签中
            inject: "body"
        })
    ]
}