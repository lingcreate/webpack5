function getComponent() {
    // 三、使用import抽离一个lodash的单独文件
    return import('lodash').then(({ default: _ }) => {
        const element = document.createElement('div')
        element.innerHTML = _.join(['hello', 'webpack'], ' ')
        return element;
    })
}

getComponent().then((element) => {
    document.body.appendChild(element)
})