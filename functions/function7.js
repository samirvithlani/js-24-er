//age =21
function checkEligibility(age) {
    

    if(age>=18){
        return true
    }
    else{
        return false
    }

}

var alg = checkEligibility(21)
console.log(alg)

if(alg == true){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}


// var alg1 = checkEligibility(19)

// if(alg1==true){
//     console.log("You are eligible to driving")
// }
// else{
//     console.log("You are not eligible to driving")
// }
// //if function return type is boolean then we can directly use the function in if condition



if(checkEligibility(55)){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}




