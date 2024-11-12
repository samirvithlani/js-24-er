const loadImage = ()=>{


    const root = document.getElementById('root'); //<div id="root"></div>
    const imageTag = document.createElement('img'); //<img>
    imageTag.src =" ./manalimountain.jpg" //<img src="./manalimountain.jpg">
    imageTag.style.width = "100%"; //<img src="./manalimountain.jpg" width="100%">
    imageTag.style.height = "100%";//<img src="./manalimountain.jpg" width="100%" height="100%">


    root.appendChild(imageTag); //<div id="root"><img></div>



}
//images -->array store -->