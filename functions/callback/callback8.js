const googlePay = (amount) => {
    console.log("Google Pay called..");
    return amount + " payed";
  };
  
  const phonePe = (amount) => {
    console.log("PhonePe");
    return amount + " payed";
  };
  
  const paytm = (amount) => {
    console.log("Paytm");
    return amount + " payed";
  };
  
  const payment = (cb) => {
    console.log("Payment Gateway");
    var amount = cb(1000); //function call,,,
    console.log("Amount: ", amount);
  };
  

  var upi = "paytm";
  switch(upi){
        case "googlePay":
            payment(googlePay);
            break;
        case "phonePe":
            payment(phonePe);
            break;
        case "paytm":
            payment(paytm);
            break;
        default:
            console.log("Invalid UPI");
  }
//  payment(paytm);
  
  
  
  