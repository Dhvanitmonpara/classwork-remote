const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // if it become false then it will throw an error which will caught by error handler
            if (success) {
                resolve('Operation completed successfully');
            } else {
                reject('Operation failed');
            }
        }, 2000);
    });
};

myAsyncFunction()
    .then((result) => {
        console.log(result);
    }), ((error) => {
        console.error(error);
    }).then((value)=>{
        console.log(value);
        return new Promise (()=>{
            
        })
    })