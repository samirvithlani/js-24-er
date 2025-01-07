const test = ()=>{

//    return 100
//return "heello"
    //return false
    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve("promise resolve..")
        }, 3000);
    })
    return promise
}

// var x = test();
// console.log("x...",x)
// x.then((data)=>{
//     console.log(data)
// })
// x.catch((err)=>{
//     console.log(err)
// })

test().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
