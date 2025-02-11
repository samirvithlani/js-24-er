const body = document.getElementsByTagName("body")[0]
console.log(body)


const h1 = document.createElement("h1")
h1.innerHTML = "hello"

body.appendChild(h1)


const div = document.createElement("div")
div.className="box"

const smallbox = document.createElement("div")
smallbox.style.height="200px"
smallbox.style.width="200px"
smallbox.style.display="flex"
smallbox.style.justifyContent="center"
smallbox.style.backgroundColor="black"

div.appendChild(smallbox)



body.appendChild(div)