function test(){

    console.log("test called...")
}

test()


function add(a,b){

    var c = a + b;
    console.log(c)
}

//add(10,20)
add()

function avg(a,b,c){

    return (a+b+c)/3
}

var ans = avg(10,20,30)
console.log("ans = ",ans)
console.log(avg(100,200,300))