//nested promise... and depedent data...

const searchDish = () => {
  console.log("searching dish....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("dish dound..")
      resolve({ dishName: "Marg Pizza", price: 300 });
    }, 3000);
  });
};

const placeOrder = (dish) => {
  console.log("placing order...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "order has been placed.", dish });
    }, 3000);
  });
};

const zomato = () => {
  console.log("welcome to zomato...");
  var dish = searchDish();
  dish.then((data) => {
    console.log(data);
    var order = placeOrder(data);
    order.then((data) => {
      console.log(data);
    });
  });
};

zomato();
