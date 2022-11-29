import helloworld from './hello-world'
import imgsrc from './assets/me.png'
import jb from './assets/jb.svg'
import exampleTxt from './assets/example.txt'
import curry from './assets/curry.jpg'


helloworld()

const img = document.createElement('img');
img.src = imgsrc;
console.log('imgsrc:', imgsrc);
document.body.appendChild(img)

const img2 = document.createElement("img");
img2.style.cssText = 'width:600px;'
img2.src = jb;
console.log('jb:', jb);
document.body.appendChild(img2)

const block = document.createElement('div');
block.textContent = exampleTxt;
console.log('exampleTxt:', exampleTxt);
document.body.appendChild(block)

const img3 = document.createElement("img");
img3.style.cssText = 'width:600px;'
img3.src = curry;
console.log('curry:', curry);
document.body.appendChild(img3)