const googlePay = () => {
  console.log("Google Pay called..");
  return 100;
};

const phonePe = () => {
  console.log("PhonePe");
  return 200;
};

const paytm = () => {
  console.log("Paytm");
  return 50;
};

const payment = (cb) => {
  console.log("Payment Gateway");
  var amount = cb(); //function call,,,
  console.log("Amount: ", amount);
};

payment(paytm);



