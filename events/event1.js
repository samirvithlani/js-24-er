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

const chnageLink = ()=>{

    const link = document.getElementById("link");
    setTimeout(()=>{
        link.href = "https://www.netflix.com";
        link.innerHTML = "Netflix"
        alert("link changed")
    },3000)
    // link.href = "https://www.netflix.com";
    // link.innerHTML = "Netflix"
}


//setTimeOut

// setTimeout(()=>{
//     console.log("3 seconds passed")
// },3000)

const changeShape = ()=>{
    const mydiv = document.getElementById("mydiv");
    mydiv.style.width = "200px";
    mydiv.style.height = "200px";
    mydiv.style.backgroundColor = "red";
    mydiv.style.borderRadius = "50%";
}