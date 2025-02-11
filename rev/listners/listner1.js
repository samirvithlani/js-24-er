window.addEventListener("DOMContentLoaded",()=>{

    const btn = document.getElementById("btn")//<button>
    btn.addEventListener('click',()=>{
        alert("button clicked...")
    })
    btn.addEventListener("mouseover",()=>{
        btn.style.backgroundColor="red"
    })
    btn.addEventListener("mouseleave",()=>{
        btn.style.backgroundColor="green"
    })
})