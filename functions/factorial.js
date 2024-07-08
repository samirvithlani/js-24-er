function getFact(no){

    //5 * 4 * 3* 2*1 = 120
    let fact = 1;
    //i=1
    //i=2
    //i=3
    //i=4
    //i=5
    //i=6
    for(let i=1;i<=no;i++){
            //1 = 1 * 1 = 1
            //1 = 1 * 2 = 2
            //2 = 2 * 3 = 6
            //6 = 6 * 4 = 24
            //24 = 24 * 5 = 120
            //120 = 120 * 6 = 720
            fact = fact * i;


    }

    return fact;
}


var ans = getFact(6);
console.log("ans = ",ans);