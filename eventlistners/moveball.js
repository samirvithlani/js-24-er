const ball =document.getElementById('ball');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

//mousedown event
ball.addEventListener("mousedown",(event)=>{
    isDragging = true;
    // console.log(event.clientX)
    // console.log(event.clientY)
    //calculate the offset between the mouse and the ball
    offsetX = event.clientX - ball.getBoundingClientRect().left;
    console.log(offsetX)
    offsetY = event.clientY - ball.getBoundingClientRect().top;
    console.log(offsetY)
    ball.style.cursor = "grabbing";

})
ball.addEventListener("mousemove",(event)=>{

    if(isDragging){
        console.log("x..",event.clientX)
            const xPos = event.clientX - offsetX;
            //772 -41 = 731
            console.log(xPos)
            const yPos = event.clientY - offsetY;
            //778 -32 = 746
            console.log("y..",event.clientY)
            console.log(yPos)
            ball.style.left   = xPos + "px"; //731
            ball.style.top = yPos + "px"; //746
    }


})