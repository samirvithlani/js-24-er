var users = [
    {
        id:101,
        name:"amit",
        age:23
    },
    {
        id:102,
        name:"sumit",
        age:25
    },
    {
        id:103,
        name:"ram",
        age:24
    },
    {
        id:104,
        name:"shyam",
        age:26
    },
    {
        id:105,
        name:"mohan",
        age:27
    }
]

const addUserToTable = (user)=>{
    var tbody = document.getElementById("tbody"); //<tbody></tbody>
    //to create rows | tr | td run a loop till the length of users
    

        var tr = document.createElement("tr"); //<tr></tr>

        var idTd = document.createElement("td");//<td></td>
        idTd.innerHTML = user.id;//<td>101</td>

        var nameTd = document.createElement("td");//<td></td>
        nameTd.innerHTML = user.name;//<td>amit</td>

        var ageTd = document.createElement("td");//<td></td>
        ageTd.innerHTML = user.age;//<td>23</td>

        var actionTd = document.createElement("td");//<td></td>
        var detailButton = document.createElement("button");//<button></button>
        detailButton.innerHTML = "Detail";//<button>Detail</button>
        //detailButton.style.backgroundColor = "blue";
        detailButton.className = "btn btn-primary";

        //bind listener to button
        detailButton.addEventListener('click',()=>{
            alert("Detail of  " + user.name);
        })


        var deleteButton = document.createElement("button");//<button></button>
        deleteButton.innerHTML = "Delete";//<button>Delete</button>
        deleteButton.className = "btn btn-danger";

        deleteButton.addEventListener("click",()=>{
            tr.remove();
        })


        actionTd.appendChild(detailButton);//<td><button>Detail</button></td>
        actionTd.appendChild(deleteButton);//<td><button>Detail</button><button>Delete</button></td>


        //above created idTd we have to bind to tr
        tr.appendChild(idTd);//<tr><td>101</td></tr>
        tr.appendChild(nameTd);//<tr><td>101</td><td>amit</td></tr>
        tr.appendChild(ageTd);//<tr><td>101</td><td>amit</td><td>23</td></tr>
        tr.appendChild(actionTd);//<tr><td>101</td><td>amit</td><td>23</td><td><button>Detail</button></td></tr>


        //above created tr we have to bind to tbody
        tbody.appendChild(tr);//<tbody><tr></tr></tbody> // <tbody><tr></tr><tr></tr></tbody>

    
}

document.addEventListener("DOMContentLoaded", ()=>{

        users.forEach((user)=>{
            addUserToTable(user); //5
        })
   
})


const handleSubmit = (event)=>{
    event.preventDefault();
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    var userObj  ={
        id:id,
        name:name,
        age:age
    }
    console.log(userObj)
    //users.push(userObj);
    addUserToTable(userObj); //6 7 8 
    

}

