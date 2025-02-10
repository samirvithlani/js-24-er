var users = ["ram", "shyam", "hari", "geeta","seeta"];


var upperUser = users.map((u)=>{
    return u.toUpperCase()
})

// for(let i=0;i<users.length;i++){

//     upperUser.push(users[i].toUpperCase())
// }
console.log(upperUser)

var filtArray = users.filter((u)=>{
    return u.startsWith("s")
})
// for(let i=0;i<users.length;i++){

//     if(users[i].startsWith("s")){
//         filtArray.push(users[i])

//     }
// }
console.log(filtArray)



var sales = [100,20,300,40,500,60]

var saleswProfit = sales.map((s)=>{
    return s + s * 0.10
})
console.log(saleswProfit)
var filtsales = saleswProfit.filter((s)=>{
    return s>=300
})
console.log(filtsales)



var totalSales = 0;
for(let i=0;i<sales.length;i++){

    totalSales = totalSales + sales[i]
}
console.log(totalSales)


var ans = sales.reduce((prv,next)=>prv+next,0)
console.log(ans)



