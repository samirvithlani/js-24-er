const drawShape =()=>{

    const shape =document.getElementById('shape').value; //box/ circle //,,,
    const draw =document.getElementById('draw'); //canvas //div
    switch(shape){

        case "box":
            draw.className = "box";
            break;
        case "circle":
            draw.className = "circle";
            break;
        default:
            draw.innerHTML = "Please select a shape";
            break;        


    }


}