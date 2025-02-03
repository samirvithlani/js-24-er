const getData =()=>{


    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({id:101,data:"ok"})
        }, 2000);
    })

    return promise
}


const printData = ()=>{


        var x = getData()
        console.log(x) 
        x.then((data)=>{
            console.log(data)
        })
        x.catch((err)=>{
            console.log(err)
        })

}

printData()