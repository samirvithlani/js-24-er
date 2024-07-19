//count...

// var data = "hi this is india"
// var count =0
// for(let i=0;i<data.length;i++){

//  //   console.log(data[i])
//     if(data[i]=="h"){
//         count++
//     }
// }
// console.log("count of i = ",count)

// var data = "hi this is india"
// var count =0
// for(let i=0;i<data.length;i++){

//  //   console.log(data[i])
//     if(data[i]==" "){
//         count++
//     }
// }
// console.log("count of i = ",count+1)

const countWords = (data) => {
  //var data = "hi this is india";
  var count = 0;
  for (let i = 0; i < data.length; i++) {
    //   console.log(data[i])
    if (data[i] == " ") {
      count++;
    }
  }
  return count+1;
};

var cnt = countWords("Hi this is India")
console.log("Count = ",cnt)
