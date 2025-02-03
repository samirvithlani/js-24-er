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

const zomato = () => {
  console.log("welcome to zomato...");
  var dish = searchDish();
  dish.then((dishData) => {
    console.log("dish found....", dishData);
    var cart = addToCart(dishData);
    cart.then((cartData) => {
      console.log("item added to cart successfully...");
      console.log(cartData);
      var pay = payment(cartData);
      pay.then((paymentData) => {
        console.log("payment done", paymentData);
      });
      pay.catch((err) => {
        console.log(err);
      });
    });
    cart.catch((err) => {
      console.log("item not added to cart successfully...");
    });
  });
  dish.catch((err) => {
    console.log(err);
  });
};

zomato();
