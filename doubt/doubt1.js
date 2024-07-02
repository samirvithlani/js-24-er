var x =100;
console.log("value of x outside block...= ",x)
{
    x =200;
    console.log("value of x inside block...= ",x)
    let p =20
}


console.log("value of x outside block...= ",x)
//console.log("value of p outside block...= ",p) // p is not defined