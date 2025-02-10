var users = ["ram", "shyam", "hari", "geeta"];
// console.log(users[0])

// for(let i=0;i<users.length;i++){
//     console.log(users[i])
// }

users.push("seeta");
users.unshift("krishna");

// var removedElm = users.pop()
// console.log("remoing....",removedElm)

// var flag = confirm("are you sure you want to delete last eml??");
// if (flag == true) {
//   var removedElm = users.pop();
//   console.log("remoing....", removedElm);
// }


//console.log(users)
//1st index pos
//2nd delete count..
//users.splice(1,1)
//users.splice(1,2,"dashrath")
//users.splice(1,0,"rukshmani")

//console.log(users)

// users.forEach((user) => {
//   console.log(user);
// });
console.log(users)
//users.sort()
users.sort((a,b)=>a.length-b.length)
console.log(users)


var data = [100,2,78,45,67,345,567,8900,9000,19000]

console.log(data)
//data.sort()
data.sort((a,b)=>a-b)
console.log(data)

//var data = [100,2,78,45,67,345,567,8900,9000,19000]

// var flag = data.some((d)=>{
//     return d>=10000
// })
var flag = data.every((d)=>{
    return d>=0
})
console.log(flag)
