//PROMISE class
//class : obejct using new keyrword

//STAGES : pending, resolve,reject


var promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //resolve("promise has been resolved...")    
        reject("promise has been rejected...")
    }, 3000);
    
})
console.log(promise)
promise.then((data)=>{
    console.log(data)
})
promise.catch((err)=>{
    console.log(err)
})






