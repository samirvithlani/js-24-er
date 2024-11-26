var users = [
    {
        id:101,
        name:"raj",
        age:23
    },
    {
        id:102,
        name:"ram",
        age:24
    }
]

const addUserToTable = (user)=>{

    const tbody = document.getElementById("tbody");
    const tr = document.createElement("tr");

    const idTd = document.createElement("td");
    idTd.innerHTML = user.id;

    const nameTd = document.createElement("td");
    nameTd.innerHTML = user.name;

    const ageTd = document.createElement("td");
    ageTd.innerHTML = user.age;

    const actionTd = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger";

    deleteButton.addEventListener("click",()=>{
        tr.remove();
    })

    const updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.className = "btn btn-primary";

    updateButton.addEventListener("click",()=>{
        updateUser(user)
    })

    actionTd.appendChild(deleteButton);
    actionTd.appendChild(updateButton);
    
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(ageTd);
    tr.appendChild(actionTd);

    tbody.appendChild(tr);

}

const handleSubmit = (event)=>{

    event.preventDefault();
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const userObj = {
        id:id,
        name:name,
        age:age
    }

    addUserToTable(userObj); // add user to table
    users.push(userObj); // add user to array



}


document.addEventListener("DOMContentLoaded",()=>{

    users.forEach((user)=>{
        addUserToTable(user);
    })

})

const updateUser = (user)=>{


    const updateRoot = document.getElementById("updateRoot");
    //form creation....
    const form = document.createElement("form");

    const idLabel = document.createElement("label");
    idLabel.innerHTML = "Id";
    const idInput = document.createElement("input");
    idInput.type = "text";
    idInput.value = user.id;
    idInput.id = "updateId"; //<input id="updateId" type="text" value="101">
    idInput.disabled = true;

    const nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = user.name;
    nameInput.id = "updateName";

    const ageLabel = document.createElement("label");
    ageLabel.innerHTML = "Age";
    const ageInput = document.createElement("input");
    ageInput.type = "text";
    ageInput.value = user.age;
    ageInput.id = "updateAge";

    form.appendChild(idLabel);
    form.appendChild(idInput);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(ageLabel);
    form.appendChild(ageInput);

    
    const submitinput = document.createElement("input")
    submitinput.type = "submit";
    form.appendChild(submitinput);

    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const updateId = document.getElementById("updateId").value;
        const updateName = document.getElementById("updateName").value;
        const updateAge = document.getElementById("updateAge").value;

        //find array...
        const foundUser = users.find((user)=>user.id == updateId);
        if(foundUser){
            foundUser.name = updateName;
            foundUser.age = updateAge;
        }
        //console.log(foundUser);
        console.log(users);
        //clear table..
        const tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        //add updated users to table
        users.forEach((user)=>{
            addUserToTable(user);
        })


    })

    updateRoot.appendChild(form);




}