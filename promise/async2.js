const searchDish = () => {
    console.log("searching dish...");
  
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: "1001",
          name: "pizza",
          rest: "Dominos",
          qty: 1,
          price: 400,
        });
      }, 3000);
    });
    return promise;
  };
  
  const addToCart = (dishData) => {
    console.log("adding dish to cart...");
  
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dishData);
      }, 2000);
    });
  
    return promise;
  };
  
  const payment = (cartData) => {
    console.log("payment started....");
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ trascationId: "19890", cartData });
      }, 4000);
    });
    return promise;
  };
  
  const zomato = async() => {
    console.log("welcome to zomato...");
    const dish = await searchDish()
    console.log(dish)
    const cart = await addToCart(dish)
    console.log(cart)
    const pay  = await payment(cart)
    console.log(pay)
    
  };
  
  zomato();
  