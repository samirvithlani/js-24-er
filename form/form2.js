const handleSubmit = (event)=>{

    event.preventDefault();

    const name = document.getElementById('name')//<input type="text" id="name">
    if(name.value.trim()==="" || name.value.trim().length<3){
        //alert('Name is required and should be at least 3 characters')
        const nameError = document.getElementById('name-error')
        nameError.innerHTML = 'Name is required and should be at least 3 characters'
        nameError.style.color = 'red'
        name.style.outline = '1px solid red'
        name.focus()
    }
    else{
        const nameError = document.getElementById('name-error')
        nameError.innerHTML = ''
        name.style.outline = '1px solid green'
        console.log(name.value)
    }

    const email = document.getElementById('email')//<input type="email" id="email">
    if(!email.value.includes("@") ||  !email.value.endsWith (".com")){
        const emailError = document.getElementById('email-error')
        emailError.innerHTML = 'Email is required and should be valid'
        emailError.style.color = 'red'
        email.style.outline = '1px solid red'
    }
    else{
        const emailError = document.getElementById('email-error')
        emailError.innerHTML = ''
        email.style.outline = '1px solid green'
        console.log(email.value)
    }
    


}