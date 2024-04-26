const loadScript = (src)=>{
    return new Promise((resolve, reject)=>{
        const script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = ()=>{
            resolve('script has been loaded!')
        }
        script.onerror = ()=>{
            reject('An error occured')
        }
    })
    
}

let p1 = loadScript('httpsf://something.com')
p1.then(()=>{
    console.log('script run succesfully');
}).catch(()=>{
    const newLocal = 'got an error'
    console.log(newLocal);
})