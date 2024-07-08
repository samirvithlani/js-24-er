function printNos(sp,ep){
    // console.log("sp = ",sp);
    // console.log("ep = ",ep);

    for(let i=sp;i<=ep;i++){
        console.log(i);
    }

}

//printNos(100,120);

function sumofdata(sp,ep){
//1,10
    let sum=0
    for(let i=sp;i<=ep;i++){
        //0 = 0 + 1 =sum =1
        //1 = 1 + 2 =sum =3
        //3 = 3 + 3 =sum =6
        //6 = 6 + 4 =sum =10
        //10 = 10 + 5 =sum =15
        //15 = 15 + 6 =sum =21
        //21 = 21 + 7 =sum =28
        //28 = 28 + 8 =sum =36
        //36 = 36 + 9 =sum =45
        //45 = 45 + 10 =sum =55
        sum = sum + i

    }
    //console.log("sum = ",sum);
    return sum;


}

var ans = sumofdata(1,10);
console.log("ans = ",ans);

var ans2 = sumofdata(1,1000)
console.log("ans2 = ",ans2);