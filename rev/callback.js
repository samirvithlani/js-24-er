

const nameInput = ()=>{

    console.log('name input called...')
}
const emailInput = ()=>{
    console.log('email input called...')
}


const inputHandler = (cb)=>{

    //cb == n
    console.log("input handler....")
    cb()

}

//inputHandler(nameInput)
//inputHandler(emailInput)

var choice = "name"
if(choice=="name"){
    inputHandler(nameInput)
}
else if(choice == "email"){
    inputHandler(emailInput)
}