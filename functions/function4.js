function add(){

    //with return statement without any argument | parameter
    console.log("add function called...")
    return 100;
}

var ans = add()

console.log("ans = ", ans)


function greet(name){

    // console.log("hello " ,name)

    return "Hello " + name

}
var msg = greet("amit")
console.log("msg = ", msg)