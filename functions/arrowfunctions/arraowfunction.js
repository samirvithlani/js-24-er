function test(){
    console.log("Test");
}


const test1 = ()=>
{
    console.log("Test1");
}


function add(a,b){
    return a + b
}

var ans = add(10,20)
console.log("ans -->",ans)


const add1 = (a,b)=>{
    return a + b
}

//single line
//{} without {} no need of return statment

const add2 =(a,b)=> a + b

var ans1 = add1(10,200)
console.log("ans1 -->",ans1)

var ans2 = add2(100,90)
console.log("ans2 -->",ans2)



const avg = (a,b,c)=> (a+b+c)/3

// var avgans = avg(10,20,30)
// console.log("avgans -->",avgans)

console.log("average = ",avg(10,20,30))








