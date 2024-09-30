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

    


}