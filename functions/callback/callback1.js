function toBeaCalled(){

    console.log("I am called");
}
const getCalled = ()=>{
    console.log("I am get called...");
}

function add(a){

    console.log(a);
    a();
}

// add(100)
// add("abc")
// add(true)
// add({name:"Ravi"})
add(toBeaCalled)
add(getCalled)