var users = [
    {
        id:101,
        name:"amit",
        age:23
    },
    {
        id:102,
        name:"raj",
        age:24
    },
    {
        id:103,
        name:"kunal",
        age:24
    }
]


const findUser = ()=>{


        const txt = document.getElementById("txt").value
        //console.log(txt)
        var promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(
                     users.find((user)=>{
                        return user.name == txt
                    })
                )        
            }, 3000);
        })
        
        console.log("searching user...")
        promise.then((data)=>{
            const result = document.getElementById("result")
            console.log(data)
            if(data!=undefined){
                result.innerHTML = "user found..."
            }
            else{
                result.innerHTML = "user not found..."
            }
        })


}