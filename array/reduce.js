var marks = [12,22,33,44,55,66]
// var sum =0;
// for(let i=0;i<marks.length;i++){

//     sum = sum + marks[i]
// }
// console.log("sum...",sum)

// var ans = marks.reduce((sum,mark)=>{
//     //sum = 0, mark = 12 -->12
//     //sum =12 , mark = 22 -->34
//     //sum = 34, mark = 33 -->67
//     //sum = 67, mark = 44 -->111
//     //sum = 111, mark = 55 -->166
//     //sum = 166, mark = 66 -->232
//     return sum+mark
// },0)
// console.log(ans)

var ans = marks.reduce((sum,mark)=>sum+mark,100)
console.log(ans)