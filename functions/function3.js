//with param | arguments without return type

function checkAge(age){

    if(age<=18){
        console.log("You are a minor")
    }
    else{
        console.log("You are a major")
    }


}

function findMax(a,b,c){

    if(a>b && a>c){
        console.log("a is max ",a)
    }
    else if(b>a && b>c){
        console.log("b is max ",b)
    }
    else{
        console.log("c is max ",c)
    }


}


checkAge(100)

findMax(10,100,70)
findMax(1000,10,70000)




