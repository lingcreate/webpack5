// 静态导入
import _ from 'lodash'
// 动态导入
import './async-module.js'

console.log(_.join(['Index', 'module', 'loaded!'], ' '));
const button = document.createElement('button');
button.textContent = '点击执行加法运算';
button.addEventListener('click', () => {
    // 利用动态导入进行（懒加载）并生成单独的模块文件，将add解构出来
    import(/* webpackChunkName: 'math' ,webpackPrefetch:true*/ './math.js').then(({ add }) => {
        alert(add(4, 5));
    })
})
document.body.appendChild(button)