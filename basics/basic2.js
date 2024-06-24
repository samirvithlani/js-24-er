var x =10
//function, block
{
    let p = 20 // block scope
    console.log("value of p inside block = ",p)
    console.log("value of x inside block = ",x)
}

console.log("value of x =",x)
//console.log("value of  p = ",p) error...



var no1 = 100 //global scope
let no2 = 200 //block scope

console.log("value of no1 = ",no1)
console.log("value of no2 = ",no2)

var no1 = 500
console.log("value of no1 = ",no1)
//let no2 = 400;