// 此文件在nodejs中运行 因此定义模块时需要使用commonjs模块
// 引入nodejs中的path模块
const path = require('path')
module.exports = {
    // 指定入口文件
    entry: './src/index.js',
    output: {
        // 指定输出文件名,即打包好后的文件
        filename: 'bundle.js',
        // __dirname表示当前文件的物理路径，即02-setup-app
        path: path.resolve(__dirname, './dist')
        // path: './dist'  path文件需要绝对路径
    },
    mode: 'none'
}