const getData = ()=>{


    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("data...........")
        }, 3000);
    })


}

// var x = getData()
// console.log(x)
// x.then((data)=>{
//     console.log(data)
// })

//x == promise...


const printData = async()=>{

    var x = await getData()
    console.log(x)
    

}

//printData()





//async...no need
const getUser = ()=>{

return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({id:1,name:"ram",age:23})
    }, 2000);
})

}


async function fetchUSerData (){

    console.log("fetching user data..")
    const user = await getUser()
    console.log(user)

}

fetchUSerData()
