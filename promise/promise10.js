

const placeOrder = ()=>{


    const promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
                resolve({orderId:101,dish:"pizza",qty:1,status:"accepted"})
        }, 2000);
    })

    return promise


}




const zomato = ()=>{



        // const promise = new Promise((resolve,reject)=>{

        //     setTimeout(() => {
        //             resolve({orderId:101,dish:"pizza",qty:1,status:"accepted"})
        //     }, 2000);
        // })
        // console.log(promise)
        // promise.then((order)=>{
        //     console.log(order)
        // })
        // promise.catch((err)=>{
        //     console.log(err)
        // })

        var x = placeOrder()
        console.log(x)
        x.then((order)=>{
            console.log(order)
        })
        x.catch((err)=>{
            console.log(err)
        })



}

zomato()