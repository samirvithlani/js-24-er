// var score = [[100,20],[110,23],[90,78]]

// var ans= score.map((x)=>{
//     return x.map((s)=>{
//         return s+100
//     })
// })
// var ans1= score.flatMap((x)=>{
//     return x.map((s)=>{
//         return s+100
//     })
// })
// console.log(ans)
// console.log(ans1)



var users = [["lalit","ram"],["shyam","sandeep"],["kunal","ajay"]]

var flatData = users.flatMap((user)=>{
    return user
})

console.log(flatData)
