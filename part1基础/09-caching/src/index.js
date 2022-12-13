import imgsrc from './assets/me.png'
import jb from './assets/jb.svg'
import exampleTxt from './assets/example.txt'
import curry from './assets/curry.jpg'
import './style.css'
import './style.less'

// 静态导入
import _ from 'lodash'
// 动态导入
import './async-module.js'



const img = document.createElement('img');
img.src = imgsrc;
document.body.appendChild(img)

const img2 = document.createElement("img");
img2.style.cssText = 'width:600px;'
img2.src = jb;
document.body.appendChild(img2)

const block = document.createElement('div');
block.textContent = exampleTxt;
block.style.cssText = 'width:200px;height:200px;background:blue;'
block.classList.add('block-bg')
document.body.appendChild(block)

const img3 = document.createElement("img");
img3.style.cssText = 'width:600px;'
img3.src = curry;
document.body.appendChild(img3)
document.body.classList.add('hello');


// 字体文件
const span = document.createElement('span');
span.classList.add('icon');
// 插入字体图标
span.innerHTML = '';
document.body.appendChild(span)




console.log(_.join(['Index', 'module', 'loaded!'], ' '));
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