const getData = ()=>{
    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("promise has been resolved...")
        },2000)
    })
    return promise;
}

const printData = async()=>{


    // var x = getData()
    // x.then((data)=>{
    //     console.log(data)
    // })

    console.log("ptinting data...")
    var x = await getData()
    console.log(x)


}
printData()