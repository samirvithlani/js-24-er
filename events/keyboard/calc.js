const calc =()=>{

    const num1 =parseInt(document.getElementById('num1').value);
    const num2 =parseInt(document.getElementById('num2').value)
    const operator =document.getElementById('operator').value;

    var ans;

    switch(operator){

        case "+":
            ans = num1+num2;
        break;   
        case "-":
            ans = num1-num2;
        break; 
        default:
            ans = "Invalid operator";
        break;  
    }


    console.log(ans)
    const result = document.getElementById('result');
    result.innerHTML = ans;




}