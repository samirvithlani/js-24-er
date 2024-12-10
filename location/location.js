const getLocation =()=>{


    navigator.geolocation.getCurrentPosition((postion)=>{
        console.log(postion)
        console.log("lat",postion.coords.latitude)
        console.log("long.",postion.coords.longitude)
    })  


}
getLocation()
var cr;
const getLiveLocation = () =>{


    navigator.geolocation.watchPosition((postion)=>{
        console.log(postion)
        console.log("lat",postion.coords.latitude)
        cr = postion.coords.latitude;
        console.log("long.",postion.coords.longitude)

    })

}
getLiveLocation()



//distance calulator.. : curren lat long... swaswtik -->
//freeze calulator..   : current 10sec : i m frreeze