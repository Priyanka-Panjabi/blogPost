export const debouncedFunc = (fn,delay=300) =>{
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}

export const callService = (url,data) =>{
    const patternData = /^[a-zA-Z0-9, \-_]*$/;
    const patternUrl = /^[A-Za-z0-9{}=&?/\-_]*$/;
    const URL = `http://someDomain/${url}`
    const userData = data.trim()
    
    if (patternUrl.test(url)) {
        if(patternData.test(data)) {
           
            console.log("Calling api: ",URL, userData)
        }
        else {
            console.log("Invalid data")
        }
    }
    else {
        console.log("Invalid URL")
    }
}