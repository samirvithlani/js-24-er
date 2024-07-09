function isArmstrongno(no){

    let rem =0;
    let sum =0
    let temp = no
    while(no>0){
        rem = no % 10
        sum  =  sum + rem*rem*rem
        no = Math.floor(no/10)

    }

    console.log("sum = ",sum)
    if(temp == sum){
       // console.log("Armstrong no")
       return true
    }
    else{
        //console.log("Not Armstrong no")
        return false
    }




}

//isArmstrongno(153) //153 = 1^3 + 5^3 + 3^3 = 153

if(isArmstrongno(153)){
    console.log("Armstrong no")
}
else{
    console.log("Not Armstrong no")
}