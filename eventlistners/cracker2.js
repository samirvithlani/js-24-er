const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
let isDragging1 = false;
let isDragging2 = false;
let offsetX1 = 0, offsetY1 = 0;
let offsetX2 = 0, offsetY2 = 0;

// Function to check collision between two elements
function checkCollision() {
    const rect1 = ball1.getBoundingClientRect();
    const rect2 = ball2.getBoundingClientRect();
    
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

// Ball1 event listeners
ball1.addEventListener("mousedown", (event) => {
    isDragging1 = true;
    offsetX1 = event.clientX - ball1.getBoundingClientRect().left;
    offsetY1 = event.clientY - ball1.getBoundingClientRect().top;
    ball1.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
    if (isDragging1) {
        const xPos = event.clientX - offsetX1;
        const yPos = event.clientY - offsetY1;
        ball1.style.left = xPos + "px";
        ball1.style.top = yPos + "px";
        
        if (checkCollision()) {
            alert("Crash detected!");
            isDragging1 = false;
            isDragging2 = false;
        }
    }
});

document.addEventListener("mouseup", () => {
    isDragging1 = false;
    ball1.style.cursor = "grab";
});

// Ball2 event listeners
ball2.addEventListener("mousedown", (event) => {
    isDragging2 = true;
    offsetX2 = event.clientX - ball2.getBoundingClientRect().left;
    offsetY2 = event.clientY - ball2.getBoundingClientRect().top;
    ball2.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
    if (isDragging2) {
        const xPos = event.clientX - offsetX2;
        const yPos = event.clientY - offsetY2;
        ball2.style.left = xPos + "px";
        ball2.style.top = yPos + "px";
        
        if (checkCollision()) {
            alert("Crash detected!");
            isDragging1 = false;
            isDragging2 = false;
        }
    }
});

document.addEventListener("mouseup", () => {
    isDragging2 = false;
    ball2.style.cursor = "grab";
});
