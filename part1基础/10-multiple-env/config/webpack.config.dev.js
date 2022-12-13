module.exports = {
    output: {
        filename: 'scripts/[name].js',
    },
    mode: 'development',
    // 控制台中，显示源代码
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
}