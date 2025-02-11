const addData =() =>{
    //alert("ok")
    const data = document.getElementById("data")

    const boxes = document.getElementById("boxes") //div
    boxes.innerHTML =""
    for(let i=0;i<data.value;i++){

        
        const box = document.createElement("div")
        box.style.height="30px"
        box.style.width="30px"
        box.style.backgroundColor = "blue"
        box.style.margin = "2px"
        boxes.appendChild(box)


    }


}