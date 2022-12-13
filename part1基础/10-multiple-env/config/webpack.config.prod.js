const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
module.exports =
{
    output: {
        // 1.9.1 修改输出文件的文件名,并将其放置同一个文件夹下(缓存)
        filename: 'scripts/[name].[contenthash].js',
        // 1.10.1 公共路径
        publicPath: "http://localhost:8080/",
    },

    // 优化配置
    optimization: {
        minimizer: [
            // css压缩插件,使用了这个插件后其他js没有被压缩，需要另外单独进行配置
            new CssMinimizerPlugin(),
            // 1.10.2 js压缩插件（单独配置）
            new TerserPlugin()
        ],
    },
    mode: 'production',

    // 1.10.4 
    performance: {
        // 关闭生产环境下，文件大小相关的警告
        hints: false,
    }
}
