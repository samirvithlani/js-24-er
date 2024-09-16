const getData = () => {

    const txt = document.getElementById('txt'); //<input>tag
    const data = txt.value;
    const result = document.getElementById('result'); //<p>
    if(data.length>=5){
        result.innerHTML = ""
    }
    else{
        result.innerHTML = "Enter 5 characters"
    }
    


}