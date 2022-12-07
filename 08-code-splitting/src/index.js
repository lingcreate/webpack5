// 静态导入 lodash
import _ from 'lodash'
// 动态导入 lodash
import './async-module.js'

// console.log(_.join(['Index', 'module', 'loaded!'], ' '));
const button = document.createElement('button');
button.textContent = '点击执行加法运算';
button.addEventListener('click', () => {
    // 利用动态导入进行（懒加载）并生成单独的模块文件，将add解构出来
    // 使用webpackChunkName给模块文件命名
    // import(/* webpackChunkName: 'math'*/ './math.js').then(({ add }) => {
    //     alert(add(4, 5));
    // })

    // 预获取
    import(/* webpackChunkName: 'math' ,webpackPrefetch:true*/ './math.js').then(({ add }) => {
        alert(add(4, 5));
    })

    // 预加载（类似懒加载）
    // import(/* webpackChunkName: 'math' ,webpackPreload:true*/ './math.js').then(({ add }) => {
    //     alert(add(4, 5));
    // })
})
document.body.appendChild(button)