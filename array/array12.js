var marks = [67,89,78,66,45]

// var newmarks=[]

// for(let i=0;i<marks.length;i++){

//     if(marks[i]>=70){
//         newmarks.push(marks[i])
//     }
// }

// var newmarks = marks.filter((m)=>{

//     //67 >= 70 false
//     //89 >= 70 true //push
//     return m>=70;
// })

var newmarks = marks.filter((m)=>m>=70)
console.log(newmarks);

var data = ["ram","shyam","hari","kishan"]

var newData =  data.filter((d)=>{
    return d.length>4
})
console.log(newData);

var newData1 = data.filter((d)=>d.includes("h"))
console.log(newData1);

var data1 = ["naman", "madam", "racecar", "level"];
function reverseString(str) {
  //royal
  var revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //4//3//2//1//0
    revstr = revstr + str[i]; //a
    //revstr ="layor"
  }

//  console.log("reverse string...", revstr);
  if (str == revstr) {
    //return console.log("String is palindrome...");
    return true;
  } else {
    //console.log("String is not palindrome...");
    return false;
  }
}

var palindromeName = data1.filter((d)=>{

    return reverseString(d)
})
console.log(palindromeName);