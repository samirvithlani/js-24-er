const submitHandler = (event)=>{

    event.preventDefault() //

    const nameError = document.getElementById("nameError")
    const ageError = document.getElementById("ageError")
    const genderError = document.getElementById("genderError")


    const nameValue = document.getElementById("nameValue")
    const ageValue = document.getElementById("ageValue")
    const genderValue = document.getElementById("genderValue")

    const name = document.getElementById("name")
    //const name1 = document.querySelector("#name")
    console.log(name.value)

    const age = document.getElementById("age")
    console.log(age.value)


    //flag for gender
    var genderFlag = false;
    const gender = document.getElementsByName("gender") //<array>
    for(let i=0;i<gender.length;i++){

        if(gender[i].checked){
            console.log(gender[i].value)
            genderFlag = true
            genderValue.innerHTML = gender[i].value
        }
    }


    //validations....

    if(name.value.length<=0){
        nameError.innerHTML = "Name is required*"
    }
    else{
        nameError.innerHTML = ""
        nameValue.innerHTML = name.value
    }
    if(name.value.length<=0){
        ageError.innerHTML = "Age is required*"
    }
    else{
        ageError.innerHTML = ""
        ageValue.innerHTML = age.value
    }
    if(genderFlag == false){
        genderError.innerHTML = "gender is required*"
    }
    else{
        genderError.innerHTML = ""
        
    }
    
}