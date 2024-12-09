const getLocation =()=>{


    navigator.geolocation.getCurrentPosition((postion)=>{
        console.log(postion)
        console.log("lat",postion.coords.latitude)
        console.log("long.",postion.coords.longitude)
    })  


}
getLocation()