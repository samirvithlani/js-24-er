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

        var updateButton = document.createElement("button");//<button></button>
        updateButton.innerHTML = "Update";//<button>Update</button>
        updateButton.className = "btn btn-warning";


        actionTd.appendChild(detailButton);//<td><button>Detail</button></td>
        actionTd.appendChild(deleteButton);//<td><button>Detail</button><button>Delete</button></td>
        actionTd.appendChild(updateButton);//<td><button>Detail</button><button>Delete</button><button>Update</button></td

        updateButton.addEventListener("click",()=>{
            updateUser(user); //update..
        })


        //above created idTd we have to bind to tr
        tr.appendChild(idTd);//<tr><td>101</td></tr>
        tr.appendChild(nameTd);//<tr><td>101</td><td>amit</td></tr>
        tr.appendChild(ageTd);//<tr><td>101</td><td>amit</td><td>23</td></tr>
        tr.appendChild(actionTd);//<tr><td>101</td><td>amit</td><td>23</td><td><button>Detail</button></td></tr>


        //above created tr we have to bind to tbody
        tbody.appendChild(tr);//<tbody><tr></tr></tbody> // <tbody><tr></tr><tr></tr></tbody>

    
}

const updateUser = (user)=>{
    console.log("we are about to update  ",user);
    const updateRoot = document.getElementById("updateRoot");//<div></div>
    //form cration
    const form = document.createElement("form");//<form></form>

    const idLabel = document.createElement("label");//<label></label>
    idLabel.innerHTML = "Id";//<label>Id</label>
    const idInput = document.createElement("input");//<input></input>
    idInput.type = "text";//<input type="text"></input>
    idInput.id = "updateId"; //<input type="text" id="updateId"></input>
    idInput.value = user.id;
    idInput.disabled = true;
    //<input type ="text" id = "updateId" value="101" disabled></input>
    
    const nameLabel = document.createElement("label");//<label></label>
    nameLabel.innerHTML = "Name";//<label>Name</label>
    const nameInput = document.createElement("input");//<input></input>
    nameInput.type = "text";//<input type="text"></input>
    nameInput.id = "updateName";//<input type="text" id="updateName"></input>
    nameInput.value = user.name;

    const ageLabel = document.createElement("label");//<label></label>
    ageLabel.innerHTML = "Age";//<label>Age</label>
    const ageInput = document.createElement("input");//<input></input>
    ageInput.type = "text";//
    ageInput.id = "updateAge";
    ageInput.value = user.age;

    form.appendChild(idLabel);//<form><label>Id</label></form>
    form.appendChild(idInput);//<form><input type="text" id="updateId"></input></form>
    form.appendChild(nameLabel);//<form><input type="text" id="updateId"></input><label>Name</label></form>
    form.appendChild(nameInput);//<form><input type="text" id="updateId"></input><input type="text" id="updateName"></input></form>
    form.appendChild(ageLabel);//<form><input type="text" id="updateId"></input><input type="text" id="updateName"></input><label>Age</label></form>
    form.appendChild(ageInput);//<form><input type="text" id="updateId"></input><input type="text" id="updateName"></input><input type="text" id="updateAge"></input></form>

    const submitButton = document.createElement("button");//<button></button>
    submitButton.innerHTML = "Submit";//<button>Update</button>
    submitButton.className = "btn btn-warning";
    submitButton.type = "submit";

    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("Form submitted")
        const updatedId = document.getElementById("updateId").value;
        const updatedName = document.getElementById("updateName").value;
        const updatedAge = document.getElementById("updateAge").value;

        console.log(updatedId,updatedName,updatedAge);
        

        
    })

    form.appendChild(submitButton);//<form><input type="text" id="updateId"></input><input type="text" id="updateName"></input><input type="text" id="updateAge"></input><button>Update</button></form>

    updateRoot.appendChild(form)







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

