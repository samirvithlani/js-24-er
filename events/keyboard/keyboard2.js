const getName =()=>{

    const txt = document.getElementById("txt"); //<p></p>
    const nameError = document.getElementById("nameError");//<span></span>

    const name  = document.getElementById('name')
    //console.log(name.value)
    //txt.innerHTML = name.value;//<p>name</p>
    if(name.value.length<5){
        nameError.innerHTML = "Name must be at least 5 characters";
    }else{
        nameError.innerHTML = "";
        txt.innerHTML = name.value;
    }
}