function getString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, 2000)
    })
}

async function helloworld() {
    let result = await getString()
    console.log(result);
    console.log('helloworld!!!');
    return result;
}

export default helloworld;