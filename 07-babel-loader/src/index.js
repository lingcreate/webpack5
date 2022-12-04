import helloworld from './hello-world'
import imgsrc from './assets/me.png'
import jb from './assets/jb.svg'
import exampleTxt from './assets/example.txt'
import curry from './assets/curry.jpg'
import './style.css'
import './style.less'
import Data from './assets/data.csv'
import Notes from './assets/data.xml'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'

helloworld()

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

console.log(Data);
console.log(Notes);

console.log(toml);
console.log(yaml);
console.log(json5);