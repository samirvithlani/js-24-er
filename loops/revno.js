function revNo (no){
//123

    let rem = 0
    let rev = 0
    //123>0 true
    //12>0 true
    //1>0 true
    //0>0 false
    while(no>0){
        //rem = 123 % 10 = 3
        //rem = 12 % 10 = 2
        //rem = 1 % 10 = 1
        rem = no % 10
        //rev = 0*10 + 3 = 3
        //rev = 3*10 + 2 = 32
        //rev = 32 * 10 + 1 = 321
        rev = rev*10 + rem
        //no = 123/10 = 12
        //no = 12/10 = 1
        //no = 1/10 = 0
        no = Math.floor(no / 10)

    }


        return rev

}

var ans = revNo(123)
console.log("ans = ",ans)
