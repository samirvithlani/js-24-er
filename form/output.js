const getData =()=>{

    

    var users = localStorage.getItem("users")
    console.log(users)

    const output = document.getElementById('output')
    output.innerHTML = users




}