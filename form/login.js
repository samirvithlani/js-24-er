
var users = [
    {
        id:1,
        name: 'raj',
        email:"raj@gmail.com",
        password: "1234"
    },
    {
        id:2,
        name: 'ram',
        email:"ram@gmail.com",
        password: "1234"
    }
]

function submitHandler(event){
    event.preventDefault()

    //email --> password --> db --> email exist --> if exist-->password match ->
    ///if match --> localStorage.setItem('email', email) --> redirect to home page

    const email = document.getElementById('email') //<input type="email" id="email">
    const password = document.getElementById('password') //<input type="password" id="password">

//     var findUserWithEmail1; 

//     for(let i=0;i<users.length;i++){
// 1
//         if(users[i].email === email.value){
//             findUserWithEmail1 = users[i]
//         }

//     }




    const findUserWithEmail  = users.find((user)=>user.email == email.value && user.password == password.value)
    console.log(findUserWithEmail) //{raj}

    if(findUserWithEmail==undefined){
        alert("Invalid email or password")
    }
    else{
        alert("Login Success")
        localStorage.setItem("id",findUserWithEmail.id) //1 2
    }


}