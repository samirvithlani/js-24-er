//pop ->last remove
//push --> last data add
//shift --> first remove
//unshift --> first add

var data = ["java","python","c","cpp","ruby","php"];

console.log(data);


//data.splice(1,1) //1st index , delete count
//data.splice(3,2)//3rdindex 2 data delete
//data.splice(1,1,"javascript") //1st index , delete count, add data
//data.splice(2,0,"js","ts")//2nd index , delete count, add data
var x = data.splice(2,3,"js","ts")//2nd index , delete count, add data
console.log("removed element..",x);
console.log(data);




