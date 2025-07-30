const delhiWeather = ()=>{
    return new Promise ((resolve, reject)=>{
        const success = 1
        const newChild = document.createElement("div")
        document.body.appendChild(newChild)
        if(success == true){
            const delhiW = 27
            newChild.innerHTML = `Delhi weather is ${delhiW}`
            resolve(delhiW)
        }else{
            reject('Not found')
            newChild.innerHTML = `Sorry! there's an error occured`
        }
       
    })
}

let delhiWeatherCheck = delhiWeather()
delhiWeatherCheck.then((value)=>{
    console.log('Delhi weather is '+value);
}).catch((error)=>{
    console.log(error);
})
