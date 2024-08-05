
function driveBus(){
    console.log('Driving the bus');
}
function driveCar(){
    console.log('Driving the car');
}

function driveBike(){
    console.log('Driving the bike');
}


function driver(drive){

    //drive = driveBus
    console.log("driver test...")
    drive();

}

//
var skill = "car"

if(skill == "bus")
{
    driver(driveBus)
}
else if(skill == "car")
{
    driver(driveCar)
}
else if(skill == "bike"){
    driver(driveBike)
}