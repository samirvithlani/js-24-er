const submitHandler =(event)=>{
    event.preventDefault()
    const name = document.getElementById('name')
    const email = document.getElementById('email')

    //validation...

    const user = {
        name: name.value,
        email: email.value
    }
    console.log(user)
    //convert object to string....

    // const strObj = JSON.stringify(user)
    // console.log(strObj)

    //localStorage.setItem("user",user)[object object]
    localStorage.setItem("user",JSON.stringify(user))


}


// const storeData = ()=>{

//     localStorage.setItem("name","amit")
// }
// storeData()
