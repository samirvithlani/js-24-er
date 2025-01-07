//class : to achive syn programming...
/*

    ######################################## : time 1 2 sec
    -----------------------------------------:

    pending,resolve,reject


*/ 

// setTimeout(() => {
//     console.log("########################################################")    
// }, 2000);
// console.log("--------------------------------------------------------------")


const getData = ()=>{


        //resolve,reject..
        var promise = new Promise((resolve,reject)=>{
            //resolve //reject
            setTimeout(() => {
                    resolve("promise has been resolved...")
            }, 3000);
        })

        console.log(promise)
        //promise then...//promise catach
        promise.then((data)=>{
            console.log(data)
        })
        promise.catch((err)=>{
            console.log(err)
        })



}

//getData()




const printResult = ()=>{


    var prom = new Promise((success,fail)=>{
        setTimeout(()=>{
            //resolve
            success({sub1:100,sub2:99,sub3:87})
        },3000)
    })

    console.log(prom)
    prom.then((data)=>{
        console.log(data)
    })
    prom.catch((err)=>{
        console.log(err)
    })



}
printResult()




