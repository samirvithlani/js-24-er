const submitHandler =(event)=>{

    event.preventDefault();
    const checkboxes = document.getElementsByName("sports");
    console.log(checkboxes)
    const output = document.getElementById("output")

    for(let i=0;i<checkboxes.length;i++){
        //cricket chess football
        if(checkboxes[i].checked){
            //console.log(checkboxes[i].value)
            //output.innerHTML= checkboxes[i].value
            //output.innerHTML+=checkboxes[i].value + " "
            //cricekt  = cricket + checkbox[i].value
            output.innerHTML = output.innerHTML + checkboxes[i].value + " "
        }
    }

}