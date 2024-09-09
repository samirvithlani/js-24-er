const imagesArray = ["java.png","js.png","mongo.png","python.png"]


const getImage = ()=>{
    const randomIndex = Math.floor(Math.random() *imagesArray.length)
    // console.log(randomIndex)
    // console.log(imagesArray[randomIndex])
    const myimage = document.getElementById("myimage")
    //console.log(myimage)
    myimage.src =  imagesArray[randomIndex]
}
