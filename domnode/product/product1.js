const products = [
    {
        id:1,
        name:"Iphone 16",
        price:1200,
        colors:["red","blue"],
        imageUrl:"https://www.reliancedigital.in/medias/Apple-iPhone-16-494423014-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjc4MnxpbWFnZS9qcGVnfGltYWdlcy9oMWYvaGZkLzEwMTk1ODE4MjUwMjcwLmpwZ3xkYWQ2OGQ1YmFjYjdlOTlmZjk5OGQ1Y2NjOWU3ZWU5OWY5M2IzNjEyMmM2NjNkYzMxZDhlOTJlMjdiY2E1MWYx",
        isAvailable:true
    },
    {
        id:2,
        name:"ipad mini",
        price:900,
        colors:["silver","black"],
        imageUrl:"https://via.placeholder.com/150",
        isAvailable:false

    },
    {
        id:3,
        name:"lenove legion",
        price:1000,
        colors:["black"],
        imageUrl:"https://via.placeholder.com/150",
        isAvailable:false

    }
]

const createProductDiv = (product)=>{
    
    const product_container  = document.getElementById("product-container") //<div>

    const productCard = document.createElement("div") //<div>
    productCard.className = "product-card"

    const productImage = document.createElement("img")
    productImage.src = product.imageUrl;
    productImage.style.height="150px"
    productImage.style.width="150px"
    

    const productTitle = document.createElement("h3")
    productTitle.innerHTML = product.name
    productTitle.className="product-title"


    const productColors = document.createElement("div")
    productColors.className="product-colors"

    for(let i=0;i<product.colors.length;i++){

        const span = document.createElement("span")
        span.className="color-box"
        span.style.backgroundColor=product.colors[i];
        productColors.appendChild(span)
    }


    const status = document.createElement("p")
    if(product.isAvailable == true){
        status.innerHTML = "Available"
        status.style.color = "green"
    }
    else{
        status.innerHTML = "Not Avaialble"
        status.style.color = "red"
    }



    productCard.appendChild(productImage)
    productCard.appendChild(productTitle)
    productCard.appendChild(status)
    productCard.appendChild(productColors)


    product_container.appendChild(productCard)

    

}



document.addEventListener("DOMContentLoaded",()=>{


    
    //createProductDiv(products[0])
    // for(let i=0;i<products.length;i++){
    //     createProductDiv(products[i])
    // }

    products.forEach((pr)=>{
        createProductDiv(pr)
    })


})