// var no =1
// while(no<=10){
//     console.log("no = ",no)
//     no++
// }
// //count no of digits in a number
//123 -->3

var x = 123

//var ans = x / 10
//console.log("ans = ",ans)
// var ans = Math.floor(x / 10)
// console.log("ans = ",ans)

var num =123
var count =0
//7865
//7865 >0 true
//786>0 true
//78>0 true
//7>0 true
//0>0 false
while(num>0){

    //7865 = 7865/10 = 786
    //786 = 786/10 = 78
    //78 = 78/10 = 7
    //7 = 7/10 = 0
    num = Math.floor(num / 10 )
    count++ //1,2,3,4
}

console.log("count = ",count)



