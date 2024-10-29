const ball =document.getElementById('ball1');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

ball.addEventListener("mousedown",(event)=>{

    isDragging = true;
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
            if(xPos>=60 && yPos>=51){
                alert("clash")
            }
    }

})

const ball2 =document.getElementById('ball2');
let isDragging2 = false;
let offsetX2 = 0;
let offsetY2 = 0;

ball2.addEventListener("mousedown",(event)=>{

    offsetX = event.clientX - ball2.getBoundingClientRect().left;
    console.log(offsetX)
    offsetY = event.clientY - ball2.getBoundingClientRect().top;
    console.log(offsetY)
})