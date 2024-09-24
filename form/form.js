const submitHandler =(event)=>{
    event.preventDefault(); // Prevents the default action of the form
    console.log("Form Submitted");
    const name = document.getElementById("name")//<input type="text" id="name">
    const email = document.getElementById("email")//<input type="email" id="email">
    const country = document.getElementById("country")//<select id="country
    console.log("name = ",name.value);
    console.log("email = ",email.value);
    console.log("country = ",country.value);


    const gender = document.getElementsByName("gender")//inputfemale intputmale

    for(let i=0;i<gender.length;i++){

        if(gender[i].checked){
            console.log(gender[i].value)
        }


    }
    



}