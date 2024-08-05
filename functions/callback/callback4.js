

const lasVegas = ()=>{
    console.log("Reached Las Vegas");
}

const amsterdam = ()=>{
    console.log("Reached Amsterdam");
}

const goa = ()=>{
    console.log("Reached Goa");
}

const trip = (cb)=>{

        console.log("Trip started");
        cb()
}


var budget = 200000
if(budget>=20000 && budget <=30000){
    trip(goa)
}
else if(budget>=200000 && budget <=300000){
    trip(lasVegas)
}
if(budget>=300000 && budget <=350000){
    trip(amsterdam)
}