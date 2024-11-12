const loadData =()=>{

    const root = document.getElementById('root');//<div id="root"></div>
    const h1tag1 = document.createElement('h1');
    h1tag1.innerHTML = "Hello World";

    root.appendChild(h1tag1);


    var users = ["ram","shyam","hari","sita","gita"];

    for(let i=0;i<users.length;i++){    

        const ptag = document.createElement('p'); //<p></p> <p></p>
        ptag.innerHTML = users[i];//<p>ram</p><p>shyam</p>
        root.appendChild(ptag);//<div id="root"><p>ram</p> <p>shyam</p></div>

    }





}