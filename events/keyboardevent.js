const getData=(event)=>{
    //console.log('getData',event);
    const txt = document.getElementById('txt'); //<input>tag
    //console.log(txt.value)
    var data = txt.value;
    //console.log(data);

    const result = document.getElementById('result'); //<p>
    result.innerHTML = data;


} 

//task 1

//input [] message enter 5 char 
//inster india --> message