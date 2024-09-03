//const numbers  = [100,200,400,500,600,43,5678,89,123,45,789]
const numbers =[1,2,3,4,5,6]

const getData= ()=>{

//console.log("called...")
//how to generate random number

//we are able to generate rabdom index
var randomNO = Math.floor(Math.random()*numbers.length)
//console.log(randomNO)//9
console.log(numbers[randomNO])

const txt = document.getElementById("txt"); //<p>
txt.innerHTML = numbers[randomNO] //789

if(numbers[randomNO]===1){
    txt.innerHTML = " * "
}
else if(numbers[randomNO]===2){
    txt.innerHTML = " * * "
}
else if(numbers[randomNO]===3){
    txt.innerHTML = " * * *"
}
else if(numbers[randomNO]===4){
    txt.innerHTML = " * * "
}
else if(numbers[randomNO]===5){
    txt.innerHTML = " * * "
}
else if(numbers[randomNO]===6){
    txt.innerHTML = " * * "
}

}