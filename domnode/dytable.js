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

document.addEventListener("DOMContentLoaded", ()=>{
    var tbody = document.getElementById("tbody"); //<tbody></tbody>
    //to create rows | tr | td run a loop till the length of users
    for(let i=0;i<users.length;i++){

        var tr = document.createElement("tr"); //<tr></tr>

        var idTd = document.createElement("td");//<td></td>
        idTd.innerHTML = users[i].id;//<td>101</td>

        var nameTd = document.createElement("td");//<td></td>
        nameTd.innerHTML = users[i].name;//<td>amit</td>

        var ageTd = document.createElement("td");//<td></td>
        ageTd.innerHTML = users[i].age;//<td>23</td>



        //above created idTd we have to bind to tr
        tr.appendChild(idTd);//<tr><td>101</td></tr>
        tr.appendChild(nameTd);//<tr><td>101</td><td>amit</td></tr>
        tr.appendChild(ageTd);//<tr><td>101</td><td>amit</td><td>23</td></tr>


        //above created tr we have to bind to tbody
        tbody.appendChild(tr);//<tbody><tr></tr></tbody> // <tbody><tr></tr><tr></tr></tbody>

    }
})