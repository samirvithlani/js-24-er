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