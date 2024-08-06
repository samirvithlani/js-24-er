//callbackfunction param...
const auto = (name)=>{
    console.log("auto driver is: "+name);
}
const car = (name)=>{
    console.log("Car driver is: "+name);
}
const bike = (name)=>{
    console.log("Bike driver is: "+name);
}


const bookRide = (name,cb)=>{

    console.log("Name is: "+name);
    //name ==" raj"
    //cb == auto
    cb(name);


}

bookRide("Raj",car)