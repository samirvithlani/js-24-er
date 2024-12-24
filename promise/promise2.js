function test(){

    return 100;
}

var x = test()
console.log(x)


function getData(){

    var promise =  new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("promise has been resolved....")
        }, 3000);
    })
    return promise;
}

var promise = getData()
console.log(promise)
promise.then((data)=>{
    console.log(data)
})
