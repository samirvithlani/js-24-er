var user = "amit" //string declaration
//string stores data in array:
//a=0,m=1,i=2,t=3
console.log(user)
console.log(user[0]) //a
console.log(user[1]) //m
console.log(user[2]) //i
console.log(user[3]) //t
//console.log(user[4]) //t

//mutablity and immutablity
//js string is immutable
user[0]="A"
console.log(user) //amit

//concatenation
user = user + " is a good"
//user+=" is a good"
console.log(user) 


var len = user.length
console.log(len) //16


user = user.toUpperCase()
console.log(user)

user = user.toLowerCase()
console.log(user)

// ------------------------------------------

var x = user.charAt(1)
console.log(x) //m

var ind = user.indexOf("s")
console.log("index of...",ind) //1

var ind1 = user.lastIndexOf("it")
console.log(".....",ind1) //14



var ind2= user.indexOf("i",3)
console.log(ind2) //5   






