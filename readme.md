#author:neil_linch
#本项目来源https://www.bilibili.com/video/BV1YU4y1g745/
#本仓库仅为记录学习过程



## 9、缓存

#### 1、修改输出文件的文件名

```javascript
output: {
        // 修改输出文件的文件名,并将其放置同一个文件夹下
        filename: 'scripts/[name].[contenthash].js',
}
```



#### 2、缓存第三方库

```javascript
// 优化配置
    optimization: {
        splitChunks: {
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
```



#### 3、自定义输出

```javascript
 output: {
        // 自定义js文件输出
        filename: 'scripts/[name].[contenthash].js',
        // 自定义使用了资源模块模式的文件输出
        assetModuleFilename: 'images/[contenthash][ext]'
        path: path.resolve(__dirname, './dist'),
        
    },
 plugins: [
        // 实例化 生成css文件的插件
        new MiniCssExtractPlugin(
            // 自定义css文件输出
            {
                filename: 'styles/[contenthash].css'
            }
        )
    ],
```

