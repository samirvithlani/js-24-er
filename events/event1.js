const clickme = ()=>{
    //console.log('clicked');
    // console.log(document.getElementById("txt"))
    // console.log(document.getElementById("txt").innerHTML)
    //const txt = document.getElementById("txt").innerHTML;
    const txt = document.getElementById("txt"); //<p>
    console.log(txt.innerHTML)//<p>hello</p>
    txt.innerHTML = "HI"
    txt.style.color = "red"
    txt.style.backgroundColor = "yellow"
    txt.style.width = "300px"
    txt.style.height = "100px"
}