
var emailList =["ram@gmail.com","amit@gmail.com","ganesh@gmail.com"]


function getEmail(){

    const emailres = document.getElementById('emailRes');//<span></span>
    //console.log('blur event fired')
    const email = document.getElementById('email').value;
    var flag = emailList.includes(email)
    // console.log(flag)
    // //console.log(email)
    if(flag==true){
        emailres.innerHTML = "Email already exists"
    }else{
        emailres.innerHTML = "Email available"
    }
}