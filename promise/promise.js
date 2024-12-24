// console.log("starts")
// var x;
// setTimeout(()=>{
//     console.log("i am about to go...")
//     x=100
// },2000)
// console.log("end",x)

// const placeOrder = ()=>{
//     console.log("order placed...")
// }
// setTimeout(()=>{
//     placeOrder()
// },6000)
// const payment=()=>{
//     console.log("payment done....")
// }
// setTimeout(()=>{
//     payment()
// },5000)

const getData = () => {
  //resolve rej both are callback function...
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("promise has been resolved,we afe going goa...")
      reject("promise has been rejected, we are not going to Goa");
    }, 2000);

    //resolve("data...")
    //reject("error...")
  });
  console.log(promise); //pending...
  //if promise get resolved
  promise.then((data) => {
    console.log(data);
  });

  promise.catch((err) => {
    console.log(err);
  });
};

getData();

