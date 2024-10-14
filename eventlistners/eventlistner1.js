const button = document.getElementById("btn")

button.addEventListener("click",function(){
    button.style.backgroundColor = "red"
})
button.addEventListener("mouseover",function(){
    button.style.backgroundColor = "blue"
})
button.addEventListener("mouseout",function(){
    button.style.backgroundColor = "green"
})
 button.addEventListener("dblclick",function(){
    button.style.backgroundColor = "yellow"
 })

 const link = document.getElementById("link")
 link.addEventListener("click",function(){
    link.target = "_blank"
    link.href = "https://www.abc.com"
 })


 const box = document.getElementById("box")
 box.addEventListener("click",()=>{
    box.style.backgroundColor = "red"
 })
 box.addEventListener("mouseover",()=>{
    box.style.height="400px"
    box.style.width="400px"
    const image = document.getElementById("image")
    image.style.height="400px"
    image.style.width="400px"
    image.src = "./abc.png"
    
 })
 box.addEventListener("mouseleave",()=>{
    box.style.height="200px"
    box.style.width="200px"
    const image = document.getElementById("image")
    image.style.height="200px"
    image.style.width="200px"
    image.src = ""
    
 })