const checkName =()=>{

    const name = document.getElementById("name")
    //min 3 char max 10 
    if(name.value.trim().length<=3){
        const nameError = document.getElementById('nameError')
        nameError.innerHTML = 'Name is required and should be at least 3 characters'
    }
    else if(name.value.trim().length>10){
        const nameError = document.getElementById('nameError')
        nameError.innerHTML = 'Name should not exceed 10 characters'
    }
    else{
        const nameError = document.getElementById('nameError')
        nameError.innerHTML = ''
    }

    



}